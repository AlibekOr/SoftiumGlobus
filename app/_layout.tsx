import {Stack} from "expo-router";
import {Provider} from "react-redux";
import {store} from "@/store";

const RootLayout = () => {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name={'index'} options={{headerShown: false}}/>
                <Stack.Screen name={'auth'} options={{headerShown: false}}/>
                <Stack.Screen name={'(tabs)'} options={{headerShown: false}}/>
            </Stack>
        </Provider>
    )
}
export default RootLayout