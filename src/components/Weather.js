import React from "react";
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground } from 'react-native'



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
            <Text style={styles.title}> {data.name}</Text>
            <Text style={styles.subtitle}>{data.sys.country}</Text>
            <Text style={styles.tempstyle}>{`${data.main.temp}°`}</Text>
            <Text style={styles.descrip}>{data.weather[0].description}</Text>
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
  },
  title: {
    fontSize: 50,
    position: 'absolute',
    top: 50,
    left: 10,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    fontSize: 20,
    position: 'absolute',
    top: 110,
    left: 235,
    color: 'white',
    fontWeight: '700'
  },
  tempstyle: {
    fontSize: 80,
    color: 'white',
    position: 'absolute',
    top: 300,
    left: 20,
    fontWeight: '700'
  },
  descrip: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    position: 'absolute',
    top: 350,
    left: 150,
  }
});