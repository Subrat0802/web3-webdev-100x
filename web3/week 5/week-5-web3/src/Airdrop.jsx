import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react'


const Airdrop = () => {

    const wallet = useWallet();


    const {connection} = useConnection();

    const sendAirDropToUser = async () => {
        try{
            const amount = document.getElementById("publickKey").value;
            await connection.requestAirdrop(wallet.publicKey, amount*LAMPORTS_PER_SOL)
            alert("airdropped sol");
        }catch(err){
            alert("Not sended");
        }
            
    }
  return (
    <div>
        {/* <p>{`hello mr your public key is: ${wallet.publicKey.toString()}`}</p> */}
        <input type='number' placeholder='sol' id='publickKey' />
        <button onClick={sendAirDropToUser}>Request dev Airdrop</button>
    </div>
  )
}

export default Airdrop