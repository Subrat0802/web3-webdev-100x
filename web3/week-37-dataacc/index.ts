import { Connection, Keypair, SystemProgram, Transaction } from "@solana/web3.js";
const connection = new Connection("http://127.0.0.1:8899");

async function main(){
    const kp = new Keypair();
    const dataAccount = new Keypair();


    const signature = await connection.requestAirdrop(kp.publicKey, 2000_000_000);
    console.log(signature)
    await connection.confirmTransaction(signature);
    // await new Promise(r => setTimeout(r, 10000));
    const balance = await connection.getBalance(kp.publicKey);
    // console.log("balance:", balance);

    const instruction = SystemProgram.createAccount({
        fromPubkey:kp.publicKey,
        newAccountPubkey:dataAccount.publicKey,
        lamports:1000_000_000,
        space:8,
        programId:SystemProgram.programId
    })

    const txn = new Transaction().add(instruction);
    txn.feePayer = kp.publicKey;
    txn.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    txn.sign(kp);

    await connection.sendTransaction(txn, [kp, dataAccount]);
    console.log(dataAccount.publicKey.toBase58());

}

main();