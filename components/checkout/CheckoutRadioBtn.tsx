import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from "react";

const RadioButton = ({selected, onPress, children, disable}: any) => (
    <TouchableOpacity disabled={disable} style={styles.radioButton} onPress={onPress}>
        <View style={[styles.radio, selected && styles.radioSelected]}>
            {selected && <View style={styles.radioInner}/>}
        </View>
        <View style={styles.radioContent}>
            {children}
        </View>
    </TouchableOpacity>
);

export const CheckoutRadioBtn = () => {
    const [selectedOption, setSelectedOption] = React.useState(1);
    return (
        <View style={styles.container}>
            <RadioButton
                selected={selectedOption === 1}
                onPress={() => setSelectedOption(1)}
                disable={false}
            >
                <Text style={styles.optionText}>Пункт выдачи Globus Nukus №1</Text>
            </RadioButton>

            <RadioButton
                selected={selectedOption === 2}
                onPress={() => setSelectedOption(2)}
                disable={false}
            >
                <Text style={styles.optionText}>Курьером до двери</Text>
                <Text style={styles.subText}>Минимальная сумма 200000.0 сум</Text>
            </RadioButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#f0f0f0',
        marginTop: 10
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(122,119,119,0.16)',
        borderRadius: 12,
        padding: 16,
        marginBottom: 8,
        height: 70,

    },
    radio: {
        height: 20,
        width: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'rgba(5,5,5,0.86)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioSelected: {
        borderColor: '#FF3B30',
    },
    radioInner: {
        height: 10,
        width: 10,
        borderRadius: 6,
        backgroundColor: '#FF3B30',
    },
    radioContent: {
        flex: 1,
    },
    optionText: {
        fontSize: 16,
        fontWeight: '500',
    },
    subText: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
})