import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, FlatList, Button} from "react-native";
import {useGetAllProductsQuery} from "@/store/productSlice/productSlice";
import {ProductCart} from "@/components/productCart";

const HomeScreens = () => {
    const {data, error, isLoading, isSuccess} = useGetAllProductsQuery('')

    return (
        <SafeAreaView>
            <View>
                <Text>hello tabs</Text>
            </View>
            <View>
                {isSuccess && <ProductCart allProducts={data.data}/>}
            </View>
        </SafeAreaView>
    )
}
export default HomeScreens