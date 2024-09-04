import {FlatList, Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ShopinCart} from "@/components/ShopinCart";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";
import {useAllCartProducts} from "@/components/cart/query/cart-query";
import {router} from "expo-router";

const CartScreen = () => {
    const [token, setToken] = useState('');
    const cookies = async () => {
        const tokens: any = await AsyncStorage.getItem('access')
        setToken(tokens)
    }
    cookies()
    const {data, isSuccess} = useAllCartProducts({token: token})
    return (
        <SafeAreaView style={styles.viewSafe}>
            <View style={{height: '90.5%'}}>
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
                                  )}/>
                    : <Text>Loading.....</Text>

                }
            </View>
            {data !== undefined ?
                <View style={styles.checkoutBtn}>
                    <View>
                        <Text
                            style={styles.customPrice}>{data.data.cart.reduce((acc: number, cur: any,) => acc + cur.product.price * cur.quantity, 0)} сум</Text>
                        <Text style={styles.customQty}>
                            {data.data.cart.reduce((acc: number, cur: any,) => acc + cur.quantity, 0)} товара
                        </Text>
                    </View>
                    <Pressable disabled={data.data.cart.length === 0 ? true : false}
                               style={data.data.cart.length === 0 ? styles.btnRed : styles.btn}
                               onPress={() => router.push('Checkout')}>
                        <Text style={{color: '#fff', fontSize: 17}}>Оформитъ</Text>
                    </Pressable>
                </View>
                : ''
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
    },
    checkoutBtn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: '5%',
        paddingLeft: '5%',
        borderTopColor: 'rgba(0,0,0,0.16)',
        borderTopWidth: 1,
    },
    customPrice: {
        fontSize: 28,
        fontWeight: '700'
    },
    customQty: {
        fontSize: 16
    },
    btn: {
        width: 130,
        height: 50,
        backgroundColor: 'rgba(204,3,3,0.79)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    viewCon: {},
    viewSafe: {
        marginBottom: 100,
        position: 'relative',
        height: '100%',
        justifyContent: 'space-between'
    },
    btnRed: {
        width: 130,
        height: 50,
        backgroundColor: 'rgba(224,86,86,0.6)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
})