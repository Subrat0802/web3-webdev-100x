import React, { useState } from "react";

const Sidebar = () => {


  return (
    <div className= "min-h-[100vh] w-full  dark:bg-red-300 bg-red-900" > 
      {/* <div className="bg-red-300 transition-all delay-300 duration-500 -translate-x-96 md:translate-x-0 w-0 md:w-96 ">
        <button className="bg-red-900 text-white hover:bg-green-500 hover:text-green-200 
        hover:p-8 transition-all duration-1000">
          Hello
        </button>
      </div>
      <div className="bg-red-900 w-full">content</div> */}
      <h1 className=" dark:text-black text-white">Hi there</h1>

      <button onClick={() => {
        document.querySelector("html").classList.toggle("dark");
      }}>Dark Mode</button>
    </div>
  );
};
export default Sidebar;
