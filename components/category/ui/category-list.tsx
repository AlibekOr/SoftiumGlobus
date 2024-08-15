import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CartProduct} from "@/components/CartProduct";
import {useAppSelector} from "@/store/hooks/hook";
import {router} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import {useGetCategoryID} from "@/components/category/query/category-query";

export const CategoryList = ({categoryData, category}: any) => {
    const {data, isSuccess} = useGetCategoryID({categoryID: category})
    const authToken = useAppSelector(state => state.authToken);
    return (
        <View>
            <View style={styles.titleView}>
                <TouchableOpacity onPress={() => router.push('(tabs)/category')}>
                    <AntDesign name="arrowleft" size={26} color="black"/>
                </TouchableOpacity>
                <View>
                    {isSuccess && <Text style={styles.titleText}>{data.data.categories.name}</Text>}
                </View>
            </View>
            <FlatList
                data={categoryData}
                numColumns={2}
                renderItem={({item}: any) => (
                    <CartProduct
                        token={authToken.access}
                        id={item.id}
                        images={item.images}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                    />
                )}
                // onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    titleView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        padding: 15,
        gap: 30,
    },
    titleText: {
        fontSize: 20,
        fontWeight: '700'
    }
})