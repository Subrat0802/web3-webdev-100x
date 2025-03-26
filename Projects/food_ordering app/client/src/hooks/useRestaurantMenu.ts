/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addRestaurantInfoMenuData, addRestaurantMenuData } from "../utils/redux/resSlice";


const useRestaurantMenu = (id: string | number) => {
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const fetchData = async () => {
        setLoading(true);
        try{
            const resposne = await fetch(`http://localhost:3000/api/restaurant/menu/${id}`);
            const res = await resposne.json();
            console.log("menudata", res);
            dispatch(addRestaurantInfoMenuData(res?.data?.cards?.[2]?.card?.card?.info));
            dispatch(addRestaurantMenuData(res?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards));
            setLoading(false);
        }catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    },[id]);
    

  return {loading}
}

export default useRestaurantMenu