import React from 'react'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'
 
const client = createPublicClient({ 
  chain: mainnet, 
  transport: http(), 
}) 

const Viem = () => {
    const getBalance = async () => {
        const balance = await client.getBalance({address:"0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD"})
        console.log("balance", balance)
    }

  return (
    <div>
        <button onClick={getBalance}>Get Balance</button>    
    </div>
  )
}

export default Viem