import React from "react";
import Logo from "../../svgs/Logo";
import Button from "../ui/Button";
import SearchIcon from "../../svgs/SearchIcon";

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 py-4 flex mx-auto justify-between items-center">
        <div className="flex justify-center items-center font-extrabold text-2xl">
          <Logo />
          <p className="pb-1">Coursify</p>
        </div>
        <div className="w-[30%] hidden md:block">
          <div className=" flex justify-between border rounded-full border-black/10">
            <input placeholder="What do you want to learn today? " className="border-none pl-3 rounded-full m-[1px] w-full" />
            <button className="bg-[#15CF74] transition-all duration-200 hover:bg-[#34da8a] py-4 px-4 text-white rounded-full"><SearchIcon /></button>
          </div>
        </div>
        <div className=" w-[32%] hidden md:block">
            <ul className="flex justify-between items-center font-semibold text-[#2A2A2A]">
                <li className="cursor-pointer hover:text-[#000000]">Home</li>
                <li className="cursor-pointer hover:text-[#000000]">Services</li>
                <li className="cursor-pointer hover:text-[#000000]">Contact Us</li>
                <li className="cursor-pointer hover:text-[#000000]">Sign in</li>
            </ul>
        </div>
        <div>
            <Button text="Join Us Now" bgColor={"[#15CF74]"}  primary={true}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
