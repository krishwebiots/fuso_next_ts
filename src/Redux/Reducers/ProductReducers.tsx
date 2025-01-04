import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CategoryType, ProductSliceProp, ProductType } from "../../Types/ProductType";

const initialState: ProductSliceProp = {
  productItem: [],
  categoryItem: [],
};

export const fetchProductApiData = createAsyncThunk<ProductType[], void, {}>("/api/product", async () => {
  const response = await axios.get("/api/product");
  return response.data;
});

export const fetchCategoryApiData = createAsyncThunk<CategoryType[], void, {}>("/api/category", async () => {
  const response = await axios.get("/api/category");
  return response.data;
});

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    deleteProduct: (state, action) => {
      state.productItem = state.productItem.filter((product) => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductApiData.fulfilled, (state, action) => {
      state.productItem = action.payload;
    });
    builder.addCase(fetchCategoryApiData.fulfilled, (state, action) => {
      state.categoryItem = action.payload;
    });
  },
});

export const {deleteProduct} = ProductSlice.actions;
export default ProductSlice.reducer;
