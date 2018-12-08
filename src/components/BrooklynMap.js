import React from "react";
import { StyleSheet, View, AppRegistry, Text, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

const LATITUDE_DELTA = 0.00922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width/height



export default class BrooklynMap extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      initialRegion: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }
  
  // watchID: ?number = null;
componentDidMount(){
  navigator.geolocation.getCurrentPosition((position) => {
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.longitude)

    var initialRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }

this.setState({intialPosition: initialRegion})
this.setState({markerPosition: initialRegion})
  },
  (error) => alert(JSON.stringify(error)),
  {enableHighAccuracy: true, timeout: 2000, maxage: 1000})

  this.watchID = navigator.geolocation.watchPosition((position) => {
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)
    var lastRegin = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    }
    this.setState({initialPosition: lastRegin})
    this.setState({markerPosition: lastRegin})
  })
}
componentWillMount(){
  navigator.geolocation.clearWatch(this.watchID)
}
render() {
    return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={this.state.initialPosition}>

        <MapView.Marker
          coordinate={this.state.markerPosition}>
          <View style={styles.radius}>
          </View>
      
      </MapView.Marker>
      </MapView>
      
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
      </View >
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    left: 0,
    right: 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
