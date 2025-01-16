import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useEffect } from "react";

const ShowBalance = () => {
  const { connection } = useConnection();
    const wallet = useWallet();

  async function getUserBalance() {
    const balance = await connection.getBalance(wallet.publicKey);
    console.log("balance", balance);
    document.getElementById("balance").innerText = balance / LAMPORTS_PER_SOL;
  }

  useEffect(() => {
    getUserBalance();
  }, []);

  return (
    <div>
      <p>balance:</p>
      <p id="balance"></p>
    </div>
  );
};

export default ShowBalance;
