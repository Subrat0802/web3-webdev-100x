/* eslint-disable @typescript-eslint/no-explicit-any */

import { IMG_CDN_URL } from "../utils/constents";

const RestaurantMenuAccordian = ({ accData }: { accData: any[] }) => {

  if (!accData || accData.length === 0) {
    return <p>Loading...</p>;
  }

  console.log("ACCDATA", accData[0]?.card?.card?.itemCards);

  return (
    <div className="px-8 mt-14">
      {accData.map((el, i) => (
        <div key={i}>
          <p className="text-2xl font-bold">{el?.card?.card?.title}</p>
          <div className="flex flex-col gap-7">
            {el?.card?.card?.itemCards.map((el: any) => (
              <div
              key={el.card.info.id}
              className="border-b border-[#eee8e8]  border-pure-greys-600  flex justify-between 
               overflow-x-hidden rounded-md"
            >
              <div className=" w-[70%] ">
                <div className="flex text-lg ">
                  <span className="text-xl font-semibold">
                    {el.card.info.name}{" "}
                  </span>
                  <span>
                    &nbsp; - ₹{" "}
                    {el.card.info.price / 100 || el.card.info.defaultPrice / 100}
                  </span>
                  
                </div>
                <p className="text-start">{el.card.info.description}</p>
              </div>
              <div className=" w-[20%] h-24 flex justify-center ">
                {
                  <img
                    className="h-[100%] w-[100%] object-cover rounded-lg bg-white "
                    src={el.card.info.imageId ? (IMG_CDN_URL + el.card.info.imageId) : ("https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg")}
                  />
                }
                <div className="absolute font-semibold flex mt-16 mx-auto text-sm">
                  
                  <button className="bg-[#00C544] px-2 py-1 rounded-md text-black " 
                    // onClick={() => handleAddItem(el)}
                  >
                    ADD +
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuAccordian;
