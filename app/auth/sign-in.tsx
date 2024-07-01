import {SafeAreaView} from "react-native-safe-area-context";
import {Text, TouchableOpacity, View,} from "react-native";
import {useState} from "react";
import {useLoginMutation} from "@/store/auth/authSlice";
import {PhoneInputs} from "@/components/phone-input";
import {FormInput} from "@/components/FormInput";

const SignIn = () => {
    const [loginMutation, {
        data, isSuccess, isError
    }] = useLoginMutation()
    const [tokens, setTokens] = useState()
    const [formVal, setFormVal] = useState({
        phone: '',
        password: ''
    })
    const onSubmit = async () => {
        await loginMutation(formVal)
        setTokens(data)

    }
    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text> Добро пожаловать!</Text>
                    <Text>Пожалуйста, войдите в ваш аккаунт</Text>
                </View>
                <View>
                    <PhoneInputs
                        value={formVal.phone}
                        handelChangeText={(i: any) => {
                            setFormVal({...formVal, phone: `998${i}`});
                        }}
                    />
                    <FormInput
                        handelChange={(i: string) => setFormVal({...formVal, password: i})}
                        placeholder={'Пароль'}
                        value={formVal.password}
                        textType={true}

                    />
                </View>
                <View>
                    <Text>Забыли парол?</Text>
                    <TouchableOpacity
                        onPress={() => onSubmit()}
                    >
                        <Text>Войти</Text>
                    </TouchableOpacity>
                    <Text>
                        У вас нет учетной записи? <Text>Зарегистрироваться</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default SignIn

