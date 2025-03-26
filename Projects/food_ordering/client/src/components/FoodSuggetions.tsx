import { useSelector } from "react-redux";
import { useRestaurant } from "../hooks/useRestaurant";
import { RootState } from "../utils/redux/appStore";
import { IMG_CDN_URL } from "../utils/constents";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

interface RestaurantItem {
  id: string;
  imageId: string;
}

const FoodSuggetions = () => {
  const { loading } = useRestaurant();
  const foodRef = useRef<HTMLDivElement>(null)

  const restaurantData = useSelector(
    (store: RootState) =>
      store?.webDataThroughApi?.RestaurantData?.[0]?.card?.card?.imageGridCards
        ?.info || []
  );

  const scrollLeft = () => {
    if(foodRef.current){

        console.log(foodRef.current)
        foodRef.current.scrollBy({
            left: -500,
            behavior: "smooth"
        })
    }
}

const scrollRight = () => {
    if(foodRef.current){
        foodRef.current.scrollBy({
            left: 500,
            behavior: "smooth"
        })
    }
}

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col py-2 select-none">
          <div className=" flex justify-between font-semibold pb-3">
            <p className="text-[21px] text-rgba(2, 6, 12, 0.92) font-bold">What's on your mind?</p>
            <div className="flex gap-3">
              <div
                onClick={scrollLeft}
                className="bg-gray-200 p-2 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full hover:bg-gray-300 cursor-pointer transition-all duration-200 hover:scale-105"
              >
                <FaAngleLeft />
              </div>
              <div
                onClick={scrollRight}
                className="bg-gray-200 p-2 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600  hover:bg-gray-300 cursor-pointer transition-all duration-200 hover:scale-105"
              >
                <FaAngleRight />
              </div>
            </div>
          </div>
          <div className="flex gap-2 overflow-x-hidden " ref={foodRef}>
            {restaurantData.map((el: RestaurantItem) => (
              <img
                className="w-36 rounded-xl"
                key={el.id}
                src={IMG_CDN_URL + el.imageId}
                alt="Food"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodSuggetions;
