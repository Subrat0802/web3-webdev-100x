import React, { useState } from "react";
import { generateMnemonic, mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { Wallet, HDNodeWallet } from "ethers";

const SolanaWallet = () => {
  const [genWallet, setGenWallet] = useState(true);
  const [mnemonics, setMnemonics] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publicKeys, setPublicKeys] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const generateWallet = async () => {
    const mn = generateMnemonic();
    setMnemonics(mn);

    addWallet();
    localStorage.setItem("mnemonics", JSON.stringify(mn.split(" ")));
    setGenWallet(!genWallet);
    toast.success(`${id} wallet is created`);
  };

  const addWallet = async () => {
    const seed = await mnemonicToSeed(mnemonics);
    if (id === "Solana") {
      const path = `m/44'/501'/${currentIndex}'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;
      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
      const keypair = Keypair.fromSecretKey(secret);

      setPublicKeys([
        ...publicKeys,
        {
          publicKey: keypair.publicKey.toBase58(),
          privateKey: Buffer.from(secret).toString("base64"),
        },
      ]);
      setCurrentIndex(currentIndex + 1);
      toast.success("New Solana wallet added!");
    } else if (id === "Ethereum") {
      const path = `m/44'/60'/${currentIndex}'/0'`;
      const hdNode = HDNodeWallet.fromSeed(seed);
      const child = hdNode.derivePath(path);
      const wallet = new Wallet(child.privateKey);

      setPublicKeys([
        ...publicKeys,
        {
          publicKey: wallet.address,
          privateKey: wallet.privateKey,
        },
      ]);
      setCurrentIndex(currentIndex + 1);
      toast.success("New Ethereum wallet added!");
    }
  };

  const deleteWallet = (index) => {
    const updatedKeys = publicKeys.filter((_, i) => i !== index);
    setPublicKeys(updatedKeys);
    toast.success(`Wallet ${index + 1} deleted successfully`);
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-10/12 pt-10">
        {genWallet ? (
          <div>
            <p className="text-7xl mb-3 font-bold">Secret Recovery Phrase</p>
            <p className="text-xl mb-12">Save these words in a safe place.</p>
            <div className="flex gap-3">
              <input
                className="w-[70%] bg-[#0f0f0f] p-2 rounded-md"
                placeholder="Enter your secret phrase (or leave blank to generate)"
                value={mnemonics}
                onChange={(e) => setMnemonics(e.target.value)}
              />
              <button
                onClick={generateWallet}
                className="bg-white text-black py-2 px-4 rounded-md hover:bg-slate-200 transition-all duration-200"
              >
                Generate Wallet
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Mnemonics */}
            <div className="w-full mb-6 pb-4 flex justify-between items-center">
              <p className="text-4xl">Your Secret Phrase</p>
            </div>
            <div className="grid grid-cols-4 gap-5 justify-evenly">
              {mnemonics
                .trim()
                .split(" ")
                .map((el, i) => (
                  <p
                    key={i}
                    className="bg-[#131212] py-2 text-xl font-light px-5 rounded-md"
                  >
                    {el}
                  </p>
                ))}
            </div>
            {/* Wallet List */}
            <div>
              <div className="w-full my-6 py-4 flex justify-between items-center">
                <p className="text-4xl">{id} Wallets</p>
                <div className="flex gap-3">
                  <button
                    className="px-6 bg-white hover:bg-slate-300 text-black p-2 rounded-md transition-all duration-200"
                    onClick={addWallet}
                  >
                    Add Wallet
                  </button>
                  <button
                    className="px-6 bg-red-700 hover:bg-red-800 text-white p-2 rounded-md transition-all duration-200"
                    onClick={() => {
                      setPublicKeys([])
                      navigate("/")
                    }}
                  >
                    Clear Wallets
                  </button>
                </div>
              </div>

              {publicKeys.map((key, index) => (
                <div
                  className="border border-[#131212] rounded-lg p-6 flex flex-col gap-4 mb-6 bg-[#131212]"
                  key={index}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold text-white">
                      Wallet {index + 1}
                    </p>
                    <button
                      onClick={() => deleteWallet(index)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200 flex items-center gap-2"
                    >
                      Delete
                    </button>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Public Key:</p>
                    <div className="flex items-center justify-between bg-[#0f0f0f] px-4 py-2 rounded-md">
                      <p className="text-white text-sm truncate">
                        {key.publicKey}
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(key.publicKey);
                          toast.success("Public Key copied to clipboard!");
                        }}
                        className="text-blue-200 hover:text-yellow-400 transition-colors duration-200"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Private Key:</p>
                    <div className="flex items-center justify-between bg-[#0f0f0f] px-4 py-2 rounded-md">
                      <p className="text-white text-sm truncate">
                        {key.privateKey}
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(key.privateKey);
                          toast.success("Private Key copied to clipboard!");
                        }}
                        className="text-blue-200 hover:text-yellow-400 transition-colors duration-200"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolanaWallet;
