import React from 'react'
import { Actions } from 'react-native-router-flux'

import LottieView from 'lottie-react-native'

export default class Landing extends React.Component {
  state = {
    login: false
  }

  componentDidMount() {
    setTimeout(() => {
      Actions.instruction()
    }, 9000)
  }

  render() {
    return (
      <LottieView
        source={require('../../assets/ani/landinglogo.json')}
        autoPlay
        loop
      >
      </LottieView>
    )
  }
}