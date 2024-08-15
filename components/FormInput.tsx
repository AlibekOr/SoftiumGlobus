import {StyleSheet, Text, TextInput} from "react-native";
import {useState} from "react";

interface IFormInput {
    placeholder: string,
    value: string,
    handelChange: (i: string) => unknown,
    requirement: boolean,
    inputType: boolean
}

export const FormInput = (props: IFormInput) => {
    const {placeholder, value, handelChange, requirement, inputType} = props
    return (
        <>
            <TextInput
                secureTextEntry={inputType}
                placeholder={placeholder}
                value={value}
                onChangeText={handelChange}
                style={style.inputStyle}
            />
            <Text style={requirement === false ? style.textReq : style.visible}>Поле обязателное</Text>
        </>
    )
}
const style = StyleSheet.create({
    inputStyle: {
        borderRadius: 20,
        backgroundColor: 'rgb(227, 225, 225)',
        width: '100%',
        height: 70,
        paddingLeft: 25,
        fontSize: 18
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