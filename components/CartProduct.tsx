import {Image, StyleSheet, Text, TouchableOpacity, View, Pressable} from "react-native";
import {router} from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {useAddToCart} from "@/components/cart/query/cart-query";

interface IProps {
    id: number,
    images: any,
    name: string,
    price: number
    amount: number
}

export const CartProduct = (props: any) => {
    const addToCart = useAddToCart()
    const {id, images, name, price, token} = props
    const submit = async (props: IProps) => {
        const body = {
            product: props.id,
            quantity: 1,
            token: token
        }
        try {
            await addToCart.mutateAsync(body)
        } catch (err: any) {
            console.log(err.message)
        }
    }
    return (
        <View>
            <Pressable style={styles.con} onPress={() => router.push(`modal/${id}`)}>
                <Image width={168} height={230} style={{borderRadius: 13}} source={{uri: images[0].image}}/>
                <Text style={styles.title}>{name} </Text>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.priceStyle}>{price} сум</Text>
                </View>
                <View style={styles.cartBtn}>
                    <TouchableOpacity style={styles.touchable} onPress={() => submit(props)}>
                        <MaterialCommunityIcons style={styles.btn} name="shopping-outline"/>
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    con: {
        width: 165,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 7,
    }, img: {
        width: 165,
        height: 190,
        borderRadius: 16,
        shadowColor: 'black',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
    },
    title: {
        marginTop: 10,
        height: 50
    },
    priceStyle: {
        color: 'red',
        fontSize: 16
    },
    cartBtn: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    btn: {
        fontSize: 20
    },
    touchable: {
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 5,
        borderRadius: 50,
        borderColor: 'red'
    }
})