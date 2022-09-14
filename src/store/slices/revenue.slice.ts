import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//types
import { GetRevenueResponseType } from "../../types/RevenueType";

const initialState: GetRevenueResponseType = {   
  _id: "",
  id: "",
  data:[ {
      id:0,
      curency: 0,
      date: new Date(),
  }],
};

const slice = createSlice({
  name: "revenue",
  initialState: {
    revenue: initialState,
  },
  reducers: {
    setRevenue: (
      state,
      action: PayloadAction<GetRevenueResponseType>
    ) => {
      state.revenue = action.payload;
    },
  },
});

export const revenueActions = slice.actions;

export default slice.reducer;
