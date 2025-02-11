import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-10/12 flex justify-between py-8" >
        <div className="text-5xl font-bold">
          <Link to={"/"}><p className="">Wallet v.1</p></Link>
        </div>
        <div className="md:flex justify-between items-center gap-6 hidden md:visible">
          <NavLink to={"/explore_solana"}><p className="hover:text-yellow-500 transition-all duration-200 cursor-pointer ">Explore Solana</p></NavLink>
          <p className="hover:text-yellow-500 transition-all duration-200 cursor-pointer ">Solana Faucet</p>
          <p className="hover:text-yellow-500 transition-all duration-200 cursor-pointer ">Sign Message</p>
          <p className="hover:text-yellow-500 transition-all duration-200 cursor-pointer ">Create Token</p>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
