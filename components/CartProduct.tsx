import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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
        <TouchableOpacity style={styles.con} onPress={() => router.push(`modal/${id}`)}>
            <Image alt={'Image'} style={styles.img}
                   source={{uri: 'data:image/jpeg;base64,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d23VVHmCP3WYH+H1lXiPqrjv+iJwr03yUn6ug1exNPZxelCepA3W+q4M4KbGWny2lSyamHJ81Ycd2n7O9x95WCaPxDOSh9/I+fSV9PenJ6L/ADIW/wAP/B9dI9KfZnZmi9BZVew/aBRd5T5HBmvLvZMVum9Ibtfh2LPTqx3lV27sOnTr4rmew/CgUD+sTk4E2a21kzW7UiI+rTuaePXr3vMz7QvdnuyodO8vDAH4EB3TjzbqPaatviE1t04v/bfpcLravXljz7Ol0mwtNXgpSmRyLDeb6tkydk2ct/mtKti08GP5aw0Gt8e16gPwBQfTCM3+ITux+nRtM+8puX1cRrEe0fw6xuclLbyAgeY456+fWB7A8ED2AgeMoPMA+8D2AgICAgICAgICAgICAgICAgIGLCBWtWBQ7zcsR+gOG9jwP+fygara29pNaNSATVbnex6/GPfgGHnK2Dls6/4X/lHhC2eeptfjR8tvP3/l1uk1SWIHRgynkR+h8j6SXelqTystY8lcleqs84Z3sgU75UJg72/jdx1zmeV58/T5e3msR6vD53q70p1O9orGOeiqSuf2R+2Plw859BjpOXDy2I/d8vlvXDn56s/f8p+zbUPcbdTbm7OVFvBCfMtyz5Dhj9NW5GSmOK4Y9P6NujOG+Wb559X6voAI5iQ30kTE+FLau066ELueP4VHxMfICbcOG2W3TVo2NimCnVZoOx+md7LdbYOLkhPmfER6cAo9jO7evWla4K+3lO4bjtkvbYv7+HUSYskBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBA8gRWCBrNZXmBlQ6PX3F6hk5Any6Z8j5GZUvaluqs8pYZMdclem0c4a2zsgVJbT6lkB885/tKRn6SlHEYtHLJSJSLcJms88V5j9Hi9j3Y5v1LMB5Ak/JmJx9IniNax+XSII4Te8/m5JlttJpNPph90mX6seLH3Y/oJw5tjJln1So4NTFgj0Qi1uydNqOLDu7DzZcKx9+jfrM8O3lxfLPZr2NDDm72jlP1hrf/qNycKtUVXy8S/3W4zr/AKhjt3vj5z9/o4f6Xlr2x5JiPv8AVNo+x672/fa1p8uIB92JJP5THJxGeXTjr0tmLhVerqy2mzpFUABVACjgABgADoBJszznnKtEREcoew9ICAgICAgICAgICAgICAgICAgICAgICAgICAgRsIFW6uBEtMCxVViBK1cCJqYGPcwJq0xAmED2AgICAgICAgICAgICAgICAgICAgICAgICAgICAgeEQMGSAFcDMCAgMQPN2B6BA9gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH//Z'}}/>
            <Text style={styles.title}>{name} </Text>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.priceStyle}>{price} сум</Text>
            </View>
            <View style={styles.cartBtn}>
                <TouchableOpacity style={styles.touchable} onPress={() => submit(props)}>
                    <MaterialCommunityIcons style={styles.btn} name="shopping-outline"/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
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