import React from "react";
import { Text, Image, Dimensions, ScrollView } from "react-native";

export default class LookoutDetails extends React.Component {

  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView>
        {/* <ScrollView maximumZoomScale={3} minimumZoomScale={0.8}> */}
        <Text style={styles.title}>
          {this.props.lookout.name}
        </Text>
        <Image
          source={{ uri: this.props.lookout.image }}
          style={styles.image}
        />
        <Text style={styles.description}>
          {this.props.lookout.description}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    padding: 15,
    textAlign: "center"
  },
  description: {
    fontSize: 20,
    padding: 30,
    textAlign: "justify"
  },
  image: {
    width: screenWidth,
    height: (screenWidth * 2448) / 3264,
    marginTop: 70
  },

});