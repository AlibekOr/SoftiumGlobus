import {TextInput} from "react-native";

interface IFormInput {
    placeholder: string,
    value: string,
    textType: boolean | undefined,
    handelChange: (i: string) => unknown,

}

export const FormInput = (props: IFormInput) => {
    const {placeholder, value, textType, handelChange} = props
    return (
        <TextInput
            secureTextEntry={textType}
            placeholder={placeholder}
            value={value}
            onChangeText={handelChange}
        />
    )
}
