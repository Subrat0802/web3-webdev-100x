import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import "./App.css";
import RequestAirDrop from './RequestAirDrop';
import ShowBalance from './ShowBalance';
import SendToken from './SendToken';
import { SignMessage } from './SignMessage';

function App() {

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/t78XHJcPNWsglQhUzzG4hTwrNUi1FzJ4"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    <div>
                      <RequestAirDrop />
                      <ShowBalance />
                      <br />
                      <SendToken />
                      <br />
                      <SignMessage />
                    </div>


                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App;
