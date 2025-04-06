/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputBox } from "../components/ui/InputBox";
import { Button } from "../components/ui/Button";
import { Header } from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

export const SignUp = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const conPassRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      
      const username = nameRef.current?.value;
      const email = emailRef.current?.value;
      const password = passRef.current?.value;
      const confirmPassword = conPassRef.current?.value;
      // console.log("csacsa",import.meta.env.VITE_BACKEND_URL);
      const resposne = await axios.post(import.meta.env.VITE_BACKEND_URL + "/signup", {
        username,
        email, 
        password,
        confirmPassword
      });
      console.log("RESPOSNE SIGNUP", resposne);
      if(resposne.statusText=== "OK"){
        navigate("/signin");
      }else{
        console.log("ERROR", resposne);
        return;
      }

    } catch (error: any) {
      console.error("SIGNUP ERROR", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] translate-x-1/3" />

      <Header />
      <div className="p-4 min-h-96 flex justify-center items-center">
        <div
          className="bg-slate-900/60 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl w-full max-w-md flex flex-col
         items-center gap-6 border border-white/10"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Create an Account</h2>
            <p className="text-white/60 text-sm mt-1">
              Sign up to access your dashboard
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <InputBox ref={nameRef} placeholder="Username" />
            <InputBox ref={emailRef} placeholder="Email address" />
            <InputBox ref={passRef} placeholder="Password" />
            <InputBox ref={conPassRef} placeholder="Confirm password" />
          </div>

          <Button
            onClick={handleSubmit}
            text="Sign Up"
            varient="primary"
            size="lg"
          />
          <p className="text-sm text-white/50 mt-2">
            Already have an account?{" "}
            <Link to={"/signin"}>
              <span className="text-indigo-400 hover:underline cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
