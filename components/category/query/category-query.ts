import {useQuery} from "@tanstack/react-query";
import {categoryApi} from "@/components/category/api/category-api";

export const useGetCategory = () => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => categoryApi.getAll()
    })
}