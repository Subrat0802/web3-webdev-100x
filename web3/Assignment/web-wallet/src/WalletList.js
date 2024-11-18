import React from 'react';

function WalletList({ wallets }) {
  return (
    <div>
      <h3>Generated Wallets</h3>
      <ul>
        {wallets.map((wallet, index) => (
          <li key={index}>
            <strong>Wallet {wallet.index}:</strong> <br />
            Public Key (Address): {wallet.publicKey} <br />
            Private Key: {wallet.privateKey}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WalletList;
