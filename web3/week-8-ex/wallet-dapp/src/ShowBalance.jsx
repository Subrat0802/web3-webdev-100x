import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useEffect, useState } from 'react'

const ShowBalance = () => {
    const [balance, setBalance] = useState(null);
    const {connection} = useConnection();
    const wallet = useWallet();

    const showBalance = async () => {
        const bal = await connection.getBalance(wallet.publicKey);
        setBalance(bal/LAMPORTS_PER_SOL);
    }
    useEffect(() => {
        showBalance();
    })
    
  return (
    <div>ShowBalance {balance}</div>
  )
}

export default ShowBalance