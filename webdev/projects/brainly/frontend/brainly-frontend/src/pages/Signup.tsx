import { useRef } from "react"

const Signup = () => {
  const name = useRef();
  const email = useRef();
  const pass = useRef();
  const conPass = useRef();

  console.log(name.current)
  return (
    <div className="flex flex-col">
      <input referance={name.toString} placeholder="name"/>
      <input referance={email} placeholder="email"/>
      <input referance={pass} placeholder="password"/>
      <input referance={conPass} placeholder="con-password"/>
      <br />
      <button className="border p-2 w-fit">Submit</button>
    </div>
  )
}

export default Signup