import React from 'react'
import SHowBalance from '../components/SHowBalance'
import SendToken from '../components/SendToken'
import SignMsg from '../components/SignMsg'
import Airdrop from '../components/Airdrop'

const ExpolreSolana = () => {
  return (
    <div className='w-10/12 flex flex-col items-center mt-3 pb-10 justify-center mx-auto border'>
        <SHowBalance />
        <SendToken />
        <SignMsg />
        <Airdrop />
    </div>
  )
}

export default ExpolreSolana