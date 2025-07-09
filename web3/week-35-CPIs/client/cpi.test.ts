import { Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction } from "@solana/web3.js";
import {expect, test} from "bun:test";
import { LiteSVM } from "litesvm";

test("CPI works as expected", async () => {
    let svm = new LiteSVM();
    let doubleContract = PublicKey.unique();
    let cpiContract = PublicKey.unique();
    svm.addProgramFromFile(doubleContract, "./double.so");
    svm.addProgramFromFile(cpiContract, "./cpi.so");

    let userAcc = new Keypair();
    let daatAcc = new Keypair();
    svm.airdrop(userAcc.publicKey, BigInt(1000_000_000));

    createDataAccOnChain(svm, daatAcc, userAcc, doubleContract);

    let ix = new TransactionInstruction({
        keys: [
            {pubkey: daatAcc.publicKey, isSigner: true, isWritable: true},
            {pubkey: doubleContract, isSigner: false, isWritable: true},
        ],
        programId: cpiContract,
        data: Buffer.from(""),
    })
    let blockhash = svm.latestBlockhash();
    let transaction = new Transaction().add(ix);
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = userAcc.publicKey;
    transaction.add(ix);
    transaction.sign(userAcc, daatAcc);

    const dataAccountData = svm.getAccount(daatAcc.publicKey);
    expect(dataAccountData?.data[0]).toBe(1);
    expect(dataAccountData?.data[1]).toBe(0);
    expect(dataAccountData?.data[2]).toBe(0);
    expect(dataAccountData?.data[3]).toBe(0);

})


function createDataAccOnChain(svm: LiteSVM, dataAccount: Keypair, payer: Keypair, contractPubkey: PublicKey) {
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
}