import { Keypair, Connection, LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js";

const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/6-6uS3rthnfcl39po9y4d");

async function main() {
  const kp = Keypair.generate();
  const dataAccount = new Keypair();
  try {
    const sig = await connection.requestAirdrop(kp.publicKey, 0.3 * LAMPORTS_PER_SOL);

    await connection.confirmTransaction(sig, "confirmed");

    const bal = await connection.getBalance(kp.publicKey);
    console.log(`Balance: ${bal} lamports (${bal / LAMPORTS_PER_SOL} SOL)`);

    const instruction = SystemProgram.createAccount({
        fromPubkey: kp.publicKey,
        newAccountPubkey: dataAccount.publicKey,
        lamports: 0.1 * LAMPORTS_PER_SOL,
        space: 8,
        programId:SystemProgram.programId
    })

    const txn = new Transaction().add(instruction);
    txn.feePayer = kp.publicKey;
    txn.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    txn.sign(kp)

    await connection.sendTransaction(txn, [kp, dataAccount]);
    console.log(dataAccount.publicKey.toBase58());
  } catch (err) {
    console.error("Airdrop failed:", err);
  }
}

main();
