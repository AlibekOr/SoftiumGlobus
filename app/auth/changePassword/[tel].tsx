import {router, useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {Image, StyleSheet, Text, TextInput, TextInputKeyPressEventData, TouchableOpacity, View} from "react-native";
import {OtpInput} from "react-native-otp-entry";
import {useState} from "react";
import {usePasswordChangeVerifyMutation} from "@/store/auth/authSlice";
 const VerifyPassword = () => {
    const {tel} = useLocalSearchParams()
    const [outVal, setOutVal] = useState('')
    const [changeVerify] = usePasswordChangeVerifyMutation()
    const onPress = async () => {
        const body: any = {
            phone: tel,
            otp: outVal
        }
        await changeVerify(body).then((e) => {
            if (e.data.success === true) {
                alert('Смена пароля')
                router.replace('auth')
            }
        })
    }
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image style={styles.image}
                           source={{uri: 'data:image/png;base64,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'}}/>
                </View>
                <View>
                    <View style={styles.verifyTitle}>
                        <Text style={styles.verifyText}>Мы отправили код для проверки на номера</Text>
                        <Text>{tel}</Text>
                        <OtpInput
                            numberOfDigits={6}
                            onTextChange={(verifyCode) => setOutVal(verifyCode)}
                            focusStickBlinkingDuration={400}
                            focusColor={'rgb(201, 62, 75)'}
                        />
                    </View>
                    {/*<TouchableOpacity>*/}
                    {/*    <Text>Повторно отправить</Text>*/}
                    {/*</TouchableOpacity>*/}
                    <View style={styles.verifyCodeBtn}>
                        <TouchableOpacity onPress={() => onPress()} style={styles.verifyBTN}>
                            <Text style={{color: '#fff'}}>Подтверждать</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default VerifyPassword

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
    imageView: {
        alignItems: 'center',
        marginBottom: '25%'
    },
    container: {
        marginTop: '20%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    verifyCodeBtn: {
        marginTop: '20%',
        alignItems: 'center'
    },
    verifyBTN: {
        backgroundColor: 'rgb(201, 62, 75)',
        width: '90%',
        height: 65,
        borderRadius: 17,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verifyTitle: {
        gap: 10,
    },
    verifyText: {
        fontSize: 15
    }
})