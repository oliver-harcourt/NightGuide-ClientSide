import React from "react";
import { Text, View, StyleSheet } from "react-native";

import NavBar from './Navbar/NavBar'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#6c5ce7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
