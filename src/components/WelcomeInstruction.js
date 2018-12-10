import React from 'react'
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux'
import { ImageBackground, View, StyleSheet, Text, Button, Image, Dimensions, ScrollView, TouchableOpacity } from "react-native";
//mport instructions from '../../data/instructions'
//import {List,ListItem} from 'react-native-elements'
// import Lookout from '../components/Navbar/Lookout'
// import Planet from '../components/Navbar/Planet'
// import Stars from '../components/Navbar/Stars'
// import Weather from '../components/Navbar/Weather'

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c5ce7' 
  },
  text: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f3a683',
    padding: 10,
  },
}

export default () =>
  <Swiper style={styles.wrapper}
    showsPagination={false}
  >
    <View style={styles.slide1}>
      <Image
        resizeMode="contain"
        source={require('../../assets/instruction/instructionOne.gif')}
        style={{ width: "100%" }}
      />
    </View>
    <View style={styles.slide2} >
      <Image
        resizeMode="contain"
        source={require('../../assets/instruction/instructionTwo.gif')}
        style={{ width: "100%" }}
      />
    </View>
    <View style={styles.slide3}>
      <Image
        resizeMode="contain"
        source={require('../../assets/instruction/instructionThree.gif')}
        style={{ width: "100%" }}
      />

    </View>
    <View style={styles.slide4}>
      <TouchableOpacity
        style={styles.button}
        onPress={this.onPress}
      >
        <Button onPress={() => Actions.home()} title="Home" color="white"></Button>

      </TouchableOpacity>

    </View>
  </Swiper>






