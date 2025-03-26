import { configureStore } from "@reduxjs/toolkit";
import resData from "./resSlice";
import cartData from "./cartSlice";

const appStore = configureStore({
    reducer: {
        webDataThroughApi: resData,
        cartDataApi: cartData
    }
});

// ✅ Export the type of the entire Redux store
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;