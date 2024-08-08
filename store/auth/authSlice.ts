import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IInputForm, IPasswordChange, IPasswordChangeVerify} from "@/store/auth/type";

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
        passwordChange: build.mutation({
            query: (body: IPasswordChange) => ({
                body,
                url: '/users/password-change',
                method: 'POST'
            })
        }),
        passwordChangeVerify: build.mutation({
            query: (body: IPasswordChangeVerify) => ({
                body,
                url: '/users/password-change/verify',
                method: 'POST',
            })
        })

    })
})
export const {useLoginMutation, usePasswordChangeMutation, usePasswordChangeVerifyMutation} = authApi