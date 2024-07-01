import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IInputForm} from "@/store/auth/type";

export const authApi = createApi({
    reducerPath: 'auth',
    tagTypes: ['auth'],
    baseQuery: fetchBaseQuery(
        {baseUrl: 'https://globus-nukus.uz/api'}),
    endpoints: (build) => ({
        login: build.mutation({
            query: (body: IInputForm) => ({
                body,
                url: '/token',
                method: 'POST'
            }),

        }),

    })
})
export const {useLoginMutation} = authApi