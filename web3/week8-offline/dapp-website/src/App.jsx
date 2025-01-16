import React, { FC, useMemo } from "react";
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
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "./App.css";
import RequestAirdrop from "./RequestAirdrop";
import ShowBalance from "./ShowBalance";
import { SendTokens } from "./SendTokens";
import { SignMessage } from "./SignMessage";

function App() {
  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div>
              <WalletMultiButton />
              {/* <ShowBalance />
              <RequestAirdrop /> */}
              {/* <WalletDisconnectButton /> */}

              {/* <SendTokens /> */}
              <SignMessage />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
