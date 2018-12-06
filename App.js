import React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator, createNavigationContainer } from 'react-navigation';

import BrooklynMap from "./src/components/BrooklynMap";
import ConstellationDetails from "./src/components/ConstellationDetails";
import ConstellationList from "./src/components/ConstellationList";
import Header from "./src/components/Header";
import InstructionContainer from "./src/components/InstructionContainer";
import Landing from "./src/components/Landing";
import Home from './src/components/Home'
import MenuInstruction from "./src/components/MenuInstruction";
import NavBar from "./src/components/Navbar/NavBar";
import NightGuideLogo from "./src/components/NightGuideLogo";
import PlanetDetails from "./src/components/PlanetDetails";
import PlanetList from "./src/components/PlanetList";
import Weather from "./src/components/Weather";
import WelcomeInstruction from "./src/components/WelcomeInstruction";

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
      header: null
    })
  }

})

const App = createNavigationContainer(RootStack)


export default App