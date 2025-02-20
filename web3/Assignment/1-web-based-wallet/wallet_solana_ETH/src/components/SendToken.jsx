import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { useRef } from 'react'

const SendToken = () => {

    const wallet = useWallet();
    const {connection} = useConnection();
    const refToken = useRef();
    const amountRef = useRef();

    const sendToken = async () => {
        try{
            const token = refToken.current.value;
            const amount = amountRef.current.value;

            const transaction = new Transaction();
            transaction.add(SystemProgram.transfer({
                fromPubkey:wallet.publicKey,
                toPubkey: new PublicKey(token),
                lamports: amount * LAMPORTS_PER_SOL,
            }))

            await wallet.sendTransaction(transaction, connection);
            alert(`Sent ${amount} SOL to ${token}`);
        }catch(err){
            console.log("error", err);
        }
    }
  return (
    <div className='flex gap-2'>
        <p>Send token: </p>
        <input className='text-black' ref={refToken} placeholder='Send to'/>
        <input className='text-black' ref={amountRef} placeholder='Amount'/>
        <button className='bg-[#483c77] px-4 rounded-lg' onClick={sendToken}>Send Token</button>
    </div>
  )
}

export default SendToken