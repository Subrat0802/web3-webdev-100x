import React from "react";
import { generateMnemonicPhrase } from "./utils/mnemonic"; // Corrected path to utils

function Mnemonic({ setMnemonic }) {
  const handleGenerateMnemonic = () => {
    const newMnemonic = generateMnemonicPhrase(); // Generate a new mnemonic
    setMnemonic(newMnemonic); // Set mnemonic to state
  };

  return (
    <div>
      <button onClick={handleGenerateMnemonic}>Generate Mnemonic</button>
    </div>
  );
}

export default Mnemonic;
