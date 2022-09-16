import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//types
import { CurencyType, GetRevenueResponseType } from "../../types/RevenueType";

const initialState: GetRevenueResponseType = {
  _id: "",
  id: "",
  data: [
    {
      id: 0,
      curency: 0,
      date: new Date(),
    },
  ],
};

const initialStateCurency: CurencyType[] = [
  {
    id: 0,
    curency: 0,
    date: new Date(),
  },
];

const slice = createSlice({
  name: "revenue",
  initialState: {
    revenue: initialState,
    curencyList: initialStateCurency,
  },
  reducers: {
    setRevenue: (state, action: PayloadAction<GetRevenueResponseType>) => {
      state.revenue = action.payload;
    },
    setCurencyList: (state, action: PayloadAction<CurencyType[]>) => {
      state.curencyList = action.payload;
    },
  },
});

export const revenueActions = slice.actions;

export default slice.reducer;
