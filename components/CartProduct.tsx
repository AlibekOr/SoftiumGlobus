import {Image, StyleSheet, TouchableHighlight, Text, TouchableOpacity, View} from "react-native";
import {router} from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {useAddToCart} from "@/components/cart/query/cart-query";
import {CarouselImg} from "@/components/CarouselImg";

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
            <TouchableHighlight style={styles.con} onPress={() => router.push(`modal/${id}`)}>
                <CarouselImg image={images}/>
                <Text style={styles.title}>{name} </Text>
                <View style={{alignItems: 'flex-end'}}>
                    <Text style={styles.priceStyle}>{price} сум</Text>
                </View>
                <View style={styles.cartBtn}>
                    <TouchableHighlight style={styles.touchable} onPress={() => submit(props)}>
                        <MaterialCommunityIcons style={styles.btn} name="shopping-outline"/>
                    </TouchableHighlight>
                </View>
            </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    con: {
        width: 165,
        marginTop: 10,
        marginBottom: 40,
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