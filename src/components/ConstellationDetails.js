import React from "react";
import { ImageBackground, View, StyleSheet, Text, Image, ScrollView } from "react-native";

export default class ConstellationDetails extends React.Component {
  
  render() {
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
              ____ {this.props.constellation.name} ____
            </Text>
            <Text style={styles.translation}>{this.props.constellation.translation}</Text>
          </View>
          <View style={styles.imgcontainer}>
            <Image
              resizeMode="center"
              source={this.props.constellation.image}
            />
          </View>
          <Text style={styles.descriptioncon}>
            {this.props.constellation.description}
          </Text>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  translation: {
    color: '#fff'
  },
  imgcontainer: {
    flex: 1,
    marginTop: 0,
    marginBottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  descriptioncon: {
    color: '#fff',
    padding: 30,
    fontSize: 20,
    lineHeight: 35
  }
});
