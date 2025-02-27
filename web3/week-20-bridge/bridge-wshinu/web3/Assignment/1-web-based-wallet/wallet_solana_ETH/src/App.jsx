import { useState } from "react";
import { createBrowserRouter, Outlet } from "react-router";
import Header from "./components/Header";
import SolanaWallet from "./pages/SolanaWallet";

import HomePage from "./pages/HomePage";
import { Toaster } from "sonner";
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
import ExpolreSolana from "./pages/ExpolreSolana";

function App() {
  return (
    <div id="" className="min-h-screen bg-[#0A0A0A] text-white">
      <Toaster />
      <Header />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/wallet/:id",
        element: <SolanaWallet />,
      },
      {
        path: "/explore_solana",
        element: (
          <ConnectionProvider
            endpoint={
              "https://api.devnet.solana.com"
            }
          >
            <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                <div className="flex w-full justify-between px-96 mt-14">
                  <WalletMultiButton />
                  <WalletDisconnectButton />
                </div>

                <ExpolreSolana />
              </WalletModalProvider>
            </WalletProvider>
          </ConnectionProvider>
        ),
      },
    ],
  },
]);

export default App;
