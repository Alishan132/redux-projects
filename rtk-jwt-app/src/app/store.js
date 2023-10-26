import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middle = getDefaultMiddleware().concat(apiSlice.middleware);
    console.log("middle", middle);
    return middle;
  },
  devTools: true,
});
