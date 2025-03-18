import { useRef } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const CarouselHome = ({ data }: { data: string[] }) => {

    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if(carouselRef.current){
            carouselRef.current.scrollBy({
                left: -500,
                behavior: "smooth"
            })
        }
    }

    const scrollRight = () => {
        if(carouselRef.current){
            carouselRef.current.scrollBy({
                left: 500,
                behavior: "smooth"
            })
        }
    }

  return (
    <div className="flex flex-col  overflow-x-hidden pb-4 select-none">
      <div className="flex justify-between items-center font-semibold py-3">
        <p className="text-2xl ">Offers for you</p>
        <div className="flex gap-3 pr-[1px]">
          <div onClick={scrollLeft} className="bg-gray-200 p-2 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full hover:bg-gray-300 cursor-pointer transition-all duration-200 hover:scale-105">
            <FaAngleLeft />
          </div>
          <div onClick={scrollRight} className="bg-gray-200 p-2 rounded-full dark:bg-gray-700 dark:hover:bg-gray-600  hover:bg-gray-300 cursor-pointer transition-all duration-200 hover:scale-105">
            <FaAngleRight />
          </div>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-hidden transition-all duration-200" ref={carouselRef}>
        {data.map((el, i) => {
          return (
            <img className="w-[100%] md:w-[60%] lg:w-[35%]" key={i} src={el} />
          );
        })}
      </div>
    </div>
  );
};

export default CarouselHome;
