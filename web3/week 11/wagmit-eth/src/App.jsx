import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Posts from './Posts';

const queryClient = new QueryClient();

async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json();
  return response;
}



function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Posts getter={getter}/>
    </QueryClientProvider>
  )
}

export default App
