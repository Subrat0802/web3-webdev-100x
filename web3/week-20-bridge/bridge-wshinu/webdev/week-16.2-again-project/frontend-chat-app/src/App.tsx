import { useEffect, useRef, useState } from 'react'
import './App.css'



function App() {
  const [message, setMessage] = useState([]);
  const wsRef = useRef();
  useEffect(() => {
    const ws = new WebSocket("http://localhost:8080");
    ws.onmessage = (event) => {
      setMessage(m => [...m, event.data]);
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"red"
        }
      }))
    }
  }, []);

  return (
    <div className='bg-black min-h-[100vh] w-full flex items-center justify-center text-white'>
      <div className='border border-gray-800 h-[80vh] w-[80vw] '>
        {/* //chat box */}
        <div className='w-full h-[90%] '>
          {
            message.map((el, i) => (
              <div className='bg-gray-800  p-2 rounded-lg m-2' key={i}>
                {el}
              </div>
            ))
          }
        </div>
        {/* typing box */}
        <div className='flex justify-center h-[10%] text-black items-center w-full '>
          <input id='msgVal' className='w-[80%] py-4 text-xl h-fit'/>
          <button onClick={() => {
            const message = document.getElementById("msgVal")?.value;
            wsRef.current.send(JSON.stringify({
              type:"chat",
              payload:{
                message:message
              }
            }))
            
          }} className='w-[20%] py-4 text-xl bg-green-900 hover:bg-green-700 h-fit text-white'>send</button>
        </div>
      </div>
    </div>
  )
}

export default App
