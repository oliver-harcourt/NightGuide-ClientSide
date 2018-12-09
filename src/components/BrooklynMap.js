import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";



export default class BrooklynMap extends React.Component {
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
      timeOut: 20000, //20sec
      maximumAge: 60 * 60 * 24 // sec min hr
    }
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions)
    this.setState({
      ready: false,
      error: null
    })
  }

  geoSuccess = (position) => {
    this.setState({
      ready: true,
      where: {
        lat: Number(position.coords.latitude),
        lng: Number(position.coords.longitude)
      }
    })
    console.log('currant latitude', Number(position.coords.latitude))
    console.log('current longitude', Number(position.coords.longitude))
  }

  geoFailure = (err) => {
    this.setState({
      error: err.message
    })
  }

  render() {
    console.log('map rendering after state changed')
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
        {console.log('rendering new lat and lng? >>>', this.state.where.lat, this.state.where.lng)}
        {this.state.ready &&
          (<Marker
            coordinate={{
              latitude: this.state.where.lat,
              longitude: this.state.where.lng
            }}
            pinColor="blue"
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
