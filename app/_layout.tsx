import {Stack} from "expo-router";
import {Provider} from "react-redux";
import {store} from "@/store";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const RootLayout = () => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Stack>
                    <Stack.Screen name={'index'} options={{headerShown: false}}/>
                    <Stack.Screen name={'auth'} options={{headerShown: false}}/>
                    <Stack.Screen name={'search'} options={{headerShown: false}}/>
                    <Stack.Screen name={'(tabs)'} options={{headerShown: false}}/>
                    <Stack.Screen name={'user'} options={{headerShown: false}}/>
                    <Stack.Screen name={'modal/[id]'} options={{headerShown: false}}/>
                    <Stack.Screen name={'category/[category]'} options={{headerShown: false}}/>
                    <Stack.Screen name={'Checkout'} options={{headerShown: false}}/>
                </Stack>
            </Provider>
        </QueryClientProvider>
    )
}
export default RootLayout