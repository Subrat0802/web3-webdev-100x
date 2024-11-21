import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react'

const Airdrop = () => {
    const wallet = useWallet();
    const {connection} = useConnection();
    // const inp = document.getElementById("input").value;
    const sendAirdropToUser = async () => {
        await connection.requestAirdrop(wallet.publicKey, 1000000000);
        // console.log("first", wallet.publicKey);
        alert("Airtdrop sol")
    }
  return (
    <div>
        
        <input id='value' type='text' placeholder='amount' />
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  )
}

export default Airdrop