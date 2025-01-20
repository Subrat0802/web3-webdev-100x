import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-10/12 flex justify-between py-8" >
        <div className="text-5xl font-bold">
          <Link to={"/"}><p className="">Wallet v.1</p></Link>
        </div>
        <div className="md:flex justify-between items-center w-[30%] hidden md:visible">
          <p className="hover:text-yellow-500 transition-all duration-200 cursor-pointer ">Send Token</p>
          <p className="hover:text-yellow-500 transition-all duration-200 cursor-pointer ">Sign Message</p>
          <p className="hover:text-yellow-500 transition-all duration-200 cursor-pointer ">Create Token</p>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
