import React from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";

export default class PlanetDetails extends React.Component {
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView maximumZoomScale={3} minimumZoomScale={0.8}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 25,
            fontWeight: "bold",
            padding: 15,
            textAlign: "center"
          }}
        >
          {this.props.planet.name}
        </Text>
        <Image
          source={{ uri: this.props.planet.image }}
          style={{
            width: screenWidth,
            height: (screenWidth * 2448) / 3264,
            marginTop: 70
          }}
        />
        <Text
          style={{
            fontSize: 20,
            padding: 30,
            textAlign: "justify"
          }}
        >
          {this.props.planet.location}
        </Text>
      </ScrollView>
    );
  }
}
