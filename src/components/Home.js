import React from "react";
import { Text, View, StyleSheet } from "react-native";

import NavBar from './Navbar/NavBar'
import StarMap from './StarMap'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StarMap />
        <View style={styles.container}>
          <NavBar style={styles.navBar}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  navBar: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }
});
