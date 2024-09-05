import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {router} from "expo-router";

const INITIAL_REGION = {
    latitude: 54.548,
    longitude: 25.552
}

export const MapBtn = () => {
    return (
        <Pressable onPress={() => router.push('map')}>
            <Text>
                go map
            </Text>
        </Pressable>
    );
}

