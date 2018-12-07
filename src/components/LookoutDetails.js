import React from "react";
import { View, Text } from "react-native";

export default class LookoutDetails extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.lookout.name}</Text>
      </View>
    );
  }
}
