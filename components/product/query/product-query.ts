import {useQuery} from "@tanstack/react-query";
import {productApi} from "@/components/product/api/product-api";

export const NextData = async (URL: string) => {
    if (URL !== undefined) {
        useQuery({
            queryKey: ['nextData'],
            queryFn: () => productApi.nextData(URL),
            staleTime: 30_000
        })
    }
}
