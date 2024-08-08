import {configureStore} from "@reduxjs/toolkit";
import {authApi} from "@/store/auth/authSlice";
import {productSlice} from "@/store/productSlice/productSlice";
import cartSlice from "@/store/cartSlice/cartSlice";
import {cartApi} from "@/store/cartSlice/cartApi";
import authToken from "@/store/auth/authToken";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [productSlice.reducerPath]: productSlice.reducer,
        [cartSlice.reducerPath]: cartSlice.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [authToken.reducerPath]: authToken.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([authApi.middleware, cartApi.middleware, productSlice.middleware])
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch