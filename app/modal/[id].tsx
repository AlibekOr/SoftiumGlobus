import {FlatList, StyleSheet, Text, TouchableOpacity, View, Dimensions} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {useGetOneProductQuery} from "@/store/productSlice/productSlice";
import {ModalImg} from "@/app/modal/ModalImg";
import {useAppSelector} from "@/store/hooks/hook";
import {useAddToCart, useInterests} from "@/components/cart/query/cart-query";

const ModalScreen = () => {
    const {id} = useLocalSearchParams()
    const {data, isSuccess, isLoading} = useGetOneProductQuery(id)
    const token = useAppSelector(state => state.authToken);
    const addToCart = useAddToCart()
    const interests = useInterests()
    const submit = async (props: number) => {
        const body = {
            product: props,
            quantity: 1,
            token: token.access
        }
        try {
            await addToCart.mutateAsync(body)
            await interests.mutateAsync({product: body.product, token: body.token})
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            {isLoading === true && <View><Text>Loading...</Text></View>}
            {isSuccess === true &&
                <SafeAreaView style={styles.modalCon}>
                    <FlatList data={[1]} renderItem={() => (
                        <View style={{marginBottom: '10%'}}>
                            <FlatList data={data.data.items.images}
                                      horizontal={true}
                                      showsHorizontalScrollIndicator={false}
                                      pagingEnabled
                                      numColumns={1}
                                      renderItem={({item, index}) => (
                                          <ModalImg image={item}/>
                                      )}

                            />
                            <View style={{paddingLeft: 20, paddingRight: 5, paddingTop: 10,}}>
                                <Text>{data.data.items.name}</Text>
                                <Text style={{fontSize: 24}}>{data.data.items.price} сум</Text>
                                <Text style={{fontWeight: '600', letterSpacing: 1}}>Описание</Text>
                                <Text style={{fontSize: 13}}>{data.data.items.description}</Text>
                            </View>
                        </View>
                    )}/>
                    <View style={styles.bottomView}>
                        <View style={styles.btnView}>
                            <View>
                                <Text style={{fontSize: 26}}>{data.data.items.price}</Text>
                            </View>
                            <TouchableOpacity style={styles.addToCart} onPress={() => submit(data.data.items.id)}>
                                <Text style={styles.buttonBTn}>В корзину</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>}
        </>
    )
}
export default ModalScreen
const styles = StyleSheet.create({
    modalCon: {
        position: 'relative',
        height: '100%',
    },
    buttonBTn: {
        color: '#fff',

    },
    bottomView: {
        width: '100%',
        height: 70,
        paddingTop: 15,
        alignContent: 'center',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.16)'
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '7%',
        paddingLeft: '10%',
    },
    addToCart: {
        backgroundColor: 'rgba(211,26,26,0.82)',
        width: 130,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    }
})