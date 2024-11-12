import { createPublicClient, http } from 'viem';
import './App.css'
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

function Viem() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

function useBalance(){
    return useQuery({ queryKey: ['balance'], queryFn: getBalance ,refetchInterval: 10 * 1000 })
}

function Todos() {
  // Queries
  const {data, isLoading, error} = useBalance();

  return (
    <div>
        
      Balance: 
      {data}
    </div>
  )
}


export default Viem
