import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {useEffect, useState} from "react";
import {useLoginMutation} from "@/store/auth/authSlice";
import {PhoneInputs} from "@/components/phone-input";
import {FormInput} from "@/components/FormInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {authStyle} from "@/app/auth/style/style";
import {router} from "expo-router";
import {useAppDispatch} from "@/store/hooks/hook";
import {fetchAllCart} from "@/store/cartSlice/cartSlice";
import {accessToken} from "@/store/auth/authToken";

const SignIn = () => {
    const dispatch = useAppDispatch()
    const [loginMutation] = useLoginMutation()
    const [requirement, setRequirement] = useState(false)
    const [formVal, setFormVal] = useState({
        phone: '',
        password: ''
    })
    const onSubmit = async () => {
        if (formVal.phone.length > 0 && formVal.password.length > 0) {
            setRequirement(false)
            try {
                await loginMutation(formVal).then((e) => {
                    if (e.data) {
                        try {
                            dispatch(accessToken(e.data.data.token))
                            router.replace('/home')
                            AsyncStorage.setItem('access', e.data.data.token.access)
                            AsyncStorage.setItem('refresh', e.data.data.token.refresh)
                        } catch (err) {
                            console.log(err)
                        }
                    } else {
                        alert('login yamasa parol qate!')
                    }
                })
            } catch (err: any) {
                alert(err.message)
            }
        } else {
            setRequirement(true)
        }
    }

    return (
        <SafeAreaView>
            <View style={authStyle.authForm}>
                <View style={authStyle.title}>
                    <Text style={authStyle.h1}> Добро пожаловать!</Text>
                    <Text>Пожалуйста, войдите в ваш аккаунт</Text>
                </View>
                <View style={authStyle.formInner}>
                    <View style={authStyle.inputs}>
                        <PhoneInputs
                            value={formVal.phone}
                            handelChangeText={(i: any) => {
                                setFormVal({...formVal, phone: `998${i}`});
                            }}
                            requirement={requirement}
                        />
                        <FormInput
                            requirement={requirement}
                            handelChange={(i: string) => setFormVal({...formVal, password: i})}
                            placeholder={'Пароль'}
                            inputType={true}
                            value={formVal.password}

                        />
                    </View>
                    <View style={authStyle.btnInners}>
                        <TouchableOpacity onPress={() => router.push('auth/forget-password')}>
                            <Text style={authStyle.btnForget}>Забыли парол?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => onSubmit()}
                            style={authStyle.btnSubmit}
                        >
                            <Text style={authStyle.btnText}>Войти</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.push('auth/sign-up')}>
                            <Text>
                                У вас нет учетной записи? <Text
                                style={{color: 'rgb(176, 5, 20)', fontWeight: '600'}}>Зарегистрироваться</Text>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SignIn