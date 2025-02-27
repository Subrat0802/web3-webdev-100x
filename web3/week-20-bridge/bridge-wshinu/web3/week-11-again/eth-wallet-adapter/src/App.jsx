// import { useState } from 'react'
// import './App.css'
// import {QueryClient, QueryClientProvider, useQuery, useQueryClient} from "@tanstack/react-query"
// import Viem from './Viem';
// import Todos from "./ViemTanstack"
import EthWallet from './EthWallet'

// const queryClient = new QueryClient()

// async function getter() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
//   const response = await data.json();
//   return response;
// }


function App() {

  return (
    // Provide the client to your App
    // <QueryClientProvider client={queryClient}>
    //   <Posts />
    // </QueryClientProvider>


    // <Viem />

    // <Todos />


    <EthWallet />
  )
}

// function Posts(){
//   const queryClient = useQueryClient();
//   const {data, isLoading, error} = useQuery({ queryKey: ['todos'], queryFn: getter , refetchInterval: 10 * 1000 })

//   if(error){
//     return <div>
//       Error While fetching 
//     </div>
//   }
//   if(isLoading){
//     return "Loading..."
//   }

//   return<div>
//     {JSON.stringify(data)}
//   </div>

// }

export default App