import React from "react";
import { View, Text } from "react-native";

export default class ConstellationDetails extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.constellation.name}</Text>
      </View>
    );
  }
}
