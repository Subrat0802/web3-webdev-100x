import { useAccount, useConnect, useConnectors, useDisconnect, WagmiProvider } from "wagmi";
import "./App.css";
import { config } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <ConnectWallet />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;

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
