import { useEffect} from "react";
import { useSelector } from "react-redux";
// import Shimmer from "../utils/Shimmer";

import { Link } from "react-router-dom";
import CartItems from "@/components/CartItems";
import CartBilling from "@/components/CartBilling";
import { RootState } from "@/utils/redux/appStore";

const CartPage = () => {

    const cartItems = useSelector(
        (store: RootState) => store?.cartDataApi
      ) ?? null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return cartItems === null ? (
    <p>Loading ...</p>
  ) : (
    <div className="w-full min-h-[100vh]pt-4 ">
      {cartItems.length === 0 ? (
        <div className="w-full h-[100vh] font-bold text-2xl flex flex-col justify-center items-center">
          Your cart is empty
          <Link to={"/"}>
            <button className="text-sm py-2 px-4 bg-green-900 mt-2 cursor-pointer hover:bg-[#00C544]">
              Go to home page
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-10/12 mx-auto flex gap-5 flex-col md:flex-row mt-20  justify-between">
          <div className=" w-full md:w-[40%] min-h-[100vh] ">
            <div className=" mb-3 flex  ">
              <Link className="" to={"/"}>
                <p>Home/</p>
              </Link>
              <Link to={"/"}>
                <p>Items</p>
              </Link>
            </div>
            {cartItems.map((el) => {
              return <CartItems key={el.id} data={el} />;
            })}
          </div>
          <div className="w-full md:w-[40%] min-h-[100vh] ">
            <CartBilling />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
