import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

const Category = () => {
    const {category} = useLocalSearchParams()
    return (
        <SafeAreaView>
            <Text>{category}</Text>
        </SafeAreaView>
    )
}
export default Category