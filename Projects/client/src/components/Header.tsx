import { IoChevronDownSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePercentage } from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";


const Header = () => {
    const [lightMode, setLightMode] = useState(false);
  return (
    <div className="flex justify-center w-full px-6 py-4 md:px-20  dark:bg-[#0c0c0c] dark:text-white shadow-md">
      <div className="w-full flex justify-between ">
        <div className="flex justify-center items-center gap-4 md:gap-10">
          <div className="w-16 ">
            <img
              className="hover:scale-110 transition-all cursor-pointer duration-200"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_72,h_72/portal/m/logo_192x192.png"
            />
          </div>
          <div className="flex text-sm group justify-center gap-2 cursor-pointer items-center w-full">
            <p className="underline group-hover:text-[#FF5200] transition-all  font-bold underline-offset-8 decoration-2">
              Other
            </p>
            <span className="font-semibold dark:text-gray-400 group-hover:text-gray-500 transition-all whitespace-nowrap text-gray-600">
              Gautam nagar Bhopal...
            </span>
            <div className="text-[#FF5200] font-bold text-lg">
              <IoChevronDownSharp />
            </div>
          </div>
        </div>
        <div className="flex font-semibold justify-center items-center gap-10 text-md text-gray-700 invisible lg:visible">
          <span className="transition-all duration-200 cursor-pointer hover:text-[#FF5200] dark:text-gray-100 flex justify-center items-center gap-1">
            <FiHome /> Home
          </span>
          <span className="transition-all duration-200 flex cursor-pointer hover:text-[#FF5200]  dark:text-gray-100 justify-center items-center gap-1">
            <FiSearch /> Search
          </span>
          <span className="flex hover:text-[#FF5200] dark:text-gray-100 cursor-pointer justify-center items-center gap-1">
            <AiOutlinePercentage /> Offers
          </span>
          <span className="flex hover:text-[#FF5200] dark:text-gray-100 justify-center cursor-pointer items-center gap-1">
            <FiHelpCircle /> Help
          </span>
          <span className="flex hover:text-[#FF5200] dark:text-gray-100 justify-center items-center cursor-pointer gap-1">
            <FiLogIn /> Sign In
          </span>
          <span className="flex hover:text-[#FF5200] dark:text-gray-100 justify-center items-center gap-1 cursor-pointer">
            <FiShoppingCart /> Cart
          </span>
          <button className="flex hover:text-[#FF5200] text-2xl dark:text-gray-100 justify-center items-center gap-1 cursor-pointer"
            onClick={() => {
                setLightMode(!lightMode)
              const htmlElement = document.querySelector("html");
              if (htmlElement) { 
                htmlElement.classList.toggle("dark");

                if(lightMode){
                  localStorage.setItem("theme", "dark")
                }else{
                  localStorage.setItem("theme", "light")
                }
                
              }
            }}
          >
            
            {!lightMode ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;


