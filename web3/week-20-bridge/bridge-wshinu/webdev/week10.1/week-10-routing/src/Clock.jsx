import React, { useRef, useState } from 'react'

const Clock = () => {

    const [currentCount, setCurrentCount] = useState(0)
    // let timer = 0
    // const [timer, setTimer] = useState(0);

    const timer = useRef();

    const startClock = () => {
        let value = setInterval(() => {
            setCurrentCount((c) => c+1)
        }, 1000)

        // setTimer(value)
        timer.current = value
    }

    const stopClock = () => {
        clearInterval(timer.current);
    }

  return (
    <div>
        {currentCount}
        <br />
        <button onClick={startClock}> Start</button>
        <button onClick={stopClock}>Stop</button>
    </div>
  )
}

export default Clock