import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  const accoutType = localStorage.getItem("accountType");
  const token = localStorage.getItem("coursify-token");

  const handleExploreCourse =() => {
    navigate("/explorecourse")
  }

  const handleCreateCourse = () => {
    navigate("/createcourse")
  }



  return (
    <div>
      {accoutType && token ? (
        <div className="bg-gray-700 w-full min-h-[100vh]  flex justify-center items-center overflow-x-hidden">
          <div className="text-white pt- ">
            {accoutType === "Student" ? (
              <div className="flex flex-col items-center justify-center font-mono">
                <p className="text-8xl text-center">Hello Student</p>{" "}
                <p className="bg-green-900 p-1">Well come to Coursify</p>
                <button onClick={handleExploreCourse} className="bg-gray-900 p-4 rounded-md mt-4 hover:bg-gray-800 transition-colors duration-200">
                  Explore Courses
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center font-mono">
                <p className="text-8xl text-center">Hello Instructor</p>{" "}
                <p className="bg-green-900 p-1">Well come to Coursify</p>
                <button onClick={handleCreateCourse} className="bg-gray-900 p-4 rounded-md mt-4 hover:bg-gray-800 transition-colors duration-200">
                  Create Courses
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        navigate("/auth")
      )}
    </div>
  );
};

export default Home;
