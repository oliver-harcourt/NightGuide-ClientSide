import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Landing from "./src/components/Landing";
import Home from './src/components/Home'
import Weather from "./src/components/Weather";


const RootStack = createStackNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: () => ({
      header: null
    })
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: `Home`
    }),
    headerStyle: {
      backgroundColor: '#f4511e',
    },
  },
  Weather: {
    screen: Weather,
    navigationOptions: () => ({
      title: `Weather`
    })
  }

})

const App = createAppContainer(RootStack)


export default App
