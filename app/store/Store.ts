import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features/product/ProductSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      product: productReducer,
    },
  });
}
export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
