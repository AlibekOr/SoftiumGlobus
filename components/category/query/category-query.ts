import {useQuery} from "@tanstack/react-query";
import {categoryApi} from "@/components/category/api/category-api";

export const useGetCategory = () => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => categoryApi.getAll()
    })
}
export const useGetSingleData = (category: any) => {
    return useQuery({
        queryKey: [category],
        queryFn: () => categoryApi.getSingleData(category)
    })
}

export const useGetCategoryID = ({categoryID}: any) => {
    return useQuery({
        queryKey: ['categoryID'],
        queryFn: () => categoryApi.getCategoryID(categoryID)
    })
}