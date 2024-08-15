import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {ICartType} from "@/store/cartSlice/cartType";
import {MaterialIcons} from '@expo/vector-icons';
import {useAddToCart, useAllCartProducts, useDecrementCart, useDeleteCart} from "@/components/cart/query/cart-query";

interface IProps {
    id: number,
    images: any,
    name: string,
    price: number,
    amount: number,
    cart_items: number,
    productId: number,
    tokens: string
}

export const ShopinCart = (props: ICartType) => {
    const addToCart = useAddToCart()
    const deleteCart = useDeleteCart()
    const decrement = useDecrementCart()
    const {price, images, name, qty, tokens, amount, productId} = props
    const addProduct = async (props: IProps) => {
        try {
            const body: any = {
                product: props.id,
                quantity: 1,
                token: tokens
            }
            await addToCart.mutateAsync(body)

        } catch (err) {
            console.log(err)
        }

    }
    const decrementCart = async (props: ICartType) => {
        try {
            if (props.qty === 1) {
                return props
            } else {
                const body = {
                    id: props.id,
                    qty: props.qty - 1,
                    productId: props.productId,
                    token: tokens
                }
                return await decrement.mutateAsync(body)
            }
        } catch (err) {
            console.log(err)
        }
    }
    const removeCart = async (id: number) => {
        const body = {
            id: id,
            token: tokens
        }
        try {
            await deleteCart.mutateAsync(body)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <View style={styles.cartContainer}>
            <View>
                <Image
                    style={{borderRadius: 16}}
                    width={120}
                    height={150}
                    source={{uri: images[0].image}}/>
            </View>
            <View>
                <Text>{price * qty} сум</Text>
                <Text style={{width: 200}}>{name}</Text>
                <Text>{price} сум/шт</Text>
                <View style={styles.btns}>
                    <View style={styles.qtyForm}>
                        <TouchableOpacity style={styles.btn} onPress={() => decrementCart(props)}>
                            <Text style={styles.btnText}>-</Text>
                        </TouchableOpacity>
                        <View style={{justifyContent: 'center'}}>
                            <Text style={{fontSize: 18}}>{qty}</Text>
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={() => addProduct(props)}>
                            <Text style={styles.btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => removeCart(productId)}>
                            <MaterialIcons name="delete" size={24} color="red"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cartContainer: {
        width: '90%',
        flexDirection: 'row',
        paddingLeft: '5%',
        gap: 15,
        marginBottom: 15,
    },
    btns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15
    },
    qtyForm: {
        flexDirection: 'row',
        backgroundColor: '#d5d3d3',
        padding: 10,
        borderRadius: 10,
        gap: 15
    },
    btn: {
        width: 30,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,

    },
    btnText: {
        fontSize: 20,
    }
})