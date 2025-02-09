import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { getLocalStorage } from "@/utils/LocalStorageUtil";

export const apiSlice = createApi({
  reducerPath: "financier",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API,
    credentials: "same-origin",
    prepareHeaders: (headers, { getState }) => {
      // since getLocalStorage returns a promise...
      // getLocalStorage('iToken_buddy').then((res) => {
      //   if (res) {
      //     headers.set('Authorization', `Bearer ${res}`)
      //   }
      //   return headers
      // })
      headers.set("x-app-key", import.meta.env.VITE_APP_KEY)
    },
  }),
  endpoints: (builder) => ({
    getRequests: builder.query({
      query: (url) => url,
    }),

    postRequests: builder.mutation({
      query: ({ endpoint, body }) => ({
        url: endpoint,
        method: "POST",
        body: body,
      })
    }),

    putRequests: builder.mutation({
      query: ({ endpoint, body }) => ({
        url: endpoint,
        method: "PUT",
        body: body,
      })
    }),

    patchRequests: builder.mutation({
      query: ({ endpoint, body }) => ({
        url: endpoint,
        method: "PATCH",
        body: body,
      })
    }),

    deleteRequest: builder.mutation({
      query: (url) => ({
        url: url,
        method: "DELETE",
      })
    }),
  }),
});

export const {
  useGetRequestsQuery,
  usePostRequestsMutation,
  usePutRequestsMutation,
  useDeleteRequestMutation,
  usePatchRequestsMutation,
  endpoints

} = apiSlice;
