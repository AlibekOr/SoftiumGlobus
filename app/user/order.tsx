import {StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import {GetOrders} from "@/components/webSocket/get_orders";

const Order = () => {
    return (
        <SafeAreaView>
            <View style={styles.orderCon}>
                <AntDesign name="arrowleft" size={24} color="black"/>
                <View style={styles.view}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>Мои заказы</Text>
                </View>
            </View>
            <GetOrders/>
        </SafeAreaView>
    )
}
export default Order
const styles = StyleSheet.create({
    orderCon: {
        flexDirection: 'row',
        paddingLeft: '5%',
        marginTop: '5%',
        alignItems: 'center',
    },
    view: {
        width: "80%",
        alignItems: 'center'
    }
})