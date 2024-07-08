import {Stack} from "expo-router";

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name={'sign-in'} options={{headerShown: false}}/>
            <Stack.Screen name={'sign-up'} options={{headerShown: false}}/>
            <Stack.Screen name={'forget-password'} options={{headerShown: false}}/>
            <Stack.Screen name={'changePassword/[tel]'} options={{headerShown: false}}/>
        </Stack>
    )
}
export default AuthLayout