import {Pressable, StyleSheet, Text, View} from "react-native";
import {Fontisto, Octicons} from "@expo/vector-icons";
import {router} from "expo-router";

export const SearchBtn = () => {
    return (
        <Pressable onPress={() => router.push('search')} style={styles.btn}>
            <Fontisto name="search" size={18} color="#e05656"/>
            <Text>Искать товаров и категории</Text>
            <Octicons name="x-circle-fill" size={24} color="#e05656"/>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    btn: {
        width: '90%',
        backgroundColor: 'rgba(0,0,0,0.07)',
        marginLeft: '5%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15,
        paddingLeft: 15,
        borderRadius: 12,
        marginBottom: 5
    }
})