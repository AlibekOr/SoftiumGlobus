import {StyleSheet, Text, View} from "react-native";

export const OrderBody = ({orderData}: any) => {
    const upDate = new Date(orderData.status_updated)
    const createDate = new Date(orderData.created_at)
    const options: any = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }
    const formattedDate = upDate.toLocaleDateString('ru-Ru', options)
    const createDateFormat = createDate.toLocaleDateString('ru-Ru', options)
    return (
        <View>
            <View>
                <View style={styles.dateForm}>
                    <Text>Дата оформления</Text>
                    <Text>{createDateFormat}</Text>
                </View>
                <View style={styles.dateForm}>
                    <Text>Статус обновлён:</Text>
                    <Text>{formattedDate}</Text>
                </View>
            </View>
            {orderData.items.map((item: any, key: number) => (
                <View style={styles.orderInfoCon} key={key}>
                    <View style={styles.orderTxtCon}>
                        <Text style={styles.textOrder}>Названия товара:</Text>
                        <Text style={styles.textOrder}>{item.product_name}</Text>
                    </View>
                    <View style={styles.orderTxtCon}>
                        <Text style={styles.textOrder}>Количество тавара:</Text>
                        <Text style={styles.textOrder}>{item.quantity} шт</Text>
                    </View>
                    <View style={styles.orderTxtCon}>
                        <Text style={styles.textOrder}>Сумма товара:</Text>
                        <Text style={styles.textOrder}>{item.price} сум</Text>
                    </View>
                </View>
            ))}
            <View style={styles.orderBlock}>
                <View style={styles.orderTxtCon}>
                    <Text>Полученный кешбэк:</Text>
                    <Text>0</Text>
                </View>
                <View style={styles.orderTxtCon}>
                    <Text>Использованный кешбэк:</Text>
                    <Text>0</Text>
                </View>
                <View style={styles.orderTxtCon}>
                    <Text>Сумма с вычетом кешбэк:</Text>
                    <Text>{orderData.items.reduce((acc: any, item: any) => item.total_price + acc, 0)}</Text>
                </View>
                <View style={styles.orderTxtCon}>
                    <Text>Общая сумма:</Text>
                    <Text>{orderData.items.reduce((acc: any, item: any) => item.total_price + acc, 0)}</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    dateForm: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    orderInfoCon: {
        backgroundColor: 'rgba(77,182,58,0.83)',
        padding: 10,
        marginBottom: 10,
        borderRadius: 16,
        gap: 15,
        marginTop: 10
    },
    textOrder: {
        color: '#fff',
        fontWeight: '300'
    },
    orderTxtCon: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    orderBlock: {
        gap: 10
    }
})