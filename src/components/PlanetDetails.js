import React from "react";
import { ImageBackground, View, StyleSheet, Text, Image, Dimensions, ScrollView } from "react-native";

export default class PlanetDetails extends React.Component {
  state = {
    imgWidth: 0,
    imgHeight: 0
  }

  componentDidMount() {
    Image.getSize(this.props.planet.image, (width, height) => {
      const screenWidth = Dimensions.get('window').width
      const scaleFactor = width / screenWidth
      const imageHeight = height / scaleFactor
      this.setState({
        imgWidth: screenWidth,
        imgHeight: imageHeight
      })
    })
  }
  render() {
    const { imgWidth, imgHeight } = this.state
    return (
      <ImageBackground
        source={require('../../assets/bg.jpg')}
        style={StyleSheet.absoluteFill}
      >
        <ScrollView maximumZoomScale={3} minimumZoomScale={0.8}>
          <View style={styles.titlecontainer}>
            <Text
              style={styles.title}
            >
              ____ {this.props.planet.name} ____
            </Text>
          </View>
          <View style={styles.imgcontainer}>
            <Image
              resizeMode="cover"
              source={{ uri: this.props.planet.image }}
              style={{
                width: imgWidth,
                height: imgHeight,
                marginTop: 20
              }}
            />
          </View>
          <View style={styles.descriptioncon}>
            <Text
              style={styles.description}
            >
              {this.props.planet.location[0]}
            </Text>
            <Text
              style={styles.description}
            >
              {this.props.planet.location[1]}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  titlecontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginTop: 125,
    fontSize: 25,
    fontWeight: "bold",
    padding: 15,
    textAlign: "center",
    color: '#fff'
  },
  imgcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptioncon: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 20,
    padding: 30,
  }
});
