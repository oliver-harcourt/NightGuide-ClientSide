import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ready: false,
      where: {
        lat: null,
        lng: null
      },
      error: null
    }
  }

  componentDidMount() {
    let geoOptions = {
      enableHigthAccuracy: true, //able to connect location on phone
      timeout: 20000, //20sec
      maximumAge: 60 * 60 * 24 // sec min hr
      // maximumAge: 0 // sec min hr
    }
    this.setState({
      ready: false,
      error: null
    })
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions)
  }

  geoSuccess = (position) => {
    this.setState({
      ready: true,
      where: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  }

  geoFailure = (err) => {
    this.setState({
      error: err.message
    })
  }
  
  render() {
    return (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: -41.310868,
          longitude: 174.744861,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        {this.state.ready &&
          (<Marker
            coordinate={{
              latitude: this.state.where.lat,
              longitude: this.state.where.lng
            }}
            key={"whereamI"}
            pinColor={"blue"}
            title={"My Current Location"}
          />)}
        <Marker
          coordinate={{ latitude: -41.295932, longitude: 174.794568 }}
          title={"Mount Victoria Lookout"}
        />
        <Marker
          coordinate={{ latitude: -41.274925, longitude: 174.765356 }}
          title={"Te Ahumairangi Hill Lookout"}
        />
        <Marker
          coordinate={{ latitude: -41.310868, longitude: 174.744861 }}
          title={"Wellington Wind Turbine"}
        />
        <Marker
          coordinate={{ latitude: -41.3408, longitude: 174.7591 }}
          title={"Red Rocks"}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});