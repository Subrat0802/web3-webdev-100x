import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect } from 'react'

const SHowBalance = () => {
    const {connection} = useConnection();
    const wallet = useWallet();

    async function getBalance(){
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance").innerHTML = `SOL BALANCE: ${balance / LAMPORTS_PER_SOL}`
    }

    useEffect(() => {
        getBalance();
        
    }, [connection, wallet.publicKey]);
    
  return (
    <div className='text-white p-6 my-6 mt-14 rounded-lg'>
        <p id='balance'></p>
    </div>
  )
}

export default SHowBalance