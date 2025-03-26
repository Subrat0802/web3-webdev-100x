/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constents";
import { IoIosStar } from "react-icons/io";

//@ts-ignore
const RestaurantCard = ({ data }) => {
  return (
    <Link to={`/restaurantmenu/${data.id}`}>
      <div
        key={data.id}
        className=" rounded-lg hover:scale-95 transition-all duration-200 cursor-pointer "
      >
        <img
          className="h-40 object-cover w-full rounded-xl "
          src={IMG_CDN_URL + data.cloudinaryImageId}
        />
        <div className="p-2">
          <p className="font-bold text-xl whitespace-nowrap overflow-hidden text-ellipsis">
            {data.name}
          </p>
          {/* <p>{data.costForTwo}</p> */}
          <p className="whitespace-nowrap overflow-hidden text-ellipsis">
            {data.cuisines.join(", ")}
          </p>
          <div className="flex items-center dark:text-gray-400 text-gray-600 ">
            <div className="p-[3px] text-[13px] mr-1 rounded-full text-white bg-[#178B3E]">
              <IoIosStar />
            </div>

            <p>{data.avgRatingString} &nbsp;</p>

            <p>{data.sla.slaString}</p>
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {data ? <p>{data.areaName}</p> : <p>{data.locality}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
