import React from "react";
// import NavBar from "./src/components/NavBar";
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground } from 'react-native'

// const bg = require('../../assets/bgeffect.gif')

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }
  componentDidMount() {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=Wellington,NZ&appid=6077bc0c24cd3abfdf63f56070c1d010&units=metric')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View styles={StyleSheet.container}>
          <ActivityIndicator />
        </View>
      )
    } else {

      let data = this.state.dataSource

      return (
        <ImageBackground
          source={require('../../assets/bgeffect.gif')}
          style={StyleSheet.absoluteFill}>
          <View style={styles.container}>
            <Text> Temprature: {data.main.temp}</Text>
            <Text> City: {data.name}</Text>
            <Text> Country: {data.sys.country}</Text>
            <Text> Description: {data.weather[0].description}</Text>
          </View>
        </ImageBackground>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 100,
    padding: 20,
  },
  bgStyle: {
    resizeMode: 'stretch',
  }
});