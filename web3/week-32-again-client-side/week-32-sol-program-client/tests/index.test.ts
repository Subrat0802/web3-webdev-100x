import {expect, test} from "bun:test";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { COUNTER_SIZE } from "./types";

let adminAcc = Keypair.generate();
let dataAcc = Keypair.generate();

const PROGRAM_ID = new PublicKey("2iNPnuhTuLysbTgWuwMzCqTNLE6t9kn8edUnzi9ZtMbK");
const connection = new Connection("http://127.0.0.1:8899");

test("Account is initialized", async () => {
    const txn = await connection.requestAirdrop(adminAcc.publicKey, 1 * 1000_000_000);
    await connection.confirmTransaction(txn);

    const data = await connection.getAccountInfo(adminAcc.publicKey); 
    // console.log(data);

    const lamports = await connection.getMinimumBalanceForRentExemption(COUNTER_SIZE);

    const ix = SystemProgram.createAccount({
        fromPubkey: adminAcc.publicKey,
        lamports,
        space:COUNTER_SIZE,
        programId:PROGRAM_ID,
        newAccountPubkey: dataAcc.publicKey
    })

    const createAccountTxn = new Transaction();
    createAccountTxn.add(ix);
    const signature = await connection.sendTransaction(createAccountTxn, [adminAcc, dataAcc]);
    await connection.confirmTransaction(signature);
    console.log(dataAcc.publicKey.toBase58());
})