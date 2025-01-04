import { configureStore } from "@reduxjs/toolkit";
import LayoutReducers from "@/Redux/Layout/LayoutReducers";
import ProductReducers from "@/Redux/Reducers/ProductReducers";
import FiltersSlice from "@/Redux/Reducers/FilterSlice";

export const store = configureStore({
  reducer: {
    layout: LayoutReducers,
    product: ProductReducers,
    filter:FiltersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
