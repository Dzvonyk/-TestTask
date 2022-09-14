import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { baseQuery } from "store/baseQuery";
import { GetRevenueResponseType } from "../../types/RevenueType";


export const revenueApi = createApi({
  reducerPath: "revenueApi",
  // baseQuery,
  baseQuery: fetchBaseQuery({ baseUrl: "https://oril-coins-test.herokuapp.com/" }),

  endpoints: (builder) => ({
    getRevenue: builder.mutation<GetRevenueResponseType, string>({
      query: (id) => `/item/${id}`,
    }),
  }),
});

export const { useGetRevenueMutation } = revenueApi;
