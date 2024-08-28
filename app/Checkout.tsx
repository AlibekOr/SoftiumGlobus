import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {router} from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useAppSelector} from "@/store/hooks/hook";
import {useRef, useState} from "react";
// `wss://globus-nukus/ws/orders?token={{${authToken.access}}}`
const Checkout = () => {
    const authToken = useAppSelector(state => state.authToken);
    const [tokens, setToken] = useState(authToken.access)
    const ws = new WebSocket(`wss://globus-nukus/ws/orders?token=${tokens}`)
    return (
        <SafeAreaView>
            <View style={styles.titleView}>
                <TouchableOpacity onPress={() => router.push('(tabs)/cart')}>
                    <AntDesign name="arrowleft" size={26} color="black"/>
                </TouchableOpacity>
                <Text style={styles.titleText}>Оформление заказа</Text>
            </View>
            <View>

            </View>
        </SafeAreaView>
    )
}
export default Checkout
const styles = StyleSheet.create({
    titleView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        padding: 15,
        gap: 30,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '700'
    }
})