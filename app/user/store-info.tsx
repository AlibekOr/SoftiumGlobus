import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import {router} from "expo-router";

const StoreInfo = () => {
    return (
        <SafeAreaView style={styles.con}>
            <View style={styles.block1}>
                <View style={styles.headerBack}>
                    <Pressable onPress={() => router.back()}>
                        <AntDesign name="arrowleft" size={24} color="black"/>
                    </Pressable>
                    <Text style={styles.headerTitle}>О магазине подробно</Text>
                </View>
                <View style={styles.image}>
                    <Image style={styles.img} source={require('../../assets/images/1dsa.png')}/>
                </View>
            </View>
            <View style={styles.block2}>
                <View style={styles.txt}>
                    <Text style={styles.txt1}>Магазин:</Text>
                    <Text style={styles.txt1}>Globus Nukus №1</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txt1}>Адрес:</Text>
                    <Text style={styles.txt1}>Город Нукус ул:Кият (Чехов) № 1</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txt1}>Телефон:</Text>
                    <Text style={styles.txt1}>+998-90-654-22-21</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default StoreInfo
const styles = StyleSheet.create({
    con: {
        flex: 1,
        justifyContent: 'space-between',
    },
    block1: {},
    block2: {
        backgroundColor: '#ef3d3d',
        borderTopLeftRadius: 100,
        height: '63%',
        justifyContent: 'center',
        gap: 5
    },
    txt: {
        flexDirection: 'row',
        paddingLeft: '3%',
        paddingRight: '3%',
        justifyContent: 'space-between'
    },
    txt1: {
        color: '#fff',
        fontWeight: '600'
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
        gap: 30
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color:'rgba(0,0,0,0.62)'
    },
    image: {
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 20,
        marginTop: 15
    }
})