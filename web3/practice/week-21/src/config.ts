import { mainnet } from "viem/chains";
import { createConfig, http, injected } from "wagmi";

export const config = createConfig({
    chains: [mainnet],
    connectors:[injected()],
    transports: {
        [mainnet.id]: http("")
    }
})