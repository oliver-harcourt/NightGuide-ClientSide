import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Actions } from 'react-native-router-flux'

import NavBar from './Navbar/NavBar'
import StarMap from './StarMap'

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.jpg')}
        style={StyleSheet.absoluteFill}
      >
        <View style={styles.container}>
          <StarMap />
          <View style={styles.navcontainer}>
            <NavBar style={styles.navBar} />
          </View>
        </View>
        <Text style={{ color: 'white' }} onPress={() => Actions.camera()}>camera</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  navcontainer: {
    flex: 1,
    alignItems: 'center',
  },
  navBar: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  }
});
