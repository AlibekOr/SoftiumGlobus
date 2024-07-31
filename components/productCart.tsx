import {FlatList, StyleSheet, Text, View} from "react-native";
import {CartProduct} from "@/components/CartProduct";
import {useState} from "react";
import {useAppSelector} from "@/store/hooks/hook";
import {useGetAllProductsQuery} from "@/store/productSlice/productSlice";


export const ProductCart = () => {
    const {data, error, isLoading, isSuccess} = useGetAllProductsQuery('')
    const [nextData, setNextData] = useState(data.data.next)
    const arr: any = data.data.items
    const authToken = useAppSelector(state => state.authToken)
    return (
        <View style={style.productForm}>
            <FlatList onEndReached={async () => {

            }
            } data={arr} numColumns={2} renderItem={
                (item) => (
                    <>
                        <CartProduct token={authToken.access} id={item.item.id} images={item.item.image}
                                     name={item.item.name}
                                     price={item.item.price}
                                     amount={item.item.amount}/>

                    </>
                )
            }
            />

        </View>
    )
}
const style = StyleSheet.create({
    productForm: {
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 35,
        marginTop: 20
    },
})