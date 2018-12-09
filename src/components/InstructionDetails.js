import React from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";

export default class InstructionDetails extends React.Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView>
         <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            fontWeight: "bold",
            padding: 15,
            textAlign: "center"
          }}
        >
          {this.props.lookout.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            padding: 30,
            textAlign: "justify"
          }}
        >
          {this.props.instruction.description}
        </Text>
      </ScrollView>
    );
  }
}
