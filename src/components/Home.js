import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

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