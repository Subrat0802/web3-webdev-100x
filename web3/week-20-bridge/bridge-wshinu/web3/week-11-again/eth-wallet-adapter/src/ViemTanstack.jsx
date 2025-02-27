import { createPublicClient, http } from 'viem';

import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from '@tanstack/react-query';
import { mainnet } from 'viem/chains';

async function getBalance() {
  const client = createPublicClient({ 
    chain: mainnet, 
    transport: http(), 
  });

  const balance = await client.getBalance({address: "0x075c299cf3b9FCF7C9fD5272cd2ed21A4688bEeD"}) 
  return balance.toString();
}

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

function Todos() {
  // Queries
  const {data, isLoading, error} = useQuery({ queryKey: ['balance'], queryFn: getBalance ,refetchInterval: 10 * 1000 })
  if(error){
    return <div>
      Error While fetching 
    </div>
  }
  if(isLoading){
    return "Loading..."
  }

  return<div>
    Get Balance: {data}
  </div>
}


export default App
