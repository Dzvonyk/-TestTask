import { combineReducers } from "@reduxjs/toolkit";
import { revenueApi } from "./api/revenue.api";
import { revenueListApi } from "./api/revenueList.api";
import revenueSlice from "./slices/revenue.slice";
import revenueListSlice from "./slices/revenueList.slice";

const apiReducers = {
  [revenueListApi.reducerPath]: revenueListApi.reducer,
  [revenueApi.reducerPath]: revenueApi.reducer,
};

const sliceReducers = {
  revenueList: revenueListSlice,
  revenue: revenueSlice,
};

export const reducers = combineReducers({
  ...apiReducers,
  ...sliceReducers,
});
