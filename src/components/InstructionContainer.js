import React from "react";
import { Text, View } from "react-native";

export default class InstructionContainer extends React.Component {
  render() {
    return (
      <View>
        <Text>Weather guide
The weather guide will help you find the temperature, the humidity and whether or not the conditions are good to go star hunting!
Planet finder
The planet finder will show you a list of planets in our solar system, and you can look at each individual planet, that will show you a picture of the planet, its coordinates and a small description

Constellation viewer
The constellation viewer will show a few of the constellations that you might be able to see at night.
If you want to learn more about a specific constellation, we have pictures, coordinates and a little description for each of them too!
Find a lookout!
If you place isn’t the best place to view stars or planets, we have linked a few local (local to Wellington) on a map to its convenient!</Text>
      </View>
    );
  }
}
