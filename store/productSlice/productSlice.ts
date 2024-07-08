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
            query: (productId: number) => `/products/${productId}`
        })
    })

})
export const {useGetAllProductsQuery, useGetOneProductQuery} = productSlice