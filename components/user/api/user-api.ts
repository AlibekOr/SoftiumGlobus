import axios from "axios";
import {IUser} from "@/components/user/type/user-type";


const URL = `https://globus-nukus.uz/api`
export const userApi = {
    getMe: async (token: string) => {
        const {data} = await axios.get(`${URL}/users/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    },
    usePut: async (body: IUser) => {
        const {data} = await axios.put(`${URL}/users/${body.id}`, {
            first_name: body.first_name,
            last_name: body.last_name,
            phone: body.phone,
            date_of_birth: body.date_of_birth,
            gender: body.gender
        }, {
            headers: {
                Authorization: `Bearer ${body.token}`
            }
        })
        return data

    },
    search: async (name: string) => {
        const {data} = await axios.get(`${URL}/products?name=`)
        return data
    }
}
