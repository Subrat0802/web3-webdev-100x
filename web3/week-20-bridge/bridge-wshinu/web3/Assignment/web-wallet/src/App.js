import React, { useState } from 'react';
import { createWalletsFromMnemonic } from './utils/wallet'; // Import wallet utility
import Mnemonic from './Mnemonic'; // Import Mnemonic component
import WalletList from './WalletList'; // Import WalletList component

function App() {
  const [mnemonic, setMnemonic] = useState(null);
  const [wallets, setWallets] = useState([]);

  // Handle the creation of wallets from the mnemonic
  const generateWallets = () => {
    if (mnemonic) {
      const generatedWallets = createWalletsFromMnemonic(mnemonic, 1); // generate 5 wallets
      setWallets(generatedWallets);
    }
  };

  return (
    <div className="App">
      <h1>Web-Based Wallet</h1>
      
      {/* Mnemonic Generation */}
      {!mnemonic ? (
        <Mnemonic setMnemonic={setMnemonic} />
      ) : (
        <div>
          <h3>Generated Mnemonic:</h3>
          <textarea value={mnemonic} readOnly rows="4" cols="50" />
          <button onClick={generateWallets}>Generate Wallets</button>
        </div>
      )}
      
      {/* Display the wallets */}
      {wallets.length > 0 && <WalletList wallets={wallets} />}
    </div>
  );
}

export default App;
