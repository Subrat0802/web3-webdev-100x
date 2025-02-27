import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

const Signin = () => {
    const naviagte = useNavigate();
    const userEmailRef = useRef();
    const userPasswordRef = useRef();

    const handleClick = async () => {
        const email = userEmailRef.current.value;
        const password = userPasswordRef.current.value;
        try{
            const response = await fetch("http://localhost:3000/api/v1/signin", {
                method:"POST", 
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email, password})
            })
            console.log("first", response);
            if(response.ok){
                naviagte("/todos")
                toast.success("User Logged In")
            }else{
                toast.error("Invalid credential")
                return
            }
        }catch(err){
            console.log("error", err);
        }
    }
  return (
    <div className='bg-[#111111] w-screen min-h-screen flex flex-col  justify-center items-center'>
        <p className='text-3xl font-bold font-mono text-white'>Sign In</p>
        <div className='w-[80%] sm:w-[30%] flex flex-col gap-3 p-6'>
            <input ref={userEmailRef} className='p-2 rounded-md focus:outline-none'  placeholder='Email'/>
            <input ref={userPasswordRef} className='p-2 rounded-md focus:outline-none'  placeholder='Password'/>
            <button onClick={handleClick} className='bg-green-500 p-3 rounded-md text-2xl font-mono hover:bg-green-700 transition-all duration-200'>Submit</button>
            <Link to={"/signup"}><p className='text-white hover:text-green-500 cursor-pointer'>Dont have account? Signup</p></Link>
        </div>
    </div>
  )
}

export default Signin