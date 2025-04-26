import { useAccount, useConnect, useConnectors, useDisconnect, useReadContract, WagmiProvider } from "wagmi";
import "./App.css";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Address} from "viem";
import { AllowUSDT } from "./AllowUSDT";

const client = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <ConnectWallet />
        <TotalSupply />
        <AllowUSDT />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;


function TotalSupply(){
  const address = useAccount();
  const { data, isLoading } = useReadContract({
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    abi: [
        {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
            "name": "",
            "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
        },
        {
          constant: true,
          inputs: [{ name: "who", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        }
    ],
    functionName: 'balanceOf',
    args:[address?.toString() as Address ]   ///?? "0x787B8840100d9BaAdD7463f4a73b5BA73B00C6cA"
  })

  return <div>
    {/* {
      isLoading ? <p>Loading...</p> : <p>Total Supply is {data?.toString()}</p>
    } */}

    <div>
      {
        isLoading ? <p>Loading...</p> : <p>Your balance is {data?.toString()}</p>
      }
    </div>
    
  </div>
}

function ConnectWallet() {
  const connectors = useConnectors();
  const { address } = useAccount();
  const {disconnect} = useDisconnect();
  const {connect} = useConnect();

  if (address) {
    return (
      <div>
        <p>You are already connected {address}</p>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((el, i) => {
        return <button onClick={() => connect({connector: el})} key={i}>Connect Via: {el.name}</button>;
      })}
    </div>
  );
}
 