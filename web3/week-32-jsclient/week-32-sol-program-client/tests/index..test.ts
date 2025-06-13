import * as borsh from "borsh";
import {expect, test} from "bun:test";
import {Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";
import { COUNTER_SIZE, CounterAccount, schema } from "./types";


let adminAccount = Keypair.generate();
let dataAccount = Keypair.generate();

const PROGRAM_ID = new PublicKey("CeCf6DWGYpieGzAxApVFwiF16Jq7pUVAdnyAF8Zmvc3o");
const connection = new Connection("http://127.0.0.1:8899");

test("Account is initialized", async () => {
    const txn = await connection.requestAirdrop(adminAccount.publicKey, 1 * LAMPORTS_PER_SOL);
    await connection.confirmTransaction(txn, "confirmed");

    const data = await connection.getAccountInfo(adminAccount.publicKey);
    
    //airdrop done
    const lamports = await connection.getMinimumBalanceForRentExemption(COUNTER_SIZE);

    const ix = SystemProgram.createAccount({
        fromPubkey: adminAccount.publicKey,
        lamports,
        space: COUNTER_SIZE,
        programId: PROGRAM_ID,
        newAccountPubkey: dataAccount.publicKey
    })

    const createAccountTxn = new Transaction();
    createAccountTxn.add(ix);
    const signature = await connection.sendTransaction(createAccountTxn, [adminAccount, dataAccount]);

    await connection.confirmTransaction(signature);

    console.log(dataAccount.publicKey.toBase58());

    const dataAccountInfo = await connection.getAccountInfo(dataAccount.publicKey);
    if(!dataAccountInfo) {
        throw new Error("Counter account not found");
    }
    const counter = borsh.deserialize(schema, dataAccountInfo.data) as CounterAccount;
    console.log(counter.count);
    expect(counter.count).toBe(0);
})