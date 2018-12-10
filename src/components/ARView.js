import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Expo from 'expo'
import ExpoThree, { THREE } from 'expo-three'
import ExpoGraphics from 'expo-graphics'

export default class ARView extends React.Component {
    static navigationOptions = {
        header: null,
    }

    render () {
        return (
            <View>
                <Text>Home Screen</Text>
            </View>
        )
    }
} 