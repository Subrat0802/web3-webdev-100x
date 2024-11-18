import { ethers } from 'ethers';  // Correct import

// Function to create wallets from a mnemonic
export const createWalletsFromMnemonic = (mnemonic, count) => {
  const wallets = [];

  // Create a HDNode from the mnemonic using the correct syntax for ethers.js v6+
  const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);

  for (let i = 0; i < count; i++) {
    // Derive a wallet for each index using the derivation path: m/44'/60'/0'/0/i
    const derivedNode = hdNode.derivePath(`m/44'/60'/0'/0/${i}`);
    const wallet = new ethers.Wallet(derivedNode.privateKey);
    
    // Push wallet details (index, publicKey, privateKey)
    wallets.push({
      index: i + 1,  // Starting index at 1
      publicKey: wallet.address,
      privateKey: wallet.privateKey,
    });
  }

  return wallets;  // Return the wallets with public and private keys
};
