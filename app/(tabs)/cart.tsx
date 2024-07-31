import {FlatList, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ShopinCart} from "@/components/ShopinCart";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";
import {useAllCartProducts} from "@/components/cart/query/cart-query";

const CartScreen = () => {
    const [token, setToken] = useState('');
    const cookies = async () => {
        const tokens: any = await AsyncStorage.getItem('access')
        setToken(tokens)
    }
    cookies()
    const {data, isSuccess} = useAllCartProducts({token: token, id: 0})
    return (
        <SafeAreaView>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.title}>Корзина</Text>
            </View>
            {data !== undefined ?
                data.data.cart.length === 0 ?
                    <Text>korzinkide essat joq </Text>
                    :
                    <FlatList style={styles.cartForm}
                              data={
                                  data.data.cart.sort((item: any, secondItem: any) => item.id - secondItem.id)
                              }
                              renderItem={({item}: any) => (
                                  <ShopinCart
                                      tokens={token}
                                      productId={item.id}
                                      cart_items={item.cart_items}
                                      id={item.product.id} name={item.product.name}
                                      price={item.product.price}
                                      amount={item.product.amount}
                                      images={item.product.images}
                                      qty={item.quantity}
                                  />
                              )}/> : <Text>Loading.....</Text>

            }
        </SafeAreaView>
    )
}
export default CartScreen
const styles = StyleSheet.create({
    title: {
        fontWeight: '500',
        fontSize: 24,
        letterSpacing: 1
    },
    cartForm: {
        marginTop: 30,
        marginBottom: 30,
    }
})