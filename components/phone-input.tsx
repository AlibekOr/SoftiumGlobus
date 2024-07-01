import {View} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import {useState} from "react";

interface IProps {
    handelChangeText: (i: string) => unknown,
    value: string
}

export const PhoneInputs = (props: IProps) => {
    const {handelChangeText, value} = props

    return (
        <View>
            <PhoneInput
                placeholder={'Номер телефона'}
                defaultValue={value}
                defaultCode="UZ"
                layout="first"
                onChangeText={handelChangeText}
                autoFocus
            />
        </View>
    )
}