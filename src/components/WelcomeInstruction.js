import React from 'react'
import {
  Text,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slide5: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slide6: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold'
  }
}

export default () => <Swiper style={styles.wrapper} showsButtons>
  <View style={styles.slide1}>
    <Text style={styles.text}>Welcome to Nightguide!
NIghtguide is a multifaceted astronomical application built for curious users who are interested in our wonderful universe!
Our aim is to set up a new keen stargazer with a bit of information and a kick in the right direction.
We help you find the current weather, visible planets, constellations and even good vantagepoints in your area so you can get the best view!</Text>
  </View>
  <View style={styles.slide2}>
    <Text style={styles.text}>Weather guide,Planet finder,Constellation viewer, Find a lookout</Text>
  </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>Weather guide
The weather guide will help you find the temperature, the humidity and whether or not the conditions are good to go star hunting!
Planet finder
The planet finder will show you a list of planets in our solar system, and you can look at each individual planet, that will show you a picture of the planet, its coordinates and a small description
</Text>
  </View>
  <View style={styles.slide4}>
    <Text style={styles.text}>
      The planet finder will show you a list of planets in our solar system, and you can look at each individual planet, that will show you a picture of the planet, its coordinates and a small description
</Text>
  </View>
  <View style={styles.slide5}>
    <Text style={styles.text}>
      Constellation viewer
  The constellation viewer will show a few of the constellations that you might be able to see at night.
  If you want to learn more about a specific constellation, we have pictures, coordinates and a little description for each of them too!
</Text>
  </View>
  <View style={styles.slide6}>
    <Text style={styles.text}>
      Find a lookout!
  If you place isn’t the best place to view stars or planets, we have linked a few local (local to Wellington) on a map to its convenient!
</Text>
  </View>
</Swiper>






