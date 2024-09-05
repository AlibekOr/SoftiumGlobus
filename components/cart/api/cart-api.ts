import axios from "axios";
import {IBody, IBodyPost} from "@/components/cart/query/cart-query";

const HTTP = `https://globus-nukus.uz/api`
export const cartApi = {
    getAll: async (token: string) => {
        const {data} = await axios.get(`${HTTP}/cart`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    },
    getOne: async (body: IBody) => {
        const {data} = await axios.get(`${HTTP}/cart/${body.id}`, {
            headers: {
                Authorization: `Bearer ${body.token}`
            }
        })
        return data
    },
    addToCart: async (body: IBodyPost) => {
        const bodyData = {
            product: body.product,
            quantity: body.quantity
        }
        const {data} = await axios.post(`${HTTP}/cart`, bodyData, {
            headers: {
                Authorization: `Bearer ${body.token}`
            }
        })
        return data
    },
    decrement: async (body: any) => {
        const bodyData = {
            product: body.id,
            quantity: body.qty
        }
        const {data} = await axios.put(`${HTTP}/cart/${body.productId}`, bodyData, {
            headers: {
                Authorization: `Bearer ${body.token}`
            }
        })
        return data
    },
    delete: async (body: { id: number, token: string }) => {
        const {data} = await axios.delete(`${HTTP}/cart/${body.id}`, {
            headers: {
                Authorization: `Bearer ${body.token}`
            }
        })
        return data
    },
    deleteAll: async (token: string) => {
        const {data} = await axios.delete(`${HTTP}/cart/delete-all`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    },
    interests: async (body: { product: number, token: string }) => {
        const {data} = await axios.post(`${HTTP}/interests`, body.product, {
            headers: {
                Authorization: `Bearer ${body.token}`
            }
        })
        return data
    }
}