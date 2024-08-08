import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCart = createAsyncThunk(
    'cartSlice/AllCart',
    async (header: any) => {
        const res = await axios.get('https://globus-nukus.uz/api/cart',
            {headers: {Authorization: `Bearer ${header}`}})
        return (res.data.data.cart)
    }
)
const initialState: any = {
    cart: []
}
const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        // addToCart: (state, {payload}) => {
        //     if (state.find(item => item.id === payload.id) === undefined) {
        //         return [
        //             ...state,
        //             {
        //                 id: payload.id,
        //                 name: payload.name,
        //                 price: payload.price,
        //                 amount: payload.amount - 1,
        //                 images: payload.images,
        //                 qty: 1
        //             }
        //         ]
        //     } else {
        //         return state.map((item) => {
        //             if (item.id === payload.id && payload.amount > 0) {
        //                 return {
        //                     id: item.id,
        //                     name: item.name,
        //                     price: item.price,
        //                     amount: item.amount - 1,
        //                     images: item.images,
        //                     qty: item.qty + 1
        //                 }
        //             } else {
        //                 alert('Товар ограничен на складе')
        //                 return item
        //             }
        //         })
        //     }
        // },
        // decrementCart: (state, {payload}) => {
        //     if (state.find((val) => val.id === payload)?.qty === 1) {
        //         return
        //     } else {
        //         return state.map((i) => {
        //             if (i.id === payload) {
        //                 return {
        //                     ...i,
        //                     qty: i.qty - 1,
        //                     amount: i.amount + 1
        //                 }
        //             }
        //             return i
        //         })
        //     }
        // },
        // removeCart: (state, {payload}) => {
        //     if (state.find((i) => i.id === payload.id)?.qty === 1) {
        //         return state.map((value) => {
        //             if (value.id === payload.id) {
        //                 return {
        //                     ...value,
        //                     amount: value.amount + payload.qty,
        //                     qty: 0
        //                 }
        //             }
        //             return value
        //         })
        //     }
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCart.fulfilled, (state, {payload}) => {
                state.cart = payload
            })
    }
})
export const {} = cartSlice.actions
export default cartSlice