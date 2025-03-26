import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { REST_DATA_API } from "../utils/constents";
import { addAllRestaurantsData } from "../utils/redux/resSlice";
import { AppDispatch } from "../utils/redux/appStore";

export const useRestaurant = () => {
  const [loading, setLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(REST_DATA_API);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const res = await response.json();
      console.log("API Response:", res);

      dispatch(addAllRestaurantsData(res.data.cards));
      setLoading(false);
    } catch (error) {
      console.error("Fetch Error:", error);
      setLoading(false);
    }
  }, [dispatch]); 

  useEffect(() => {
    fetchData();
  }, [fetchData]); 

  return { loading };
};
