
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState();
  const textRef= useRef();
  const sendMessage = () => {
    console.log("hello")
    if (!socket) {
      return;
    }
    const message = textRef.current?.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      console.log(e.data);
    }
  }, [])

  return (
    <div>

      <input ref={textRef} type='text' placeholder='message...' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
