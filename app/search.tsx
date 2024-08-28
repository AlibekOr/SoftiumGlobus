import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Fontisto, Octicons} from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import {router} from "expo-router";
import {useEffect, useState} from "react";
import {useSearch} from "@/components/user/query/user-query";
import {SearchInput} from "@/components/SearchInput";

const Search = () => {
    const [inputValue, setInputValue] = useState('')
    const {data} = useSearch(inputValue)
    console.log('data')
    console.log(data.data.items)
    return (
        <SafeAreaView>
            <View style={styles.con}>
                <Pressable onPress={() => router.back()}>
                    <AntDesign name="left" size={20} color="black"/>
                </Pressable>
                <View style={styles.btn}>
                    <Fontisto name="search" size={18} color="#e05656"/>
                    <TextInput value={inputValue} onChangeText={(e) => setInputValue(e)} autoFocus={true}
                               style={styles.input}
                               placeholder={'Искать товаров и категории'}/>
                    <Pressable onPress={() => setInputValue('')}>
                        <Octicons name="x-circle-fill" size={24} color="#e05656"/>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Search
const styles = StyleSheet.create({
    con: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
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
    },
    input: {
        width: '85%',
        paddingRight: 15,
        paddingLeft: 15
    }
})