import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi'

export const config = createConfig({
  chains: [mainnet],
  connectors:[injected()],
	  transports: {
	    [mainnet.id]: http(""),
  },
})