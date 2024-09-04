import {StyleSheet, View} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import React from "react";

const INITIAL_REGION = {
    latitude: 42.46105,
    longitude: 59.60824,
    latitudeDelta: 2,
    longitudeDelta: 2
}
const Map = () => {
    return (
        <View style={{flex: 1}}>
            <MapView style={StyleSheet.absoluteFill} initialRegion={INITIAL_REGION}
                     provider={PROVIDER_GOOGLE} showsUserLocation={true}
                     showsMyLocationButton={true}/>
        </View>
    )
}
export default Map