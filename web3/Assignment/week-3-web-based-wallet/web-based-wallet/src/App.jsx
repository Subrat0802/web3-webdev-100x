import { useState } from "react";
import { generateMnemonic } from "bip39";
import "./App.css";
import { SolanaWallet } from "./components/SolanaWallet";
import { EthWallet } from "./components/EthWallet";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  const createMnumonics = async () => {
    const mn = await generateMnemonic();
    setMnemonic(mn);
  };

  return (
    <>
      {mnemonic === "" ? <span></span> : <ul>
        {mnemonic.split(" ").map((el, i) => <li key={i}>{el}</li>)}
      </ul>}
      <button onClick={createMnumonics}>Create Seed Phrase</button>
      <SolanaWallet />
      <EthWallet />
    </>
  );
}

export default App;
