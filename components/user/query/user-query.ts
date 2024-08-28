import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {userApi} from "@/components/user/api/user-api";
import {IUser} from "@/components/user/type/user-type";

export const useGetMe = (token: string) => {
    return useQuery({
        queryKey: ['getMe'],
        queryFn: () => userApi.getMe(token),
        staleTime: 30_000,
    })
}

export const usePutMe = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: userApi.usePut,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['usePut']
            })
        }
    })
}
export const useSearch = (name: string) => {
    return useQuery({
        queryKey: ['search'],
        queryFn: () => userApi.search(name),
        staleTime: 30_000
    })
}