import {Pressable, StyleSheet, Text, View} from "react-native";

export const CheckoutBlock2 = ({data}: any) => {
    const onPress = () => {
        console.log('checkout block2 btn')
    }
    return (
        <View style={styles.block2}>
            <View style={styles.titleCon}>
                <Text style={styles.txt1}>Итого</Text>
                <Text
                    style={styles.txt2}>{data.reduce((acc: number, cur: any,) => acc + cur.product.price * cur.quantity, 0)} сум</Text>
            </View>
            <Pressable onPress={onPress} style={styles.btn}>
                <Text style={styles.btnTitle}>Оформить</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    block2: {
        flexDirection: 'column',
        width: '100%',
        height: 90,
        gap: 5,
        paddingTop: 5,
        paddingLeft: '3%',
        paddingRight: '3%',
    },
    titleCon: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        width: '100%',
        backgroundColor: 'rgba(204,3,3,0.79)',
        height: 45,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTitle: {
        color: '#fff',
        fontSize: 17,
    },
    txt1: {
        fontWeight: '700'

    },
    txt2: {
        fontWeight: '700'
    }
})