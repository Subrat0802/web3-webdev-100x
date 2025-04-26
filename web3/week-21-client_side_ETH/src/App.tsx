import {
  useAccount,
  useConnect,
  useConnectors,
  useDisconnect,
  useReadContract,
  WagmiProvider,
} from "wagmi";
import "./App.css";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Address } from "viem";
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

// function Account(){
//   const {address} = useAccount();
//   return <div>
//     {address ? "You are connected" + address : "you are not connected"}
//   </div>
// }


function TotalSupply() {
  const { address } = useAccount();
  const { data, isLoading } = useReadContract({
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    abi: [
      {
        constant: true,
        inputs: [{ name: "who", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "balanceOf",
    args:[address?.toString() as Address]
  });

  return <div>
    {
      isLoading ? <p>Loading...</p> : !isLoading && <p>your USDT balance is: {data?.toString()}</p>
    }
    
  </div>
}

function ConnectWallet() {
  const { address } = useAccount();
  const connectors = useConnectors();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect();
  if (address) {
    return (
      <div>
        you are connected {address}
        <button
          onClick={() => {
            disconnect();
          }}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div>
      {connectors.map((connector) => (
        <button onClick={() => connect({ connector: connector })}>
          Connect Via {connector.name}
        </button>
      ))}
    </div>
  );
}

export default App;
