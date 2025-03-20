/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { useSelector } from "react-redux";
import { RootState } from "../utils/redux/appStore";
import RestaurantInfoMenu from "../components/RestaurantInfoMenu";
import { useState, useEffect } from "react";
import RestaurantMenuAccordian from "@/components/RestaurantMenuAccordian";


const ReastaurantMenu = () => {
  const [dataAccourdian, setDataAccourdian] = useState<any[]>([]);
  const { id } = useParams();
  const { loading } = useRestaurantMenu(id as string) || [];

  const resInfo = useSelector(
    (store: RootState) => store.webDataThroughApi?.RestaurantInfoMenuData
  ) ?? null;

  const resMenuInfo = useSelector(
    (store: RootState) => store.webDataThroughApi?.RestaurantMenuData
  ) ?? [];

  useEffect(() => {
    if (resMenuInfo && Array.isArray(resMenuInfo)) {
      const AccorData = resMenuInfo.filter(
        (el) =>
          (el?.card?.card as any)?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      // ✅ Prevents infinite re-render
      if (JSON.stringify(AccorData) !== JSON.stringify(dataAccourdian)) {
        setDataAccourdian(AccorData);
      }
    }
  }, [resMenuInfo, dataAccourdian]);

  const restaurantData = Array.isArray(resInfo) ? resInfo[0] : resInfo;

  const infoData: any = restaurantData;

  return (
    <div className="w-11/12 md:w-7/12 mx-auto min-h-screen">
      {loading ? (
        <p>Loading...</p>
      ) : restaurantData ? (
        <div>
          <RestaurantInfoMenu data={infoData} />
          {dataAccourdian.length > 0 && (
            <RestaurantMenuAccordian accData={dataAccourdian} />
          )}
        </div>
      ) : (
        <p>No restaurant data available</p>
      )}
    </div>
  );
};

export default ReastaurantMenu;
