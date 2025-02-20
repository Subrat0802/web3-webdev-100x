import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { useRef } from 'react';

const Airdrop = () => {
    const amountRef = useRef();
    const { connection } = useConnection();
    const wallet = useWallet();

    const airdropSOL = async () => {
        if (!wallet.publicKey) {
            alert("Please connect your wallet first!");
            return;
        }

        try {
            const amount = parseFloat(amountRef.current.value);
            if (isNaN(amount) || amount <= 0) {
                alert("Enter a valid SOL amount!");
                return;
            }

            const data = await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
            console.log("Airdrop Transaction:", data);
            alert(`Airdropped SOL: ${amount}`);
        } catch (err) {
            console.error("Airdrop error:", err);
            alert("Airdrop failed! Please try again.");
        }
    };

    return (
        <div className='mt-10 flex gap-2'>
            <p>Airdrop Sol: </p>
            <input ref={amountRef} className='text-black px-2 py-1 border rounded' placeholder='Enter SOL amount' />
            <button onClick={airdropSOL} className='bg-[#483c77] px-4 py-1 text-white rounded-lg'>Airdrop SOL</button>
        </div>
    );
};

export default Airdrop;
