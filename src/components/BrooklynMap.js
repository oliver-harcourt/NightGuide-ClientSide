import React from "react";
import { StyleSheet, View } from "react-native";

// import { MapView } from "react-native-maps";
import MapView, { Marker } from "react-native-maps";

// import { MapApi } from '../../data/MapApi'

export default class BrooklynMap extends React.Component {
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -41.310868,
          longitude: 174.744861,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
