import "./App.css";
import {
  http,
  createConfig,
  WagmiProvider,
  useConnect,
  useAccount,
  useBalance,
  useSendTransaction,
} from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { injected } from "wagmi/connectors";
import { sendTransaction } from "viem/actions";

const queryClient = new QueryClient();
const config = createConfig({
  chains: [mainnet, base],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

function App() {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <WalletConnector />
          <EthSend />
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

function WalletConnector() {
  const { connectors, connect } = useConnect();

  return connectors.map((connector) => (
    <button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ));
}

function EthSend() {
  const { address } = useAccount();
  const balance = useBalance({ address });

  const {data: hash, sendTransaction } = useSendTransaction();

  function sendETH(){
    sendTransaction({
      to: document.getElementById("address").value,
      value:"100000000000000000"
    })
  }

  return (
    <div>
      <input id="address" placeholder="Address.." type="text" />
      <button onClick={sendETH}>Send 0.1 ETH</button>
      <p>
        {address} : {balance?.data?.formatted} ETH
      </p>
    </div>
  );
}

export default App;
