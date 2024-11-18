import { generateMnemonic } from "bip39";  // Correct import

// Function to generate a mnemonic phrase
export const generateMnemonicPhrase = () => {
  return generateMnemonic();  // Generate and return a new mnemonic
};
