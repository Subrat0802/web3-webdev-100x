import {useAccount, useConnect, useConnectors, useDisconnect, useReadContract, WagmiProvider} from "wagmi";
import './App.css'
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Address } from "viem";
import AllowUSDT from "./AllowUSDT";

const client = new QueryClient();

function App() {
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <ConnectWallet />
          
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  )
}

export default App


const ConnectWallet = () => {
  const connectors = useConnectors();
  const {address} = useAccount();
  const {disconnect} = useDisconnect(); 
  const {connect} = useConnect();

  if(address){
    return (
      <div>
        <p>You are connected.</p>
        <p>With this eth wallet: {address}</p>
        <TotalSupply />
        <AllowUSDT />
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  }

  return (
    <div>
        {
          connectors.map((el, i) => {
            return <button onClick={() => connect({connector:el})} key={i}>Connect via: {el.name}</button>
          })
        }
    </div>
  )
}


const TotalSupply = () => {
  const address = useAccount();
  const {data, isLoading} = useReadContract({
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    abi:[
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
    functionName:"balanceOf",
    args:[address?.toString() as Address]
  });

  console.log("object", data);

  return (
    <div>
      {
        address && <div>
          {
            isLoading ? <p>Loading...</p> : <div style={{display:"flex", justifyContent:"center", placeItems:"center", gap:"3px"}}>
              your balance is: {data === undefined ? <p>0</p> : <p>{data?.toString()}</p>}
            </div>
          }
        </div>
      }
    </div>
  )
}