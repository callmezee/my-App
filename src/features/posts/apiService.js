import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiService = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    fetchItems: builder.query({
      query: (page = 1) => `posts/?_page=${page}&_limit=10`,
    }),
    // You can add more endpoints here
  }),
});

export const { useFetchItemsQuery } = apiService;
export default apiService;
