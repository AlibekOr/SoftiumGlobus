import axios from "axios";

const URL = `https://globus-nukus.uz/api`
export const categoryApi = {
    getAll: async () => {
        const {data} = await axios.get(`${URL}/categories`)
        return data
    },
    getSingleData: async (category: any) => {
        const {data} = await axios.get(`https://globus-nukus.uz/api/products?category=${category}`)
        return data
    },
    getCategoryID: async (categoryID: string) => {
        const {data} = await axios.get(`${URL}/categories/${categoryID}`)
        console.log(data)
        return data
    }
}