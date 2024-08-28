import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, FlatList, Button} from "react-native";
import {useGetAllProductsQuery} from "@/store/productSlice/productSlice";
import {ProductCart} from "@/components/productCart";
import MyCarousel from "@/components/slider/SnapCarousel";
import {SearchBtn} from "@/components/SearchBtn";

const HomeScreens = () => {
    const {isSuccess} = useGetAllProductsQuery('')

    return (
        <SafeAreaView>
            <View>
                <SearchBtn/>
            </View>
            <View>
                <FlatList data={[1, 2]} renderItem={({item}) => {
                    return <View>
                        {item === 1 && <View>
                            <MyCarousel/>
                        </View>}
                        {item === 2 && <View>
                            {isSuccess && <ProductCart/>}
                        </View>}
                    </View>
                }}/>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreens