import {FlatList, Text, View} from "react-native";
import {useGetCategory} from "@/components/category/query/category-query";
import {CategoryCart} from "@/components/category/ui/category-cart";

export const AllCategory = () => {
    const {data} = useGetCategory()
    return (
        <View>
            {
                data === undefined
                    ?
                    <Text>Loading...</Text>
                    :
                    <FlatList
                        data={data.data.categories}
                        renderItem={({item}) =>
                            <CategoryCart id={item.id} name={item.name}
                                          parent_category={item.parent_category}
                                          max_price={item.max_price}
                                          min_price={item.min_price}/>}/>
            }
        </View>
    )
}