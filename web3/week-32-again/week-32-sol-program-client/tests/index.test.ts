import {expect, test} from "bun:test";
import {
    Connection,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction
} from "@solana/web3.js";
import { COUNTER_SIZE } from "./types";

let adminAccount = Keypair.generate();
let dataAccount = Keypair.generate();

const PROGRAM_ID = new PublicKey("A4GuRSaYPyo2tnrX3fPcBqUrV96LgBzE1RFKnMV4MA2d");

const connection = new Connection("https://rpc.ankr.com/solana_devnet/0f249a6479cf778b3c6b150968d990bc9ab22ad7519c82d7ce5f39a091df42a1", "confirmed");

test("Account is initialized", async () => {
    const sig = await connection.requestAirdrop(adminAccount.publicKey, 0.5 * LAMPORTS_PER_SOL);
    await connection.confirmTransaction(sig, "finalized");

    const balance = await connection.getBalance(adminAccount.publicKey);
    if (balance === 0) throw new Error("Airdrop failed, balance still 0");

    const lamports = await connection.getMinimumBalanceForRentExemption(COUNTER_SIZE);
    const ix = SystemProgram.createAccount({
        fromPubkey: adminAccount.publicKey,
        lamports,
        space: COUNTER_SIZE,
        programId: PROGRAM_ID,
        newAccountPubkey: dataAccount.publicKey
    });

    const tx = new Transaction().add(ix);
    const signature = await connection.sendTransaction(tx, [adminAccount, dataAccount]);
    await connection.confirmTransaction(signature, "finalized");

    console.log("Created data account:", dataAccount.publicKey.toBase58());
});
