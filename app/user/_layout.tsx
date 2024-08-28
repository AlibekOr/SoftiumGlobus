import {Stack} from "expo-router";

const UserLayout = () => {
    return (
        <Stack>
            <Stack.Screen name={'order'} options={{headerShown: false}}/>
            <Stack.Screen name={'[cashback]'} options={{headerShown: false}}/>
            <Stack.Screen name={'store-info'} options={{headerShown: false}}/>
            <Stack.Screen name={'settings-profile'} options={{headerShown: false}}/>
            <Stack.Screen name={'changePassword/[changePassword]'} options={{headerShown: false}}/>
        </Stack>
    )
}

export default UserLayout