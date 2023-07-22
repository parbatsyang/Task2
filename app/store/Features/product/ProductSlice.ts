import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/getAllProducts",
  async (thunkApi) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

const initialState = {
  entities: [],
  searchText: "",
} as any;

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.entities.push(...action.payload);
    });
  },
});
export default ProductSlice.reducer;
export const { setProductSearchText } = ProductSlice.actions;
