import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "@/store/auth/authSlice";
import {productSlice} from "@/store/productSlice/productSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [productSlice.reducerPath]: productSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, productSlice.middleware])
})
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch