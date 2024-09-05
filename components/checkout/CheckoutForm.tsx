import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import {useAllCartProducts} from "@/components/cart/query/cart-query";
import {useAppSelector} from "@/store/hooks/hook";
import {CheckoutBlock2} from "@/components/checkout/CheckoutBlock2";
import {CheckoutRadioBtn} from "@/components/checkout/CheckoutRadioBtn";
import {MapBtn} from "@/components/checkout/Mapbtn";

export const CheckoutForm = () => {
    const authToken = useAppSelector(state => state.authToken);
    const {data} = useAllCartProducts({token: authToken.access})
    return (
        <View style={styles.con}>
            <View style={styles.blockCon1}>
                <View>
                    <ScrollView horizontal={true}>
                        {data.data.cart.map((i: any, index: number) => (
                            <View key={index} style={styles.imageView}>
                                <Image width={120} height={120} source={{uri: i.product.images[0].image}}/>
                            </View>
                        ))}
                    </ScrollView>
                    <Text style={styles.scrollText}>Способ получения</Text>
                </View>
                <CheckoutRadioBtn/>
                <Text>Адрес доставки</Text>
                <MapBtn/>
            </View>
            <CheckoutBlock2 data={data.data.cart}/>
        </View>
    )
}
const styles = StyleSheet.create({
    con: {
        width: '100%',
        height: '92%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    blockCon1: {
        marginLeft: '3%',
        marginRight: '3%',
    },
    imageView: {
        marginRight: 5
    },
    scrollText: {
        fontWeight: '500',
        fontSize: 20
    }
})