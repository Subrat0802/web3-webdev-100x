import { Bell, ChevronDown } from "lucide-react";

export const TopBar = () => {
  return (
    <div className="flex gap-3 ">
      <div className="border hover:cursor-pointer rounded-lg flex justify-center items-center border-gray-300 shadow-md px-[8px] py-1">
        <Bell size={20} className="text-gray-400 " />
      </div>
      <div className="border hover:cursor-pointer flex justify-evenly gap-2 items-center text-gray-500 font-semibold rounded-lg px-[8px] py-[2px] border-gray-300 shadow-md">
        <img
          className="w-9 h-9 rounded-full p-[6px]"
          src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <p>Jimmy</p>
        <p className="">
          <ChevronDown size={17} />
        </p>
      </div>
    </div>
  );
};
