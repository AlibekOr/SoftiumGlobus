import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import {router} from "expo-router";
import {useAppSelector} from "@/store/hooks/hook";

const ReklamaLayout = () => {
    const authToken = useAppSelector(state => state.authToken)
    if (authToken.access !== '') {
        return router.replace('home')
    }
    return (
        <SafeAreaView>
            <View style={styles.con}>
                <View>
                    <Image

                        source={require('../assets/images/1dsa.png')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.title}>
                    <Text style={styles.titleCom}> Globus Nukus №1</Text>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.paragraph}> Добро пожаловать </Text>
                        <TouchableOpacity style={styles.btn} onPress={() => router.replace('auth')}>
                            <Text style={styles.btnText}>Начать</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
};

export default ReklamaLayout;
const styles = StyleSheet.create({
    con: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '30%'
    },
    image: {
        borderRadius: 16,
        width: 300,
        height: 300,
    },
    title: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        gap: 30,
        marginBottom: '70%',
        paddingTop: '20%',

    },
    titleCom: {
        fontSize: 28,
    },
    paragraph: {
        fontSize: 16
    },
    btn: {
        backgroundColor: 'red',
        width: 300,
        padding: 20,
        alignItems: 'center',
        marginTop: 8,
        borderRadius: 16
    },
    btnText: {
        fontSize: 18,
        color:"#fff",

    }
})