import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React from "react";

const RequestAirdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const requestAirdropZZ = () => {
    const publicKey = wallet.publicKey;
    const amount = document.getElementById("amount").value;
    const x = connection.requestAirdrop(publicKey, amount*LAMPORTS_PER_SOL);
    console.log(x);
  };

  return (
    <div>
      <input type="text" placeholder="Amount.." id="amount"/>
      <button onClick={requestAirdropZZ}>Request airdrop</button>
     
    </div>
  );
};

export default RequestAirdrop;
