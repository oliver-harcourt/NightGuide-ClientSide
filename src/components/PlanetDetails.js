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
            <Text style={styles.title}>
              ____ {this.props.planet.name} ____
            </Text>
          </View>
          <View style={styles.imgcontainer}>
            <Image
              resizeMode="cover"
              source={{ uri: this.props.planet.image }}
              style={styles.image}
            />
          </View>
          <View style={styles.container}>
            <View stlye={styles.rows}>
              <View style={styles.col1}>
                <Text
                  style={styles.descriptiontitle}
                >
                  {this.props.planet.location[0]}
                </Text>
              </View>
              <View style={styles.col2}>
                <Text
                  style={styles.descriptiontitle}
                >
                  {this.props.planet.location[2]}
                </Text>
              </View>
            </View>
            <View stlye={styles.rows}>
              <View style={styles.col1}>
                <Text
                  style={styles.description}
                >
                  {this.props.planet.location[1]}
                </Text>
              </View>
              <View style={styles.col2}>
                <Text
                  style={styles.description}
                >
                  {this.props.planet.location[3]}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
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
  image: {
    width: imgWidth,
    height: imgHeight,
    marginTop: 20
  },
  descriptioncon: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  description: {
    color: '#fff',
    fontSize: 20,
    padding: 30,
  },
  descriptiontitle: {
    color: '#fff',
    fontSize: 20,
    padding: 30,
    fontWeight: 'bold'
  },
  rows: {
    flex: 1,
    flexDirection: 'row'
  },
  col1: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  col2: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
});