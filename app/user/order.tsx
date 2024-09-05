import {ScrollView, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import {router} from "expo-router";
import {useAppSelector} from "@/store/hooks/hook";
import {useEffect, useState} from "react";
import {OrderBtn} from "@/components/order/orderbtn";

const Order = () => {
    const authToken = useAppSelector(state => state.authToken);
    const [socketData, setSocketData] = useState<any>()
    useEffect(() => {
        const ws = new WebSocket(`wss://globus-nukus.uz/ws/orders?token=${authToken.access}`)
        ws.onopen = () => {
            const body = {
                type: 'get_orders'
            }
            ws.send(JSON.stringify(body))
        }
        ws.onmessage = (e) => {
            const data = JSON.parse(e.data)
            setSocketData(data.data)
        }
    }, []);
    return (
        <SafeAreaView>
            <View style={styles.orderCon}>
                <AntDesign name="arrowleft" size={24} onPress={() => router.back()} color="black"/>
                <View style={styles.view}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>Мои заказы</Text>
                </View>
            </View>
            <ScrollView style={styles.scroll}>
                {socketData !== undefined ?
                    <View>
                        {
                            socketData.orders.map((i: any, key: any) => <OrderBtn orderData={i}/>)
                        }
                    </View>
                    :
                    <View>
                        <Text>loading...</Text>
                    </View>
                }
            </ScrollView>
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
    },
    scroll: {
        marginBottom: '20%'
    }
})