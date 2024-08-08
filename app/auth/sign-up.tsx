import {SafeAreaView} from "react-native-safe-area-context";
import {Animated, StyleSheet, Text, View} from "react-native";
import ScrollView = Animated.ScrollView;
import {FormInput} from "@/components/FormInput";
import {useState} from "react";
import {DataPickerInput} from "@/components/DataPicker";
import {RadioBtn} from "@/components/RadioBtn";
import {PhoneInputs} from "@/components/phone-input";

const SignUp = () => {
    const [signUpForm, setSignUpForm] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        password: '',
        phone: '',
        gender: ""

    })
    const [requirement, setRequirement] = useState(false)
    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Создать новый аккаунт</Text>
                <Text>Пожалуйста, заполните форму, чтобы продолжить</Text>
                <FormInput placeholder={'Имя'} value={signUpForm.first_name}
                           handelChange={(i) => setSignUpForm({...signUpForm, first_name: i})} requirement={requirement}
                           inputType={false}/>
                <FormInput placeholder={'Фамилия'} value={signUpForm.last_name}
                           handelChange={(i) => setSignUpForm({...signUpForm, last_name: i})} requirement={requirement}
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
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignUp

const styles=StyleSheet.create({

})