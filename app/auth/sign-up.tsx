import {SafeAreaView} from "react-native-safe-area-context";
import {Animated, Button, Pressable, StyleSheet, Text, View} from "react-native";
import ScrollView = Animated.ScrollView;
import {FormInput} from "@/components/FormInput";
import {useState} from "react";
import {DataPickerInput} from "@/components/DataPicker";
import {RadioBtn} from "@/components/RadioBtn";
import {PhoneInputs} from "@/components/phone-input";
import {router} from "expo-router";
import {useRegistrationMutation} from "@/store/auth/authSlice";

const SignUp = () => {
    const [registration] = useRegistrationMutation()
    const [signUpForm, setSignUpForm] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        password: '',
        phone: '',
        gender: ""

    })
    const onPress = async () => {
        if (signUpForm.phone.length > 0 && signUpForm.password.length > 0) {
            setRequirement(false)
            try {
                await registration(signUpForm).then((e) => {
                    router.replace(`auth/registration/${signUpForm.phone}`)
                })
            } catch (error) {
                console.log(error)
            }
        } else {
            setRequirement(true)
        }
    }
    const [requirement, setRequirement] = useState(false)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.con}>
                    <Text style={styles.title}>Создать новый аккаунт</Text>
                    <View style={styles.paragraph}>
                        <Text>Пожалуйста, заполните форму, чтобы продолжить</Text>
                    </View>
                    <FormInput placeholder={'Имя'} value={signUpForm.first_name}
                               handelChange={(i) => setSignUpForm({...signUpForm, first_name: i})}
                               requirement={requirement}
                               inputType={false}/>
                    <FormInput placeholder={'Фамилия'} value={signUpForm.last_name}
                               handelChange={(i) => setSignUpForm({...signUpForm, last_name: i})}
                               requirement={requirement}
                               inputType={false}/>
                    <DataPickerInput handelChange={(i: any) => setSignUpForm({...signUpForm, date_of_birth: i})}/>
                    <RadioBtn handelChange={(i: any) => setSignUpForm({...signUpForm, gender: i})}/>
                    <PhoneInputs
                        value={signUpForm.phone}
                        handelChangeText={(i: any) => {
                            setSignUpForm({...signUpForm, phone: `998${i}`});
                        }}
                        requirement={requirement}
                    />
                    <FormInput
                        requirement={requirement}
                        handelChange={(i: string) => setSignUpForm({...signUpForm, password: i})}
                        placeholder={'Пароль'}
                        inputType={true}
                        value={signUpForm.password}

                    />
                    <Pressable style={styles.submit} onPress={() => onPress()}>
                        <Text style={styles.submitText}>Зарегистрироватъся</Text>
                    </Pressable>
                    <Pressable onPress={() => router.push('auth/sign-in')}>
                        <Text>
                            У меня естъ аккаунт? <Text style={{color: 'red', fontWeight: '600'}}> Войти</Text>
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignUp

const styles = StyleSheet.create({
    con: {
        alignItems: 'center',
        marginTop: '12%',
        gap: 5,
        paddingLeft: '4%',
        paddingRight: '4%',
        marginBottom: 50
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        letterSpacing: 1,
        marginBottom: 8
    },
    paragraph: {
        width: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    submit: {
        backgroundColor: 'rgba(211,2,2,0.73)',
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginBottom: 5
    },
    submitText: {
        color: '#fff',
        fontSize: 16
    }
})