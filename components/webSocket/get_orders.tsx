import {Pressable, Text, View} from "react-native";
import {useAppSelector} from "@/store/hooks/hook";
import {useEffect, useState} from "react";

export const GetOrders = () => {
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
        <>
            {socketData !== undefined ?
                <View>
                    {
                        socketData.orders.map((i: any, key: any) => (
                            <View key={key}>
                                <Pressable>
                                    <View>
                                        {}
                                    </View>
                                    <View>
                                        <Text>Заказ №{i.order_number}</Text>
                                    </View>
                                </Pressable>
                            </View>
                        ))
                    }
                </View>
                :
                <View>
                    <Text>loading...</Text>
                </View>
            }
        </>
    )
}