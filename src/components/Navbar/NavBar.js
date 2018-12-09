import React from 'react'
import { View, StyleSheet } from 'react-native'

import Home from './Home'
import Stars from './Stars'
import Planet from './Planet';
import Lookout from './Lookout';
import Weather from './Weather'

const NavBar = () => {
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.naveach} >
        <Weather />
      </View>
      <View style={styles.naveach}>
        <Lookout />
      </View>
      <View style={styles.naveach}>
        <Planet />
      </View>
      <View style={styles.naveach}>
        <Stars />
      </View>
      <View style={styles.naveach}>
        <Home />
      </View>
    </View>
  )
}

export default NavBar

const styles = StyleSheet.create({
  navbarContainer: {
    flex: 1,
    flexWrap: 'wrap',
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row-reverse',
    alignItems: 'stretch',
    justifyContent: "flex-end",
  },
  naveach: {
    marginRight: 15
  }
})