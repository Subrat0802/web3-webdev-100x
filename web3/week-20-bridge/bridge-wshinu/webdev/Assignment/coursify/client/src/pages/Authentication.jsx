import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const [signup, setSignup] = useState(true);
  const [accountType, setAccountType] = useState("Student");
  const navigate = useNavigate();

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  //   console.log("heloo",firstnameRef);

  const signupHandler = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstnameRef.current.value,
          lastname: lastnameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          confirmPassword: confirmPassRef.current.value,
          accountType: accountType,
        }),
      });

      console.log(response);

      if (response.ok) {
        setSignup(!signup);
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  const signinHandler = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      });

      if (response.ok) {
        console.log("hello");
        const data = await response.json();
        console.log(data);
        localStorage.setItem("accountType", data.user.accountType);
        localStorage.setItem("coursify-token", data.user.token);
        navigate("/home");
      }
    } catch (err) {}
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md transition-all duration-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          {signup ? "Sign Up" : "Sign In"}
        </h2>
        {signup ? (
          <div className="flex justify-evenly mb-4 gap-2">
            <p
              className={`text-center ${
                accountType === "Student"
                  ? "w-[50%] bg-blue-500 text-white p-2 rounded-full hover:rounded-full hover:bg-blue-600 transition duration-100 cursor-pointer"
                  : "w-[50%] bg-gray-800 text-white p-2 rounded-full hover:rounded-full  hover:bg-gray-700 transition duration-100 cursor-pointer"
              }`}
              onClick={() => setAccountType("Student")}
            >
              Student
            </p>
            <p
              className={`text-center ${
                accountType === "Instructor"
                  ? "w-[50%] bg-blue-500 text-white p-2 hover:rounded-full rounded-full hover:bg-blue-600 transition duration-100 cursor-pointer"
                  : "w-[50%] bg-gray-800 text-white p-2 rounded-full hover:rounded-full  hover:bg-gray-700 transition duration-100 cursor-pointer"
              }`}
              onClick={() => setAccountType("Instructor")}
            >
              Instructor
            </p>
          </div>
        ) : (
          <span></span>
        )}

        <div className="space-y-4">
          {signup && (
            <div className="flex space-x-4">
              <input
                ref={firstnameRef}
                type="text"
                placeholder="First Name"
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
              />
              <input
                ref={lastnameRef}
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
              />
            </div>
          )}
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
          />
          {signup && (
            <input
              ref={confirmPassRef}
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
            />
          )}
          {signup ? (
            <button
              onClick={signupHandler}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={signinHandler}
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign In"
            </button>
          )}
        </div>
        <p className="mt-6 text-center text-gray-400">
          {signup ? "Already have an account? " : "Don't have an account? "}
          <button
            onClick={() => setSignup(!signup)}
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            {signup ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};
export default Authentication;
