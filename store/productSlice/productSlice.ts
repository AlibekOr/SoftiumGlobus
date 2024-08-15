import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productSlice = createApi({
    reducerPath: 'productSlice',
    tagTypes: ['productSlice'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://globus-nukus.uz/api'}),
    endpoints: (build) => ({
        getAllProducts: build.query({
            query: () => '/products'
        }),
        getOneProduct: build.query({
            query: (productId) => `/products/${productId}`
        }),
        getSearchProduct: build.query({
            query: (product: string) => `/products?search=${product}`
        }),
        getProductNext: build.query({
            query: (index) => `/products?limit=20&offset=${index}`
        }),
    })

})
export const {
    useGetAllProductsQuery,
    useGetOneProductQuery,
    useGetSearchProductQuery,
    useGetProductNextQuery
} = productSlice