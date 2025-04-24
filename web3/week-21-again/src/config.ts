import { http, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { injected } from 'wagmi'

export const config = createConfig({
  chains: [mainnet],
  connectors:[injected()],
	  transports: {
	    [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/X5PHPfGBYCUT44WA7oNOI5MawKteNihV"),
  },
})