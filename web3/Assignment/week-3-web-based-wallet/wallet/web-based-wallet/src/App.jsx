import { useState } from "react";
import "./App.css";
import { generateMnemonic } from "bip39";

function App() {
  const [terminal, setTerminal] = useState(false);
  const [mneomonics, setMneomonics] = useState("");
  console.log("mneomonics", mneomonics);

  const createWallet = async () => {
    setTerminal(!terminal);
    const mn = await generateMnemonic();
    setMneomonics(mn);
  };

  return (
    <>
      <div className="bg-black w-screen h-screen flex justify-center items-center">
        {!terminal ? (
          <button
            onClick={createWallet}
            className="bg-yellow-300 text-black p-4 text-2xl rounded-lg hover:text-gray-900 hover:bg-yellow-400 transition-all duration-200"
          >
            Create your web-based wallet
          </button>
        ) : (
          <div className="text-white border border-gray-900 w-[80%] min-h-[80vh] flex justify-center items-start transition-all duration-300 pt-4">
            {/* Change 1: Added 'items-start' to prevent children from stretching vertically */}
            <div className="flex gap-4 flex-wrap">
              {/* Change 2: Added 'flex-wrap' to allow wrapping of elements to the next line */}
              {mneomonics === "" ? (
                <p>Loading...</p>
              ) : (
                mneomonics.split(" ").map((el, i) => (
                  <div
                    key={i}
                    className="font-bold p-2 text-center bg-yellow-300 text-black rounded-md"
                  >
                    {/* Change 3: Added 'text-center', 'bg-gray-700', and 'rounded-md' for better styling */}
                    {el}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
