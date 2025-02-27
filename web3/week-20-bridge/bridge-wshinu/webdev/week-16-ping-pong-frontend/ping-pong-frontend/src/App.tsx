import { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {

  const [socket, setSocket] = useState();
  const inputRef = useRef();
   const sendMessage = () => {

      if(!socket){ 
        return;
      }
      //@ts-ignore
      socket.send(inputRef.current.value)
   }

   useEffect(() => {
      const ws = new WebSocket("ws://localhost:8080");
      //@ts-ignore
      setSocket(ws);
      ws.onmessage = (ev) => {
        alert(ev.data)
      }
   }, []);

  return (
    <div>
      
      <input type="text" placeholder="Message.." ref={inputRef}/>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
