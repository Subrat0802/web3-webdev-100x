"use client";

import { cards } from "../data/card";
import { servicesButton } from "../data/ServicesButton";
import { useEffect, useState } from "react";
import { Reviews } from "./Reviews";

export const Services = () => {
  const [buttonValue, setButtonValue] = useState("All");
  const [renderData, setRenderData] = useState([]);
  console.log("object", buttonValue);

  const handleButton = (name) => {
    setButtonValue(name);
    // console.log({children});
  };

  useEffect(() => {
    if (buttonValue === "All") {
      setRenderData(cards);
    } else if (buttonValue === "1:1 Call") {
      const filterData = cards.find((el) => el.title === "Career Guidance");
      setRenderData(filterData ? [filterData] : []);
    } else if (buttonValue === "Resume Review") {
      const filterData = cards.find((el) => el.title === "Resume Review");
      setRenderData(filterData ? [filterData] : []);
    } else if (buttonValue === "Priority DM") {
      const filterData = cards.find(
        (el) => el.title === "1 month career guidance full confidence"
      );
      setRenderData(filterData ? [filterData] : []);
    } else if (buttonValue === "Packages") {
      const filterData = cards.find(
        (el) => el.title === "Interview tips and tricks advice"
      );
      setRenderData(filterData ? [filterData] : []);
    } else {
      const filterData = cards.find(
        (el) => el.title === "SQL Basics Cheat Sheet"
      );
      setRenderData(filterData ? [filterData] : []);
    }
  }, [buttonValue]);
  return (
    <div className="px-7 flex flex-col pb-20">
      <div className="text-3xl pt-5 text-gray-800 mb-6">
        <p>Services</p>
      </div>
      <div>
        <div className="p-2 bg-[#f0f2f7] flex justify-between 4  w-[80%] rounded-lg  mb-8">
          {servicesButton.map((el) => (
            <div
              key={el.id}
              onClick={() => handleButton(el.name)}
              className={`px-10 rounded-lg py-1 whitespace-nowrap cursor-pointer text-gray-700 ${
                el.name === buttonValue && "bg-white"
              }`}
            >
              {el.name}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 justify-between gap-8 w-full ">
          {renderData.map((el) => {
            return (
              <div
                key={el.id}
                className="p-9 border flex flex-col justify-evenly w-full  border-gray-200 shadow-md rounded-xl"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="w-[60%]">
                    <p className="font-dm-sans text-gray-800 font-semibold text-[20px] leading-[28px] tracking-normal">
                      {el.title}
                    </p>
                  </div>
                  <button
                    // onClick={() => handleViewProfile(data.id)}
                    className="bg-[#334155] cursor-pointer text-white px-4 py-[6px] rounded-lg"
                  >
                    View Details
                  </button>
                </div>
                <div className="mb-8 text-gray-700">
                  <p>{el.description}</p>
                </div>
                <div className="flex justify-between">
                  {el.subDiv.map((el, i) => {
                    return (
                      <div
                        key={i}
                        className="bg-[#F3F4F6] py-3 text-gray-600 pl-2 w-[32%] rounded-lg text-lg flex flex-col  justify-start"
                      >
                        <p className="font-semibold mb-1 w-full">{el.title}</p>
                        <div className="flex gap-2 items-center">
                          <p className="">{el.icon}</p>
                          <p className="text-[15px]">{el.subTitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* //reviews */}

      {/* <Reviews /> */}
    </div>
  );
};
