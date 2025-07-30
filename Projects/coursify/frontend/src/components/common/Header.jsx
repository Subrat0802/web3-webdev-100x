import React from "react";
import Logo from "../../svgs/Logo";
import Button from "../ui/Button";
import SearchIcon from "../../svgs/SearchIcon";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

  const x = useLocation();
  
  return (
    <div className="w-full bg-slate-100 fixed top-0 z-20">
      <div className="w-10/12 py-4 flex mx-auto justify-between items-center">
        <Link to={"/"}>
          <div className="flex justify-center items-center font-extrabold text-2xl hover:pb-1 transition-all duration-200 cursor-pointer">
            <Logo />
            <p className="pb-1">Coursify</p>
          </div>
        </Link>
        {x.pathname !== "/profile" && (
          <>
            <div className="w-[30%] hidden md:block">
              <div className=" flex justify-between border rounded-full border-black/10">
                <input
                  placeholder="What do you want to learn today? "
                  className="border-none pl-3 rounded-full m-[1px] w-full"
                />
                <button className="bg-[#15CF74] transition-all duration-200 hover:bg-[#34da8a] py-4 px-4 text-white rounded-full">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className=" w-[32%] hidden md:block">
              <ul className="flex justify-between items-center font-semibold text-[#2A2A2A]">
                <li className="cursor-pointer hover:text-[#000000]">Home</li>
                <li className="cursor-pointer hover:text-[#000000]">
                  Services
                </li>
                <li className="cursor-pointer hover:text-[#000000]">
                  Contact Us
                </li>
                <li className="cursor-pointer hover:text-[#000000]">Sign in</li>
              </ul>
            </div>
            <div>
              <Link to={"/signup"}>
                <Button
                  text="Join Us Now"
                  bgColor={"[#15CF74]"}
                  primary={true}
                />
              </Link>
            </div>
          </>
        )}
        {
          x.pathname === "/profile" && <> 
          <div>
            <ul className="flex gap-7">
              <li>Home</li>
              <li>Catalog</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="flex gap-7">
            <p>cart</p>
            <p>profile</p>
          </div>
          
          </>
        }
      </div>
    </div>
  );
};

export default Header;
