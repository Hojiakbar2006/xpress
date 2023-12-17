import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reLoading } from "./Loading";
import { reCard } from "../Redux/Card";
import { reSort, reSortedProduct } from './Sort';

const reducer = combineReducers({
  loading: reLoading,
  product: reCard,
  sort: reSort,
  sortedProduct: reSortedProduct,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
