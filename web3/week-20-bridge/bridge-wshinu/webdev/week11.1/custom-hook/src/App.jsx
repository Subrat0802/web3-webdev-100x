import { useState } from "react";
import "./App.css";
import UseFetch from "./components/UseFetch";
import UsePrev from "./components/usePrev";
import Recoil from "./components/Recoil";


const useCounter = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  const increaseBtn = () => {
    setCount((r) => r + 1);
  };

  return {
    count,
    increaseBtn,
  };
};

function App() {
  return (
    <>
      <IncreamentComp style={{"margin-bottom":20}}/>
      <br/>
      <UseFetch />
      <br />
      <UsePrev />
      <br />
      <Recoil />
      <br/>
      
    </>
  );
}

const IncreamentComp = () => {
  const { count, increaseBtn } = useCounter();
  return (
    <>
      <button onClick={increaseBtn}>Increase {count}</button>
    </>
  );
};

export default App;
