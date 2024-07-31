import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";
import {AllCategory} from "@/components/category/ui/all-category";

const CategoryScreens = () => {
    return (
        <SafeAreaView>
            <AllCategory/>
        </SafeAreaView>
    )
}
export default CategoryScreens