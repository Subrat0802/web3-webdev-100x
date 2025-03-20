import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface ImageGridCard {
  id: string;
  imageId: string;
}

interface RestaurantCard {
  card: {
    card: {
      imageGridCards?: { info: ImageGridCard[] };
    };
  };
}


interface RestaurantState {
  RestaurantData: RestaurantCard[];
  RestaurantInfoMenuData: RestaurantCard[];
  RestaurantMenuData: RestaurantCard[];
}


const initialState: RestaurantState = {
  RestaurantData: [],
  RestaurantInfoMenuData: [],
  RestaurantMenuData: [],
};

const resData = createSlice({
  name: "resSlice",
  initialState,
  reducers: {
    addAllRestaurantsData: (state, action: PayloadAction<RestaurantCard[]>) => {
      state.RestaurantData = action.payload;
    },
    addRestaurantInfoMenuData: (state, action: PayloadAction<RestaurantCard[]>) => {
      state.RestaurantInfoMenuData = action.payload;
    },
    addRestaurantMenuData: (state, action: PayloadAction<RestaurantCard[]>) => {
      state.RestaurantMenuData = action.payload;
    },
  },
});

export const { addAllRestaurantsData, addRestaurantMenuData, addRestaurantInfoMenuData } = resData.actions;
export default resData.reducer;
