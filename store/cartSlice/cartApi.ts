import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ICartReq} from "@/store/cartSlice/cartType";

export const cartApi = createApi({
    reducerPath: 'createApi',
    tagTypes: ['createApi'],
    baseQuery: fetchBaseQuery({
            baseUrl: 'https://globus-nukus.uz/api',
        }
    ),
    endpoints: (build) => ({
        getAllProduct: build.query({
            query: (header) => ({
                url: '/cart',
                headers: {
                    Authorization: `Bearer ${header}`
                }
            })
        }),
        addToCart: build.mutation({
            query: (body: ICartReq,) => ({
                body: {
                    product: body.product,
                    quantity: body.quantity
                },
                url: '/cart',
                method: 'POST',
                headers: {
                    Authorization: `Bearer  ${body.headers}`
                }
            }),
        }),
        decrementCart: build.mutation({
            query: (body) => ({
                body: {
                    product: body.product,
                    quantity: body.quantity - 1
                },
                url: `/cart/${body.id}`,
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${body.headers}`
                }
            })
        }),
        removeCart: build.mutation({
            query: (body) => ({
                url: `/cart/${body.id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${body.headers}`
                }
            })
        }),
        removeAllCart: build.mutation({
            query: (body) => ({
                url: '/cart/delete-all',
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${body.headers}`
                }
            })
        })
    })
})

export const {
    useGetAllProductQuery,
    useAddToCartMutation,
    useDecrementCartMutation,
    useRemoveCartMutation,
} = cartApi