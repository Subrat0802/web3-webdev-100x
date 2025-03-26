/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; 
import { IMG_CDN_URL } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addToCart } from "@/utils/redux/cartSlice";

const RestaurantMenuAccordian = ({ accData }: { accData: any[] }) => {

  const dispatch = useDispatch();


  if (!accData || accData.length === 0) {
    return <p className="text-center text-lg text-gray-500 dark:text-gray-400 mt-10">Loading menu...</p>;
  }

  return (
    <div className="px-6 md:px-12 lg:px-24 mt-14">
      <Accordion type="multiple" className="space-y-4">
        {accData.map((el, i) => (
          <AccordionItem 
            key={i} 
            value={`item-${i}`} 
            className="border rounded-xl shadow-md overflow-hidden dark:border-gray-700 dark:bg-gray-800"
          >
            <AccordionTrigger className="flex justify-between items-center p-5  transition-all duration-200 rounded-xl">
              <p className="text-xl font-semibold ">{el?.card?.card?.title}</p>
            </AccordionTrigger>
            
            <AccordionContent className="p-4 rounded-b-xl">
              <div className="flex flex-col gap-4">
                {el?.card?.card?.itemCards.map((el: any) => (
                  <div
                    key={el.card.info.id}
                    className="flex justify-between items-center  dark:bg-gray-800 dark:border-gray-700 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-[70%]">
                      <div className="flex flex-col">
                        <span className="text-lg md:text-xl font-semibold ">
                          {el.card.info.name}
                        </span>
                        <span className="text-[#FF5200] text-md font-semibold ">
                          ₹ {el.card.info.price / 100 || el.card.info.defaultPrice / 100}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {el.card.info.description}
                      </p>
                    </div>

                    <div className="w-[20%] h-24 flex justify-center relative">
                      <img
                        className="h-full w-full object-cover rounded-lg "
                        src={
                          el.card.info.imageId
                            ? IMG_CDN_URL + el.card.info.imageId
                            : "https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.jpg"
                        }
                      />
                      <button
                        onClick={() => {
                          console.log("el", el)
                          dispatch(addToCart(el.card.info))
                        }}
                      className="absolute bottom-[-10px] bg-[#FF5200] px-2 py-1 rounded-md text-white font-semibold shadow-md hover:bg-orange-600">
                        ADD +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default RestaurantMenuAccordian;
