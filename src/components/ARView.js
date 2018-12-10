import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Expo from 'expo'
import ExpoThree, { THREE } from 'expo-three'
import ExpoGraphics from 'expo-graphics'

export default class ARView extends React.Component {
    static navigationOptions = {
        header: null,
    }
    onContextCreate = async({gl, sclae, width, height, arsession}) => {
this.renderer = ExpoTHREE.creareRenderer({gl})
this.renderersetPixelRatio(scale)
this.renderer.serSize(width, height)

this.scene = new THREE.Scene();
this.scene.background = expoTHREE.reateARBackgroundTexture(arsession, this.renderer)

this.camera = ExpoTHREE.createARCamera(arsession, width / scale/scale, 0.01, 1000)

    }
onRender = (delta) => {
this.renderer.render(this.scene, this.camera)
}
    render () {
        return (
           <ExpoGraphics.View style={{flex:1}}
           onContextCreate={this.onContextCreate}
           onRender={this.onRender}
           arEnabled={true}
           />
        )
    }
} 