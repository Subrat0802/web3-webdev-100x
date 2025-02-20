import { useState } from "react"
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"

const Solana = ({mneomonics}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
    console.log("publicKeys", publicKeys)

  return (
    <div className='flex w-[50%] h-[70%] items-center flex-col'>
        <p className='font-bold text-2xl mb-8'>Solana</p>
        {publicKeys.map(p => <div>
            {p.toBase58()}
        </div>)}
        <button onClick={function() {
            const seed = mnemonicToSeed(mneomonics);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex + 1);
            setPublicKeys([...publicKeys, keypair.publicKey]);
        }} className='bg-yellow-300 text-black p-3 rounded-lg font-semibold mt-4'>Add Wallet</button>
    </div>
  )
}

export default Solana

//w-[80%] min-h-[80vh]