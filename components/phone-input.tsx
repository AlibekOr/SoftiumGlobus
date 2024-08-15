import {View, StyleSheet, Text} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {useState} from "react";

interface IProps {
    handelChangeText: (i: string) => unknown,
    value: string,
    requirement: boolean
}

export const PhoneInputs = (props: IProps) => {
    const {handelChangeText, value, requirement} = props

    return (
        <View>
            <PhoneInput
                containerStyle={style.phoneInput}
                textContainerStyle={style.phoneInput}
                placeholder={'Номер телефона'}
                defaultValue={value}
                defaultCode="UZ"
                layout="first"
                onChangeText={handelChangeText}
            />
            <Text style={requirement === false ? style.textReq : style.visible}>Поле обязателное</Text>

        </View>
    )
}
const style = StyleSheet.create({
    phoneInput: {
        borderRadius: 20,
        backgroundColor: 'rgb(227, 225, 225)',
        width: '100%',
        height: 70,
        paddingLeft: 10
    },
    textReq: {
        fontSize: 14,
        color: 'red',
        fontWeight: '500',
        paddingLeft: 25,
        opacity: 0,
        overflow: 'hidden',

    },
    visible: {
        fontSize: 14,
        color: 'red',
        fontWeight: '500',
        paddingLeft: 25,
        opacity: 1,
        overflow: 'visible'
    }
})