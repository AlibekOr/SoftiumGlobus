import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {CategoryList} from "@/components/category/ui/category-list";
import {useGetSingleData} from "@/components/category/query/category-query";
import {useState} from "react";

const Category = () => {
    const [product, setProduct] = useState([])
    const {category} = useLocalSearchParams()
    const {data, isSuccess} = useGetSingleData(category)
    return (
        <SafeAreaView>
            {isSuccess &&
                <CategoryList categoryData={data.data.items} category={category}/>
            }
        </SafeAreaView>
    )
}
export default Category