import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IInputForm, IPasswordChange, IPasswordChangeVerify, IRegistration} from "@/store/auth/type";

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
        }),
        registration: build.mutation({
            query: (body: IRegistration) => ({
                body,
                url: '/users',
                method: 'POST'
            })
        }),
        registrationVerify: build.mutation({
            query: (body: IPasswordChangeVerify) => ({
                body,
                url: '/users/verify',
                method: 'POST'
            })
        })

    })
})
export const {
    useLoginMutation,
    usePasswordChangeMutation,
    usePasswordChangeVerifyMutation,
    useRegistrationMutation,
    useRegistrationVerifyMutation
} = authApi