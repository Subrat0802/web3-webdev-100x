import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import Airdrop from "./Airdrop";
import ShowBalance from "./ShowBalance";
import { SendTokens } from "./SendToken";
import { SignMessage } from "./SignMessage";

function App() {

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/6CXNCyzsZ3xwqqK6Z1Pxot152urqG-bs"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider >
          <WalletMultiButton />
          <WalletDisconnectButton />
          <div>
            <ShowBalance />
          </div>
          <Airdrop />

          <br />
          <div>
            <SendTokens />
          </div>
          <SignMessage />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;



