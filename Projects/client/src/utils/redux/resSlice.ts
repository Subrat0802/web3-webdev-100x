import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a restaurant item
interface ImageGridCard {
  id: string;
  imageId: string;
}

interface RestaurantCard {
  card: {
    card: {
      imageGridCards?: {
        info: ImageGridCard[];
      };
    };
  };
}

interface RestaurantState {
  RestaurantData: RestaurantCard[]; 
}

// ✅ Ensure it's always an array
const initialState: RestaurantState = {
  RestaurantData: [],
};

const resData = createSlice({
  name: "resSlice",
  initialState,
  reducers: {
    addAllRestaurantsData: (state, action: PayloadAction<RestaurantCard[]>) => {
      state.RestaurantData = action.payload;
    },
  },
});

export const { addAllRestaurantsData } = resData.actions;
export default resData.reducer;
