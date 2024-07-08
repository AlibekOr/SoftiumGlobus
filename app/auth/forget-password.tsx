import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import IconAnt from '@expo/vector-icons/AntDesign';
import {Fontisto} from '@expo/vector-icons';
import {PhoneInputs} from "@/components/phone-input";
import {useState} from "react";
import {router} from "expo-router";
import {FormInput} from "@/components/FormInput";
import {usePasswordChangeMutation} from "@/store/auth/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ForgetPassword = () => {
    const [changeValues, setChangeValues] = useState({
        phone: '',
        password: '',
        password2: ''
    })
    const [passwordChange] = usePasswordChangeMutation()
    const [requirement, setRequirement] = useState(false)
    const onPress = async () => {
        if (changeValues.password.length > 0 && changeValues.password2.length > 0 && changeValues.phone.length > 0 && changeValues.password === changeValues.password2) {
            setRequirement(false)
            try {
                await passwordChange(changeValues)
                    .then(() => {
                        router.replace(`auth/changePassword/${changeValues.phone}`)
                    })
            } catch (err) {
                console.log(err)
            }
        } else {
            setRequirement(true)
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.forgetPass}>
                <View>
                    <TouchableOpacity style={styles.forgetTitle} onPress={() => router.replace('auth')}>
                        <IconAnt name={'arrowleft'} color={'black'} size={24}/>
                        <Text style={styles.title}>Изменение пароля</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconLock}>
                    <Fontisto name="locked" size={100} color="black"/>
                </View>
                <View style={styles.forgetPara}>
                    <Text style={styles.forgetH1}>
                        Забыли парол?
                    </Text>
                </View>
                <View style={styles.forgetInfo}>
                    <Text>
                        Введите свой номер телефона и новый пароль ниже, чтобы сбросить парол
                    </Text>
                </View>
                <View>
                    <PhoneInputs
                        value={changeValues.phone}
                        handelChangeText={(i: any) => {
                            setChangeValues({...changeValues, phone: `998${i}`});
                        }}
                        requirement={requirement}
                    />
                    <FormInput placeholder={'Новый пароль'} value={changeValues.password}
                               handelChange={(i) => setChangeValues({...changeValues, password: i})}
                               requirement={requirement} inputType={true}/>
                    <FormInput placeholder={'Подтвердите пароль'} value={changeValues.password2}
                               handelChange={(i) => setChangeValues({...changeValues, password2: i})}
                               requirement={requirement} inputType={true}/>
                </View>
                <View>
                    <TouchableOpacity onPress={onPress} style={styles.forgetBtn}>
                        <Text style={styles.btnText}> Сброс пароля </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default ForgetPassword
const styles = StyleSheet.create({
    forgetPass: {
        width: '100%',
        height: '100%',
        gap: 10,
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    forgetTitle: {
        flexDirection: 'row',
        alignItems: "center",
        gap: 20,
        marginLeft: '3%'
    },
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    iconLock: {
        alignItems: 'center',
        marginTop: 20,
    },
    forgetPara: {
        alignItems: 'center'
    },
    forgetH1: {
        fontSize: 24,
        fontWeight: '600'
    },
    forgetInfo: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgetBtn: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgb(201, 62, 75)',
        justifyContent: 'center',
        borderRadius: 30,
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 18
    }
})