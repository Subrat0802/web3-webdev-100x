import React, { useRef, useState } from "react";
import sideimg from "/images/side.png";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { setSignUpData } from "../../slices/auth";
import { sendOtp } from "../../services/operations/authApi";

const Signup = () => {
  const dispatch = useDispatch();
  const [accountType, setAccountType] = useState("Student");
  const [signInOrSignUp, setSignInOrSignUp] = useState(true);
  const emailRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const passwordRef = useRef("");
  const conPasswordRef = useRef("");

  const navigate = useNavigate();

  const handleClick = () => {
    setSignInOrSignUp(!signInOrSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    const payload = {
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        confirmPassword: conPasswordRef.current?.value,
        accountType: accountType,
      };

      if(signInOrSignUp) {
        dispatch(setSignUpData(payload));
        dispatch(sendOtp(payload.email, navigate));
      }
      signInOrSignUp(false);

    // if (signInOrSignUp) {
    //   try {
    //     const response = await fetch("http://localhost:3001/api/v1/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payload),
    //       credentials: "include",
    //     });

    //     const data = await response.json();
    //     console.log("response", data);

    //     if (response.ok) {
    //       console.log("Signup successful");
    //       navigate("/profile");
    //     } else {
    //       console.error("Signup failed:", data.message);
    //     }
    //   } catch (error) {
    //     console.error("Error", error);
    //   }
    // }else{
    //   try {
    //     const response = await fetch("http://localhost:3001/api/v1/signin", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payload),
    //       credentials: "include",
    //     });

    //     const data = await response.json();
    //     console.log("response", data);

    //     if (response.ok) {
    //       console.log("Signin successful");
    //       navigate("/profile");
    //     } else {
    //       console.error("Signin failed:", data.message);
    //     }
    //   } catch (error) {
    //     console.error("Error", error);
    //   }
    // }
  };

  return (
    <div className="flex min-h-screen select-none">
      <div className="h-[100dvh] overflow-hidden">
        <img src={sideimg} alt="Signup Visual" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">
            Join the millions learning to code with Courfify for free
          </h2>
          <p className="mb-6 text-gray-600">
            Build skills for today, tomorrow, and beyond. Education to
            future-proof your career.
          </p>
          {signInOrSignUp && (
            <div className="flex gap-4 mb-6">
              {["Student", "Instructor"].map((type) => (
                <span
                  key={type}
                  onClick={() => setAccountType(type)}
                  className={`px-5 py-2 rounded-full border cursor-pointer transition-all ${
                    accountType === type
                      ? "bg-[#15CF74] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {type}
                </span>
              ))}
            </div>
          )}

          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4"
          >
            {signInOrSignUp && (
              <div className="flex gap-4">
                <input
                  ref={firstNameRef}
                  type="text"
                  placeholder="First name"
                  className="w-1/2 p-2 border rounded-md"
                />
                <input
                  ref={lastNameRef}
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 p-2 border rounded-md"
                />
              </div>
            )}

            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="p-2 border rounded-md"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="p-2 border rounded-md"
            />
            {signInOrSignUp && (
              <input
                ref={conPasswordRef}
                type="password"
                placeholder="Confirm Password"
                className="p-2 border rounded-md"
              />
            )}

            <button
              type="submit"
              className="bg-[#15CF74] text-white py-2 rounded-lg mt-2"
            >
              {signInOrSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>
          <div className="text-center mt-4 text-sm">
            {signInOrSignUp ? "Already have an account?" : "Create new account"}{" "}
            <span
              className="text-[#15CF74] cursor-pointer hover:underline"
              onClick={(e) => handleClick(e)}
            >
              {signInOrSignUp ? "Sign In" : "Sign Up"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
