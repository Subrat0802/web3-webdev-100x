import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { configureChains, createConfig, WagmiConfig, useConnect } from "wagmi";
import { mainnet, base } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";

const queryClient = new QueryClient();

const { provider, webSocketProvider } = configureChains(
  [mainnet, base],
  [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  connectors: [new InjectedConnector()],
  provider,
  webSocketProvider,
});

const EthWallet = () => {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletConnector />
        <div>
          <input type="text" />
          <button>Send</button>
        </div>
      </QueryClientProvider>
    </WagmiConfig>
  );
};

function WalletConnector() {
  const { connectors, connect } = useConnect();
  return connectors.map((connector) => (
    <button key={connector.id} onClick={() => connect({ connector })}>
      {connector.name}
    </button>
  ));
}

export default EthWallet;
