import {Image, Text, TouchableOpacity, View} from "react-native";
import {router} from "expo-router";

interface IProps {
    id: number,
    max_price: number,
    min_price: number,
    name: string,
    parent_category: boolean
}

export const CategoryCart = (props: IProps) => {
    return (
        <TouchableOpacity onPress={() => router.push(`category/${props.name}`)}>
            <Image/>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )
}