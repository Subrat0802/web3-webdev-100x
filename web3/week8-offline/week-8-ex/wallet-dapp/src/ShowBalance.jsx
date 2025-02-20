import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect, useState } from 'react'

const ShowBalance = () => {
    
    const {connection} = useConnection();
    const wallet = useWallet();

    const showBalance = async () => {
        const bal = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance").innerText = bal;
    }

    useEffect(() => {
        showBalance();
    }, []);
    
  return (
    <div>ShowBalance <p id='balance'></p></div>
  )
}

export default ShowBalance