import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

const Signup = () => {

    const naviagte = useNavigate();
    
    const userNameRef = useRef();
    const userEmailRef = useRef();
    const userPasswordRef = useRef();
    const userConfirmPassRef = useRef();

    const handleSignUp = async () => {
        const username = userNameRef.current.value;
        const email = userEmailRef.current.value;
        const password = userPasswordRef.current.value;
        const confirmPassword = userConfirmPassRef.current.value

        console.log(username, email, password, confirmPassword)
        try{
            const response = await fetch("http://localhost:3000/api/v1/signup", {
                method:"POST",
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({username, email, password, confirmPassword})
            })

           if(!response.ok){
            const errorData = await response.json();
            toast.error(errorData.errors[0].path[0]+" "+errorData.errors[0].code)
            return;
           }

           naviagte("/signin");
           toast.success("User Sign Up Successfully")

        }catch(err){
            console.log("Error", err)
        }
    }
  return (
    <div className='bg-[#111111] w-screen min-h-screen flex flex-col  justify-center items-center'>
        <p className='text-3xl font-bold font-mono text-white'>Sign Up</p>
        <div className='w-[80%] sm:w-[30%] flex flex-col gap-3 p-6'>
            <input ref={userNameRef} className='p-2 rounded-md focus:outline-none' placeholder='Username'/>
            <input ref={userEmailRef} className='p-2 rounded-md focus:outline-none'  placeholder='Email'/>
            <input ref={userPasswordRef} className='p-2 rounded-md focus:outline-none'  placeholder='Password'/>
            <input ref={userConfirmPassRef} className='p-2 rounded-md focus:outline-none'  placeholder='Confirm Password'/>
            <button className='bg-green-500 p-3 rounded-md text-2xl font-mono hover:bg-green-700 transition-all duration-200' onClick={handleSignUp}>Submit</button>
            <Link to={"/signin"}><p className='text-white hover:text-green-500 cursor-pointer'>Already have account? Just sign in</p></Link>
        </div>
    </div>
  )
}

export default Signup




// if(!response.ok){
//     const errorData = await response.json();
//     console.log("errorData", errorData.errors[0].message+" "+errorData.errors[0].code);
//     toast.error(errorData.errors[0].path[0]+" "+errorData.errors[0].code)
//     return;
//    }