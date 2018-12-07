import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux'

import Login from './src/components/Landing'
import Home from './src/components/Home'
import LookoutList from './src/components/LookoutList'
import ConstellationList from './src/components/ConstellationList'
import Weather from './src/components/Weather'
import PlanetList from './src/components/PlanetList'
import PlanetDetails from './src/components/PlanetDetails'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={Login}
            initial
            // navigationBarStyle={{ backgroundColor: "#6c5ce7" }}
            hideNavBar={true}
          />
          <Scene
            key="home"
            component={Home}
            title="Home"
          />
          <Scene
            key="lookout"
            component={LookoutList}
            title="Lookout"
          />
          <Scene
            key="stars"
            component={ConstellationList}
            title="Constallation"
          />
          <Scene
            key="planet"
            component={PlanetList}
            title="Planet"
          />
          <Scene
            key="planetdetails"
            component={PlanetDetails}
            title="PlanetDetails"
          />
          <Scene
            key="weather"
            component={Weather}
            title="Weather"
          />

        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
