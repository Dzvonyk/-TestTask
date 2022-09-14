import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { revenueListActions } from "./../store/slices/revenueList.slice";
import { revenueActions } from "./../store/slices/revenue.slice";

const allActions = {
  ...revenueListActions,
  ...revenueActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch); 
};
