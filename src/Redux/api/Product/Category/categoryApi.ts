import { baseApi } from "../../baseApi";

export const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetAllCategory: build.query({
      query: () => ({
        url: "/productCategory",
        method: "GET",
       
      }),
    }),
    GetSingleCategory: build.query({
      query: (id) => ({
        url: `/productCategory/${id}`,
        method: "GET",
       
      }),
    }),
    createCategory: build.mutation({
      query: (data) => ({
        url: "/productCategory",
        method: "POST",
        body: data,
      }),
    }),
 
  }),
});

export const {

useCreateCategoryMutation,
useGetAllCategoryQuery,
useGetSingleCategoryQuery
  

} = categoryApi;
