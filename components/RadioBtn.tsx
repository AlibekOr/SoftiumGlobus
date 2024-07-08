import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import RadioForm from "react-native-simple-radio-button";

export const RadioBtn = ({handelChange}: any) => {
    const [value, setValue] = useState(0)
    const onPress = (value: any) => {
        setValue(value)
        if (value === 0) {
            handelChange('male')
        } else {
            handelChange('female')
        }
    }
    const items = [
        {label: 'Male', value: 0},
        {label: 'Female', value: 1}
    ]
    return (
        <View>
            <RadioForm style={styles.radioBtn} radio_props={items} initial={value} onPress={(value) => onPress(value)}/>
        </View>
    )
}
const styles = StyleSheet.create({
    radioBtn: {
        flexDirection: 'row',
        alignContent: 'center'
    }
})