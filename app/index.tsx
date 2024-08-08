import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, TouchableOpacity} from "react-native";
import {router} from "expo-router";

const ReklamaLayout = () => {
    return (
        <SafeAreaView>
            <View>
                <Text> Globus Nukus №1</Text>
                <Text> Добро пожаловать </Text>
                <TouchableOpacity onPress={() => router.replace('auth')}>
                    <Text>Начать</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default ReklamaLayout;