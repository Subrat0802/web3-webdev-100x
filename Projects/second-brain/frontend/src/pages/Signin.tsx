/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputBox } from "../components/ui/InputBox";
import { Button } from "../components/ui/Button";
import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const handleSubmit = async () => {
      try{
        const email = emailRef.current?.value;
        const password = passRef.current?.value;

        const response = await axios.post(import.meta.env.VITE_BACKEND_URL+"/signin", {
          email,
          password
        }, {
          withCredentials: true
        })

        console.log("response signin", response);

        if(response.status === 200){
          console.log("SIGNIN RESPOSNE", response);
          navigate("/dashboard");
        }
        else{
          return;
        }
      }catch (error: any) {
        console.error("SIGNUP ERROR", error.response?.data || error.message);
      }
    }
  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] translate-x-1/3" />

      <Header />

      <div className="p-4 min-h-96 flex justify-center items-center">
        <div className="bg-slate-900/60 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center gap-6 border border-white/10 mt-20">
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-white/60 text-sm mt-1">Sign in to your account</p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <InputBox ref={emailRef} placeholder="Email address" />
            <InputBox ref={passRef} placeholder="Password" />
          </div>

          <Button onClick={handleSubmit} text="Sign In" varient="primary" size="lg" />

          <p className="text-sm text-white/50 mt-2">
            Don’t have an account?{" "}
            <Link to={"/signup"}><span className="text-indigo-400 hover:underline cursor-pointer">Sign up</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};
