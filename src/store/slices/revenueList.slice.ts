import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//types
import { GetRevenueListResponseType } from "../../types/RevenueType";

const initialState: GetRevenueListResponseType[] = [
  {   
    _id: "",
    id: "",
    isActive: false,
    name: "",
    date: new Date(),
  },
];

const slice = createSlice({
  name: "revenueList",
  initialState: {
    revenueList: initialState,
  },
  reducers: {
    setRevenueList: (
      state,
      action: PayloadAction<GetRevenueListResponseType[]>
    ) => {
      state.revenueList = action.payload;
    },
  },
});

export const revenueListActions = slice.actions;

export default slice.reducer;
