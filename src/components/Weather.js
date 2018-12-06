import t from 'tcomb-form-native';
import React from "react";
import { Text, View } from "react-native";
const API_KEY = '6077bc0c24cd3abfdf63f56070c1d010'

const form = t.struct({
  city: t.String,
  country: t.String
})
export default class Weather extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter A Value"

      })

    }
  }
  render() {
    return (
      <View>
        <Text>{form}</Text>
        <Text>{this.state.temperature}</Text>
        <Text>{this.state.city}</Text>
        <Text>{this.state.country}</Text>
        <Text>{this.state.humidity}</Text>
        <Text>{this.state.description}</Text>
      </View>
    );
  }
}
