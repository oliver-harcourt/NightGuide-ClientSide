import React from "react";
import { Text, View } from "react-native";

export default class MenuInstruction extends React.Component {
  render() {
    return (
      <View>
        <Text>Weather guide,Planet finder,Constellation viewer, Find a lookout</Text>
        <NavBar />
      </View>
    );
  }
}
