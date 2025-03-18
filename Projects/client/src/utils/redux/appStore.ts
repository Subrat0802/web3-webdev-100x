import { configureStore } from "@reduxjs/toolkit";
import resData from "./resSlice";

const appStore = configureStore({
    reducer: {
        webDataThroughApi: resData,
    }
});

// ✅ Export the type of the entire Redux store
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export default appStore;