/* eslint-disable @typescript-eslint/no-explicit-any */

import { IMG_CDN_URL } from "@/utils/constents";
import { FaStar } from "react-icons/fa";

const CartItems = ({ data }: {data: any}) => {
  const { name, imageId, defaultPrice, ratings, price } = data;
  return (
    <div className="flex justify-between shadow-2xl items-center  p-2 rounded-lg mb-2">
      <div className="">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="flex justify-items-center items-center">
          <FaStar className="text-[#FF5200]" />
          {ratings.aggregatedRating.rating} (
          {ratings.aggregatedRating.ratingCount})
        </p>
        <span>- ₹ {price / 100 || defaultPrice / 100}</span>
      </div>
      <div className="w-24 rounded-lg ">
        <img
          className="rounded-lg h-24 w-full object-cover bg-white"
          src={IMG_CDN_URL + imageId || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqk3k4eH4Ypnm4rJ6BHtNehBk1ZC75Y2goMQ&usqp=CAU"} 
        />
      </div>
    </div>
  );
};

export default CartItems;
