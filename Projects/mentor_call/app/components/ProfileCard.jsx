'use client'
import { ShieldCheck, MoveLeft } from "lucide-react";
import { useBoolean } from "../context/BoolContextAbout";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";


export const ProfileCard = ({ data }) => {
  const { value, setValue, userId, setUserId } = useBoolean();
  const [isMounted, setIsMounted] = useState(false);
 
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleViewProfile = (id) => {
    setValue(true);
    setUserId(id);
  };

  return (
    <div
      className={`flex p-6 text-gray-600  relative  ${
        value
          ? "py-7 px-[12%] border-b-2 border-t border-gray-300 rounded-none mx-auto "
          : "rounded-xl border border-gray-300"
      }`}
    >
      {value && (
        <p
          onClick={() => setValue(false)}
          className="flex text-gray-500 absolute top-5 left-3 cursor-pointer items-start justify-center gap-2"
        >
          <MoveLeft className="mt-1" size={20} /> Back
        </p>
      )}
      <div className={`flex mx-auto` }>
        <div className={`relative ${value ? "w-52" : "w-56"}`}>
          <img className="rounded-lg object-cover h-full" src={data.image} />
          <div className="w-full  bg-black opacity-60 bg-gradient-to-t flex items-center justify-center text-white font-semibold gap-2 absolute bottom-0 rounded-b-lg p-1">
            {isMounted && <ReactStars
              count={5}
              size={24}
              value={data.avgRating}
            //   color1={"#ccc"}
              color2={"#ffd700"}
              half={true}
            /> }|
             <p className="mt-1">{data.ratings}</p>
          </div>
        </div>
        <div className="pl-6  py-2 w-[77%] flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 justify-center items-center">
              <p className="font-semibold text-2xl">{data.name}</p>
              <ShieldCheck size={22} className="text-green-600 mt-1" />
            </div>
            {value ? (
              <button className="bg-[#F3F4F6] text-black px-2 py-1 font-semibold rounded-sm">
                20 Sessions
              </button>
            ) : (
              <button
                onClick={() => handleViewProfile(data.id)}
                className="bg-[#334155] cursor-pointer text-white px-4 py-[6px] rounded-lg"
              >
                View Profile
              </button>
            )}
          </div>
          <p className="font-semibold text-xl">{data.role}</p>
          <p className="p-5 bg-gray-100 text-lg rounded-2xl font-semibold">
            {data.description}
          </p>
        </div>
      </div>
      
    </div>
  );
};
