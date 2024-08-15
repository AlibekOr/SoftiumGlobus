import axios from "axios";

export const productApi = {
    nextData: async (URL: string) => {
        const {data} = await axios.get(URL)
        return data
    },

}