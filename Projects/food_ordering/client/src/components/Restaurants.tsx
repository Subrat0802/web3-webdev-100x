/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux";
import { RootState } from "../utils/redux/appStore";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useRef, useState } from "react";

const Restaurants = () => {
  const [resData, setResData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const searchref = useRef<HTMLInputElement>(null);
  const data = useSelector(
    (store: RootState) =>
      //@ts-ignore
      store?.webDataThroughApi?.RestaurantData?.[1]?.card?.card?.gridElements
        ?.infoWithStyle?.restaurants ?? []
  );

  useEffect(() => {
    setResData(data);
    setFilterData(data);
  }, [data]);

  const handleSearchRes = () => {
    const value = searchref.current?.value ?? "";
    const serachData = filterData.filter((el) =>
      //@ts-ignore
      el.info?.name.toLowerCase().includes(value.toLowerCase())
    );
    setResData(serachData);
  };

  return (
    <div className="w-full flex flex-col gap-4 py-6  ">
      <p className="text-[21px] font-bold">Restaurants with online food delivery in Bhopal</p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3">
        {/* Search Bar */}
        <div className="flex gap-2 w-full md:w-auto">
          <input
            onChange={handleSearchRes}
            ref={searchref}
            placeholder="Search Restaurants"
            type="text"
            className="px-3 py-1 border border-gray-300 rounded-lg w-full md:w-64 dark:bg-[#0f0f0f] dark:border-gray-700"
          />
          {/* <button
            onClick={handleSearchRes}
            className="bg-[#FF5200] text-white px-4 py-1 rounded-lg font-medium hover:bg-orange-600"
          >
            Search
          </button> */}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3">
          {[
            "Top rated restaurants",
            "Pure veg",
            "Fast delivery",
            "Less than Rs. 300",
          ].map((filter, index) => (
            <button
              key={index}
              className="border border-gray-500 hover:border-gray-800 hover:text-gray-800 font-semibold px-3 py-1 rounded-lg text-gray-500   transition-all"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Restaurant List */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between lg:grid-cols-4 gap-6">
        {resData && resData.length > 0 ? (
          resData.map((el: { info: unknown }, index: number) => (
            <RestaurantCard key={index} data={el.info} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
