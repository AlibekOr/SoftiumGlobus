import {StyleSheet, Text, View} from "react-native";
import {useAllCartProducts} from "@/components/cart/query/cart-query";
import {useAppSelector} from "@/store/hooks/hook";
import {CheckoutBlock2} from "@/components/checkout/CheckoutBlock2";
import {CheckoutBlock1} from "@/components/checkout/CheckoutBlock1";

export const CheckoutForm = () => {
    const authToken = useAppSelector(state => state.authToken);
    const {data} = useAllCartProducts({token: authToken.access})
    console.log(data)
    return (
        <View style={styles.con}>
            <CheckoutBlock1/>
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

})