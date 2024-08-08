import {FlatList, Image, StyleSheet, View,} from "react-native";

export const CarouselImg = ({image}: any) => {
    const renderItem = ({item, index}: any) => {
        return <View style={styles.imageContainer}>
            <Image source={{uri: item.image}} style={{width: 180, height: 200}}/>
        </View>
    }
    return (
        <View>
            <FlatList horizontal={true} data={image} renderItem={renderItem}/>
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 34,
        overflow: "hidden"
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    }
})