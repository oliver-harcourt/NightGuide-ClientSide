import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";



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
      >
        <MapView.Marker
          coordinate={{ latitude: -41.295932, longitude: 174.794568 }}
          title={"Mount Victoria Lookout"}
        />
        <MapView.Marker
          coordinate={{ latitude: -41.274925, longitude: 174.765356 }}
          title={"Te Ahumairangi Hill Lookout"}
        />
        <MapView.Marker
          coordinate={{ latitude: -41.310868, longitude: 174.744861 }}
          title={"Wellington Wind Turbine"}
        />
        <MapView.Marker
          coordinate={{ latitude: -41.3408, longitude: 174.7591 }}
          title={"Red Rocks"}
        />
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
