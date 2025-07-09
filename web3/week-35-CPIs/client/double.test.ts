import { LiteSVM } from "litesvm";
import {test, expect} from "bun:test";
import {
	PublicKey,
	Transaction,
	SystemProgram,
	Keypair,
	LAMPORTS_PER_SOL,
    TransactionInstruction,
} from "@solana/web3.js";

test("one transfer", () => {
	const svm = new LiteSVM();
    const contractPubkey = PublicKey.unique();
    svm.addProgramFromFile(contractPubkey, "./double.so")
	const payer = new Keypair();
	svm.airdrop(payer.publicKey, BigInt(LAMPORTS_PER_SOL));
	const dataAccount = new Keypair();
	const blockhash = svm.latestBlockhash();
	const ixs = [
		SystemProgram.createAccount({
			fromPubkey: payer.publicKey,
			newAccountPubkey: dataAccount.publicKey,
            lamports: Number(svm.minimumBalanceForRentExemption(BigInt(4))),
            space: 4,
            programId: contractPubkey
		}),
	];


	const tx = new Transaction();
	tx.recentBlockhash = blockhash;
	tx.add(...ixs);
	tx.sign(payer, dataAccount);
	svm.sendTransaction(tx);
	const balanceAfter = svm.getBalance(dataAccount.publicKey);
	expect(balanceAfter).toBe(svm.minimumBalanceForRentExemption(BigInt(4)));
    
    //
	function doubleIt() {
		const ix2 = new TransactionInstruction({
        keys: [
            {pubkey: dataAccount.publicKey, isSigner: false, isWritable: true},
        ],
        programId: contractPubkey,
        data: Buffer.from(""),
    })
		const blockhash = svm.latestBlockhash();
		const tx2 = new Transaction();
		tx2.recentBlockhash = blockhash;
		tx2.add(ix2);
		tx2.sign(payer);
		svm.sendTransaction(tx2);
		svm.expireBlockhash();
	}

	doubleIt();
	doubleIt();
	doubleIt();
	doubleIt(); 

    const newDataAcc = svm.getAccount(dataAccount.publicKey);
    
	expect(newDataAcc?.data[0]).toBe(8);
	expect(newDataAcc?.data[1]).toBe(0);
	expect(newDataAcc?.data[2]).toBe(0);
	expect(newDataAcc?.data[3]).toBe(0);

});