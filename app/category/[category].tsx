import {Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {useGetAllProductsQuery} from "@/store/productSlice/productSlice";
import {ProductCart} from "@/components/productCart";

const Category = () => {
    const {data, error, isLoading, isSuccess} = useGetAllProductsQuery('')
    const {category} = useLocalSearchParams()
    return (
        <SafeAreaView>
            <ProductCart cate={category}/>
        </SafeAreaView>
    )
}
export default Category