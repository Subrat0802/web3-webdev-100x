import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { useRef } from 'react'

const SendToken = () => {
    const wallet = useWallet();
    const {connection} = useConnection();
    const refResult = useRef();
    

    const sendSOLtoken = async () => {
        let to = document.getElementById("to").value;
        let amount = refResult.current.value;
        const transection = new Transaction();
        transection.add(SystemProgram.transfer({
            fromPubkey:wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL
        }))

        await wallet.sendTransaction(transection, connection);
        alert("sent " + amount + " SOL TO " + to)
    }
  return (
    <div>
        <input id='to' placeholder='send to' type='text'/>
        <input type="text" placeholder='amount' ref={refResult}/>
        <button onClick={sendSOLtoken}>send SOL token</button>
    </div>
  )
}

export default SendToken