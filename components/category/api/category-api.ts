import axios from "axios";

const URL = `https://globus-nukus.uz/api/categories`
export const categoryApi = {
    getAll: async () => {
        const {data} = await axios.get(URL)
        return data
    },

}