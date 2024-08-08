import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import DatePicker from 'react-native-modern-datepicker'


export const DataPickerInput = ({handelChange}: any) => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState('Выберите Дату Рождения')
    const handleOnPress = () => {
        setOpen(!open)
    }
    const handleChange = (propDate: any) => {
        setDate(propDate)
    }
    const onPress = () => {
        handelChange(date)
        setOpen(!open)
    }
    return (
        <View>
            <TouchableOpacity onPress={handleOnPress}>
                <Text>{date}</Text>
            </TouchableOpacity>
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={open}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker
                            mode={'calendar'}
                            selected={date}
                            onDateChange={handleChange}
                        />
                        <TouchableOpacity onPress={onPress}>
                            <Text>add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleOnPress}>
                            <Text>close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 0.25,
        elevation: 5
    }
})