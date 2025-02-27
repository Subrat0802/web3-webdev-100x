import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react'

const ShowBalance = () => {
    const {connection} = useConnection();
    const wallet = useWallet();

    async function getBalance(){
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance").innerHTML = `SOL Balance: ${balance / LAMPORTS_PER_SOL}`;
    }
    getBalance()
  return (
    <div>
        <p id='balance'></p>
    </div>
  )
}

export default ShowBalance