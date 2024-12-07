
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const sendMessage = () => {
    console.log("hello")
    if (!socket) {
      return;
    }
    //@ts-ignore
    socket.send("ping");
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      alert(e.data);
    }
  }, [])

  return (
    <div>

      <input type='text' placeholder='message...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
