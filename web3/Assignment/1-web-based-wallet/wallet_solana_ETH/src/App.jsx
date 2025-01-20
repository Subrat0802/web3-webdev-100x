import { useState } from "react";
import { createBrowserRouter, Outlet } from "react-router";
import Header from "./components/Header";
import SolanaWallet from "./pages/SolanaWallet";
import ETHWallet from "./pages/ETHWallet";
import HomePage from "./pages/HomePage";
import { Toaster } from "sonner";

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
    children:[
      {
        path:"/",
        element:<HomePage />
      },
      {
        path:"/SOL-wallet",
        element:<SolanaWallet />
      },
      {
        path:"/ETH-wallet",
        element:<ETHWallet />
      }
    ]
  }
])


export default App;
