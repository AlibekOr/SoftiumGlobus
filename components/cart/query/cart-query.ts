import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {cartApi} from "@/components/cart/api/cart-api";

export interface IBody {
    token: string,
}

export interface IBodyPost {
    token: string,
    product: number,
    quantity: number
}

export const useAllCartProducts = (body: IBody) => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: () => cartApi.getAll(body.token),
        staleTime: 5_000,
    })
}

export const useOneProduct = (body: IBody) => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: () => cartApi.getOne(body),
        staleTime: 5_000
    })
}
export const useAddToCart = () => {
    const queryClient = useQueryClient()
    return useMutation<IBodyPost, any, any>({
        mutationFn: cartApi.addToCart,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart'],
            })
        }
    })
}
export const useDecrementCart = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: cartApi.decrement,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
        },

    })
}
export const useDeleteCart = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: cartApi.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
        }
    })
}
export const useDeleteAll = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: cartApi.deleteAll,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['cart']
            })
        }
    })
}
export const useInterests = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: cartApi.interests,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['interests']
            })
        }
    })
}