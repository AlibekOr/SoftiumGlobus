import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import DatePicker from 'react-native-modern-datepicker'


export const DataPickerInput = ({handelChange, value}: any) => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState('Выберите Дату Рождения')
    const handleOnPress = () => {
        setOpen(!open)
    }
    useEffect(() => {
        setDate(value)
    }, [value]);
    const handleChange = (propDate: any) => {
        setDate(propDate)
    }
    const onPress = () => {
        handelChange(date.replaceAll('/', '-'))
        setOpen(!open)
    }
    return (
        <View style={{width: '100%'}}>
            <TouchableOpacity style={styles.dateCon} onPress={handleOnPress}>
                <Text style={styles.btnText}>{date}</Text>
            </TouchableOpacity>
            <Modal
                animationType={'slide'}
                transparent={true}
                visible={open}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <DatePicker
                            options={{}}
                            mode={'calendar'}
                            selected={date}
                            onDateChange={handleChange}
                        />
                        <View style={styles.datePickerBtn}>
                            <TouchableOpacity onPress={handleOnPress}>
                                <Text style={styles.btn}>Отмена</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPress}>
                                <Text style={styles.btn}>ОК</Text>
                            </TouchableOpacity>
                        </View>
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
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 0.25,
        elevation: 5
    },
    dateCon: {
        width: '100%',
        borderRadius: 20,
        backgroundColor: 'rgb(227, 225, 225)',
        height: 70,
        paddingLeft: 25,
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 18,
        color: 'rgba(54,54,54,0.64)'
    },
    datePickerBtn: {
        width: '100%',
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'flex-end',
        marginRight: '20%'
    },
    btn: {
        fontSize: 16,
        color: 'red',
        fontWeight: '600'
    }
})