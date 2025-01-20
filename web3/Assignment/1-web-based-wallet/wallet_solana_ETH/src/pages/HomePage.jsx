import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

const HomePage = () => {
    const naviagte = useNavigate();
    const generateSolanaWallet = () => {
        naviagte("/SOL-wallet")
        toast.success("Creating Solana Wallet")
    }
    const generateEthereumWallet = () => {
        naviagte("/ETH-wallet")
        toast.success("Creating Ethereum Wallet")
    }

  return (
    <div className='bg-[#0A0A0A] text-white min-h-screen flex justify-center pt-10'>
        <div className='w-10/12'>
            <p className='text-7xl mb-4 font-semibold text-green-600'><span className=' text-yellow-500'>Wallet</span> supports multiple blockchains</p>
            <p className='text-xl'>Choose a blockchain to get started.</p>
            <div className=' py-4 flex flex-wrap gap-3'>
                <button onClick={generateSolanaWallet} className='bg-white text-black py-2 px-4 rounded-md hover:bg-slate-200 transition-all duration-200' >Solana</button>
                <button onClick={generateEthereumWallet} className='bg-white text-black py-2 px-4 rounded-md hover:bg-slate-200 transition-all duration-200'>Ethereum</button>
            </div>
        </div>
    </div>
  )
}

export default HomePage