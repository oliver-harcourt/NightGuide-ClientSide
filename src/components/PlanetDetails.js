import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class PlanetDetails extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.text.name}</Text>
      </View> 
  
    
      
    )
  }
}
