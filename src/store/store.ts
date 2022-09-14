import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import revenueSlice from './slices/revenue.slice';
import revenueListSlice from './slices/revenueList.slice';
// import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    revenueList: revenueListSlice,
    revenue: revenueSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// setupListeners(store.dispatch);
