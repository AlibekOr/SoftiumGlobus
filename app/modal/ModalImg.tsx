import {Button, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from "expo-router";

export const ModalImg = ({image}: any) => {
    return (
        <View style={styles.viewCon}>
            <Image width={360} height={460} source={{uri: image.image}}/>
            <TouchableOpacity style={styles.back} onPress={() => router.replace('home')}>
                <Ionicons name="arrow-back" size={24} color="black"/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    viewCon: {
        position: 'relative'
    },
    back: {
        position: 'absolute',
        top: 5,
        left: 13,
    }
})