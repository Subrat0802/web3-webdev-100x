import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("")
  console.log(text);
  return (
    <>
      {/* <div className='flex justify-center items-center'>
        <div className='bg-red-500'> flex child 1</div>
        <div>child 1</div>
        <div>child 1</div>
      </div>

      <div className='grid grid-cols-12'>
        <div className='col-span-6 border'>grid child 1</div>
        <div className='col-span-3 border'>child 1</div>
        <div className='col-span-3 border'>child 1</div>
      </div>
      <div className='sm:grid grid-cols-12'>
        <div className='bg-red-300 sm:col-span-6 border'>Responsiveness child 1</div>
        <div className='bg-green-300 sm:col-span-3 border'>child 1</div>
        <div className='bg-yellow-300 sm:col-span-3 border'>child 1</div>
      </div> */}
      
      <div className="min-h-[100vh] w-screen bg-blue-900 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-white font-bold mb-5">Verify Your age</p>
          <p className="text-sm text-blue-400 mb-2">
            Please confirm your birth year. This date will not be stored.
          </p>
          <input
            className="bg-blue-600 w-[300px] p-3 rounded-lg text-white mb-6"
            placeholder="Your Birth Year"
            onChange={(e) => setText(e.target.value)}
          />
          <button className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${text==="" ? 'opacity-50 cursor-not-allowed' : 'cursor-allowed opacity-100'}`}>
            Button
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
