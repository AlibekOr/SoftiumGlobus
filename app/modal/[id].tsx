import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

const ModalScreen = () => {
    const {id} = useLocalSearchParams()
    return (
        <SafeAreaView>
            <View>
                <Text>{id}</Text>
            </View>
        </SafeAreaView>
    )
}
export default ModalScreen