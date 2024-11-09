import React, { useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";
import Selector from "./Selector";

const Recoil = () => {
//   const [count, setCount] = useState(0);


  return (
    <div>
      Recoil
      <RecoilRoot>
        <Increase  />
        <Counter  />
        <Decrease  />

        <Selector />
      </RecoilRoot>
    </div>
  );
};

function Increase() {
    const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((r) => r + 2)}>Increase</button>
    </div>
  );
}

function Decrease() {
    const setCount = useSetRecoilState(counterAtom);
  return (
    <div>
      <button onClick={() => setCount((r) => r - 1)}>Decrease</button>
    </div>
  );
}

function Counter() {
    const count = useRecoilValue(counterAtom);
  return (
    <div>
      <p>Value: {count}</p>
    </div>
  );
}
export default Recoil;
