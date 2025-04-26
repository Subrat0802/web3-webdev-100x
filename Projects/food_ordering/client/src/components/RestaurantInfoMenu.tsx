import { IoIosStar } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";
import { MdDeliveryDining } from "react-icons/md";


interface RestaurantInfoProps {
    name: string;
    avgRatingString: string;
    totalRatingsString: string;
    costForTwoMessage: string;
    cuisines: string[];
    locality: string;
    sla: { slaString: string };
  }

const RestaurantInfoMenu = ({ data } : {data:RestaurantInfoProps}) => {
    const {name, avgRatingString, totalRatingsString, costForTwoMessage, cuisines, locality, sla} = data || {};
  return (
    <div className="flex flex-col px-3 ">
      <p className="text-xl font-bold py-5 mt-5">{name}</p>
      <div className="w-full border mb-5 "></div>
      <div className="px-4">
        <div className="w-full flex flex-col gap-1 border  rounded-2xl shadow-2xl mt-2  px-6 py-4 ">
          <div className="flex items-center text-lg  font-bold ">
            <div className="p-[3px] text-[13px] mr-1 rounded-full  bg-[#178B3E]">
              <IoIosStar />
            </div>

            <p>{avgRatingString} &nbsp;</p>
            <p>({totalRatingsString}) &nbsp; • &nbsp;</p>
            <p>{costForTwoMessage}</p>
          </div>
          <div className="text-[#FF5200] my-1 font-bold">
            <p className="underline underline-offset-2">
              {cuisines.join(", ")}
            </p>
          </div>
          <div className="font-semibold  mt-2 text-sm flex flex-col gap-2">
            <div className="flex gap-2 items-center ">
              <div className="text-2xl ">
                <TiLocationOutline />
              </div>
              <p className="font-semibold ">Outlet</p>
              <p className="">{locality}</p>
            </div>
            <div className="flex gap-2 items-center ">
              <div className="text-2xl ">
                <MdDeliveryDining />
              </div>
              <p>{sla.slaString}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfoMenu;
