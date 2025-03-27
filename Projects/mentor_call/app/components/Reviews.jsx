'use client'

import { StarSVG } from "@/public/svg/star";

export const Reviews = ({data}) => {
    console.log("dataddcc", data);
    return (
        <div className="w-full mx-auto  mt-10 px-7  py-4 rounded-xl pb-10 ">
            <p className="text-3xl text-gray-800 ">Reviews</p>
            <p className="text-gray-500 py-2 mb-5">3 reviews | 5.0</p>
            <div className="flex flex-col gap-5">
                {
                    data.map((el, i) => (
                        <div key={i} className="border flex flex-col gap-5 border-gray-300 rounded-xl p-4 text-gray-700 ">
                            <div className="flex items-center gap-1">
                            <p className="font-semibold">{el.rating} </p>
                            <StarSVG />
                            </div>
                            
                            <p className="ml-1 text-md">{el.comment}</p>
                            <div className="flex items-center gap-2">
                                <img className="w-4 rounded-full" src={el.avatar}/>
                                <p className="text-sm">{el.name}</p>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}