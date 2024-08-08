import {StyleSheet} from "react-native";

export const authStyle = StyleSheet.create({
    authForm: {
        width: "100%",
        height: '100%',
        alignItems: 'center',
        marginTop: '20%',
        gap: 65
    },
    title: {
        gap: 10
    },
    h1: {
        fontSize: 24,
        fontWeight: '700'
    },
    formInner: {
        gap: 30
    },
    inputs: {
        gap: 10
    },
    btnInners: {
        gap: 10
    },
    btnForget: {
        textAlign: 'right'
    },
    btnSubmit: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgb(201, 62, 75)',
        justifyContent: 'center',
        borderRadius: 30
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
})