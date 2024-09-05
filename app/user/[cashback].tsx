import {StyleSheet, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const Cashback = () => {
    const {cashback} = useLocalSearchParams()
    return (
        <SafeAreaView>
            <View style={styles.cashCon}>
                <AntDesign name="arrowleft" size={24} color="#fff"/>
                <View style={styles.cashView}>
                    <Text style={{color: '#fff',}}>Кешбэк</Text>
                    <View style={styles.title}>
                        <Text style={{color: '#fff'}}>остаток баллов</Text>
                        <Text style={{color: '#fff', fontSize: 18}}>{cashback}.00</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Cashback
const styles = StyleSheet.create({
    cashCon: {
        height: '50%',
        backgroundColor: '#ef3636',
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        paddingLeft: '5%',
        paddingTop: 10
    },
    cashView: {
        width: '100%',
        alignItems: 'center',
        marginTop: '5%',
        gap: 20
    },
    title: {
        alignItems: 'center',
    }
})