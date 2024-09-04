import {FlatList, Text, View} from "react-native";
import {useSearch} from "@/components/user/query/user-query";
import {CartProduct} from "@/components/CartProduct";
import {useAppSelector} from "@/store/hooks/hook";

export const SearchInput = ({data}: { data: any }) => {
    const authToken = useAppSelector(state => state.authToken);
    return (
        <View style={{marginTop: 5, marginBottom: '30%'}}>
            <FlatList
                data={data}
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