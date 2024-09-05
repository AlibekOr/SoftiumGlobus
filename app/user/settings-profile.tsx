import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {FormInput} from "@/components/FormInput";
import {DataPickerInput} from "@/components/DataPicker";
import {RadioBtn} from "@/components/RadioBtn";
import {PhoneInputs} from "@/components/phone-input";
import {router} from "expo-router";
import {useEffect, useState} from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useAppSelector} from "@/store/hooks/hook";
import {useGetMe, usePutMe} from "@/components/user/query/user-query";

const SettingsProfile = () => {
    const usePutMutation = usePutMe()
    const authToken = useAppSelector(state => state.authToken);
    const {data} = useGetMe(authToken.access)
    const [signUpForm, setSignUpForm] = useState({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        phone: '',
        gender: ""
    })
    useEffect(() => {
        if (data !== undefined) {
            return setSignUpForm({
                first_name: data.data.user.first_name,
                last_name: data.data.user.last_name,
                date_of_birth: data.data.user.date_of_birth,
                phone: data.data.user.phone,
                gender: data.data.user.gender
            })
        }
    }, [data]);
    const onPress = async (value: any) => {
        const body = {
            first_name: value.first_name,
            last_name: value.last_name,
            date_of_birth: value.date_of_birth,
            phone: value.phone,
            gender: value.gender,
            id: data.data.user.id,
            token: authToken.access
        }
        try {
            await usePutMutation.mutateAsync(body).then(()=>alert('изменение успешное'))
        } catch (err: any) {
            console.log(err.message)
        }
    }
    const [requirement, setRequirement] = useState(false)
    return (
        <SafeAreaView>
            <View style={styles.con}>
                <View style={styles.headerBack}>
                    <Pressable onPress={() => router.back()}>
                        <AntDesign name="arrowleft" size={24} color="black"/>
                    </Pressable>
                    <Text style={styles.headerTitle}>Настройка профилъя</Text>
                </View>
                <View style={styles.block1}>
                    <FormInput placeholder={'Имя'} value={signUpForm.first_name}
                               handelChange={(i) => setSignUpForm({...signUpForm, first_name: i})}
                               requirement={requirement}
                               inputType={false}/>
                    <FormInput placeholder={'Фамилия'} value={signUpForm.last_name}
                               handelChange={(i) => setSignUpForm({...signUpForm, last_name: i})}
                               requirement={requirement}
                               inputType={false}/>
                    <DataPickerInput value={signUpForm.date_of_birth}
                                     handelChange={(i: any) => setSignUpForm({...signUpForm, date_of_birth: i})}/>
                    <RadioBtn value={signUpForm.gender}
                              handelChange={(i: any) => setSignUpForm({...signUpForm, gender: i})}/>
                    <FormInput placeholder={''} value={signUpForm.phone}
                               handelChange={(i) => setSignUpForm({...signUpForm, phone: i})}
                               requirement={requirement}
                               inputType={false}/>
                </View>

                <View style={{width: '100%'}}>
                    <Pressable style={styles.submit} onPress={() => onPress(signUpForm)}>
                        <Text style={styles.submitText}>Применить</Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    )
}
export default SettingsProfile
const styles = StyleSheet.create({
    con: {
        alignItems: 'flex-start',
        paddingLeft: '4%',
        paddingRight: '4%',
        height: '100%',
        flexDirection: 'column',
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
    },
    block1: {
        width: '100%',
        marginBottom: '30%',
        gap: 5
    },
    headerBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '5%',
        gap: 30,
        marginBottom: 50
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: 'rgba(0,0,0,0.62)'
    }
})