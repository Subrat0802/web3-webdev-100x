import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, Connection } from '@solana/web3.js';
import React from 'react'

const RequestAirDrop = () => {
    const wallet = useWallet();
    const {connection} = useConnection();


    const requestAirdrop = () => {
        const publicKey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
        connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
    }   
  return (
    <div>
        <input placeholder='Amount' type='text' id='amount'/>
        <button onClick={requestAirdrop}>Request airdrop</button>
        {/* <p>{wallet.publicKey?.toBase58()}</p> */}
    </div>
  )
}

export default RequestAirDrop