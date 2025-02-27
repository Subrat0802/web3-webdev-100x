import { getMinimumBalanceForRentExemptMint, MINT_SIZE, TOKEN_PROGRAM_ID, createInitializeMint2Instruction } from "@solana/spl-token";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function TokenLaunchpad() {
  const wallet = useWallet();
  const { connection } = useConnection();  // Destructure `connection` here

  async function createToken() {
    const name = document.getElementById("name").value;
    const symbol = document.getElementById("symbol").value;
    const image = document.getElementById("image").value;
    const initialSupply = document.getElementById("initialSupply").value;

    // Use the connection directly within the helper method
    const lamports = await getMinimumBalanceForRentExemptMint(connection);  
    const keypair = Keypair.generate();

    const transaction = new Transaction().add(
      SystemProgram.createAccount({
        fromPubkey: wallet.publicKey,
        newAccountPubkey: keypair.publicKey,
        space: MINT_SIZE,
        lamports,
        programId: TOKEN_PROGRAM_ID,
      }),
      createInitializeMint2Instruction(
        keypair.publicKey,
        6,
        wallet.publicKey,
        wallet.publicKey,
        TOKEN_PROGRAM_ID
      )
    );

    const recentBlockhash = await connection.getLatestBlockhash();
    transaction.recentBlockhash = recentBlockhash.blockhash;
    transaction.feePayer = wallet.publicKey;

    transaction.partialSign(keypair);
    let response = await wallet.sendTransaction(transaction, connection);
    console.log(response);
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Solana Token Launchpad</h1>
      <input
        className="inputText"
        type="text"
        placeholder="Name"
        id="name"
      ></input>{" "}
      <br />
      <input
        className="inputText"
        type="text"
        placeholder="Symbol"
        id="symbol"
      ></input>{" "}
      <br />
      <input
        className="inputText"
        type="text"
        placeholder="Image URL"
        id="image"
      ></input>{" "}
      <br />
      <input
        className="inputText"
        type="text"
        placeholder="Initial Supply"
        id="initialSupply"
      ></input>{" "}
      <br />
      <button className="btn" onClick={createToken}>
        Create a token
      </button>
    </div>
  );
}
