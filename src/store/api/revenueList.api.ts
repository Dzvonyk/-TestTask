import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseQuery } from "store/baseQuery";
import { GetRevenueListResponseType } from "../../types/RevenueType";


export const revenueListApi = createApi({
  reducerPath: "revenueListApi",
  // baseQuery,
  baseQuery: fetchBaseQuery({ baseUrl: "https://oril-coins-test.herokuapp.com/" }),

  endpoints: (builder) => ({
    getRevenueList: builder.mutation<GetRevenueListResponseType[], null>({
      query: () => "/list",
    }),
  }),
});

export const { useGetRevenueListMutation } = revenueListApi;
