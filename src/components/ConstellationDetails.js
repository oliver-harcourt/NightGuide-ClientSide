import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground
} from 'react-native';

import constellations from '../../data/constellations'

export default class ConstellationDetails extends React.Component {
  render() {
    return (
      <View>
        <Text>{constellations.name}</Text>
        <Text>{constellations.translation}</Text>
        {/* <ImageBackground
          source={require('../../assets/constellation-images/star-background.jpg')}
          style={styles.container}>
        </ImageBackground> */}
        <Text>{constellations.description}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  }
})
