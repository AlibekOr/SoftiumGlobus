import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {OrderBody} from "@/components/order/orderBody";

export const OrderBtn = ({orderData}: any) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleDropdown} style={styles.button}>
                <View>
                    <Text
                        style={orderData.status === 'Возврат' ? styles.txtReject : orderData.status === 'Ожидает подтверждения' ? styles.txtProgress : styles.txtReject}>{orderData.status}</Text>
                    <Text style={styles.buttonText}>Заказ №{orderData.order_number}</Text>
                </View>
                <View>
                    {isDropdownVisible === true ?
                        <AntDesign name="up" size={16} color="black"/> :
                        <AntDesign name="down" size={16} color="black"/>
                    }
                </View>
            </Pressable>

            {isDropdownVisible && (
                <View style={styles.dropdown}>
                    <OrderBody orderData={orderData}/>
                </View>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(9,9,9,0.08)'
    },
    button: {
        padding: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    buttonText: {
        color: 'black',
        textAlign: 'left',
    },
    dropdown: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
    txtSuccess: {
        color: '#fff',
        backgroundColor: 'rgba(77,182,58,0.83)',
        padding: 2,
        borderRadius: 16,
        paddingLeft: 8,
        paddingRight: 8,
        fontWeight: '600',
        textAlign: 'center'
    },
    txtProgress: {
        color: '#fff',
        backgroundColor: 'rgba(177,182,36,0.83)',
        padding: 2,
        borderRadius: 16,
        paddingLeft: 8,
        paddingRight: 8,
        fontWeight: '600',
        textAlign: 'center'
    },
    txtReject: {
        color: '#fff',
        backgroundColor: 'rgba(175,30,30,0.87)',
        padding: 2,
        borderRadius: 16,
        paddingLeft: 8,
        paddingRight: 8,
        fontWeight: '600',
        textAlign: 'center'
    }
});