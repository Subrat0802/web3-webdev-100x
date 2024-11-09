import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

const Airdrop = () => {
    const wallet = useWallet();
    const connection = useConnection();
    const sendAirdropToUser = async () => {
        await connection.requestAirdrop(wallet.publicKey, 10);
        alert("Airtdrop sol")
    }
  return (
    <div>
        
        <input type='text' placeholder='amount' />
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
  )
}

export default Airdrop