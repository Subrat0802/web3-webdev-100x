import { useWallet } from "@solana/wallet-adapter-react";
import React, { useRef } from "react";
import { ed25519 } from "@noble/curves/ed25519";
import bs58 from "bs58";

const SignMsg = () => {
  const { publicKey, signMessage } = useWallet();
  const msgRef = useRef();
  const signMsgblock = async () => {
    console.log("hello")
    try {
      if (!publicKey) throw new Error("Wallet not connected");
      if (!signMessage) throw new Error("Wallet does not support message sign");
      
      const message = msgRef.current.value;
      const encodeMessage = new TextEncoder().encode(message);
    //   console.log("encodemsg", encodeMessage);
      const signature = await signMessage(encodeMessage);
    

      if (!ed25519.verify(signature, encodeMessage, publicKey.toBytes())) throw new Error('Message signature invalid!')
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    } catch (err) {
      alert("error");
    }
  };
  return (
    <div className="mt-10 flex gap-2">
        <p>Sign msg: </p>
      <input ref={msgRef} placeholder="Sign message" className="text-black" />
      <button className="bg-[#483c77] px-4 rounded-lg" onClick={signMsgblock}>
        Sign msg
      </button>
    </div>
  );
};

export default SignMsg;
