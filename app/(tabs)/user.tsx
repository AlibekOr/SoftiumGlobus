import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import {useAppSelector} from "@/store/hooks/hook";
import {UserList} from "@/components/user/ui/user-list";

const UserScreens = () => {
    const authToken = useAppSelector(state => state.authToken);

    return (
        <SafeAreaView>
            <UserList token={authToken.access}/>
        </SafeAreaView>
    )
}
export default UserScreens