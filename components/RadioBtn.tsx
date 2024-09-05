import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";

export const RadioBtn = ({handelChange, value}: any) => {
    const [valueRadio, setValueRadio] = useState()
    const onPress = (value: any) => {
        setValueRadio(value)
        if (value === 0) {
            handelChange('male')
        } else {
            handelChange('female')
        }
    }
    useEffect(() => {
        if (value === 'male') {
            return setValueRadio(0)
        } else {
            return setValueRadio(1)
        }
    }, [value]);
    const items = [
        {label: 'Мужской', value: 0},
        {label: 'Женский', value: 1}
    ]
    return (
        <View>
            <RadioForm
                formHorizontal={true}
                animation={true}
                style={styles.radioBtn}
            >
                {/* To create radio buttons, loop through your array of options */}
                {items.map((obj, i) => (
                    <RadioButton labelHorizontal={true} key={i}>
                        {/* You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                            obj={obj}
                            index={i}
                            isSelected={valueRadio === i}
                            onPress={() => onPress(obj.value, i)}
                            borderWidth={1}
                            buttonInnerColor={'#e74c3c'}
                            buttonOuterColor={valueRadio === i ? '#e74c3c' : 'rgba(255,1,1,0.75)'}
                            buttonSize={27}
                            buttonOuterSize={27}
                            buttonStyle={{}}
                            buttonWrapStyle={{marginLeft: 20}}
                        />
                        <RadioButtonLabel
                            obj={obj}
                            index={i}
                            labelHorizontal={true}
                            onPress={() => onPress(obj.value, i)}
                            labelStyle={{fontSize: 20, color: 'black'}}
                            labelWrapStyle={{}}
                        />
                    </RadioButton>
                ))}
            </RadioForm>
        </View>
    )
}
const styles = StyleSheet.create({
    radioBtn: {
        marginTop: 15,
        marginBottom: 15
    }
})