import {View} from "react-native";

interface IProps {
    id: number,
    image: string
}

export const CartImg = ({image}: IProps) => {
    console.log(image)
    return (
        <View>
        </View>
    )
}