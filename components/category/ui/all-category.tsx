import {FlatList, Text, View} from "react-native";
import {useGetCategory} from "@/components/category/query/category-query";
import {CategoryCart} from "@/components/category/ui/category-cart";

export const AllCategory = () => {
    const {data} = useGetCategory()
    if (data !== undefined) {
        data.data.categories.sort((a: any, b: any) => {
            const nameA = a.name.toUpperCase()
            const nameB = b.name.toUpperCase()
            if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }
            return 0
        })
    }
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