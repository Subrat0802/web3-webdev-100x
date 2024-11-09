import React, { useRef } from 'react'

const Signup = () => {
    const inputRef = useRef();

    const submitBtn = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <h2>Sign up</h2>
        <input ref={inputRef} type='text'/>
        <input type='text'/>
        <button onClick={submitBtn}>Submit</button>
    </div>
  )
}

export default Signup