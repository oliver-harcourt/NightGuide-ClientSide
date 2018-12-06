import React from "react";

import BrooklynMap from "./src/components/BrooklynMap";
import ConstellationDetails from "./src/components/ConstellationDetails";
import ConstellationList from "./src/components/ConstellationList";
import Header from "./src/components/Header";
import InstructionContainer from "./src/components/InstructionContainer";
import Landing from "./src/components/Landing";
import MenuInstruction from "./src/components/MenuInstruction";
import NavBar from "./src/components/NavBar";
import NightGuideLogo from "./src/components/NightGuideLogo";
import PlanetDetails from "./src/components/PlanetDetails";
import PlanetList from "./src/components/PlanetList";
import Weather from "./src/components/Weather";
import WelcomeInstruction from "./src/components/WelcomeInstruction";
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
 

export default class App extends React.Component {
  constructor(props){
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
    dataSource: responseJson.weather,

  })
  })
  .catch((error) =>{
    console.log(error)
  })
  }

  render() {
    if (this.state.isLoading){
      return (
        <View styles={StyleSheet.container}>
        <ActivityIndicator />
        </View>
      )
    } else {

      let weather = this.state.dataSource.map((val, key) => {
        return <View key={key}>
        <Text>{val.description}</Text>
        </View>
      })
    
    return (
      <View>
        {/* <BrooklynMap />
        <ConstellationDetails />
        <ConstellationList /> */}
        <Header />
        <InstructionContainer />
        <Landing />
        <MenuInstruction />
        <NavBar />
        <NightGuideLogo />
        <PlanetDetails />
        <PlanetList />
        <WelcomeInstruction />
        {weather}
      </View>
    );
  }
}
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
