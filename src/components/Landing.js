import React from 'react'
import { Alert, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Spinner } from 'native-base'

import Logo from './Logo'
import NavBar from './NavBar/NavBar'

class Landing extends React.Component {
  state = {
    login: false
  }
  _onPressButton = (evt) => {
    setTimeout(() => {
      this.setState({ login: true })
    }, 3000)
    Alert.alert('You are logged in!')
    evt.preventDefault()
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          {this.state.login && (
            <Spinner style={styles.spinner} color="pink" >
              <Text>
                Loading
                        </Text>
            </Spinner>
          )}
          <Logo />
          <Text style={styles.title}>Night Guide</Text>
          <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
          <NavBar />
        </View>
        <View style={styles.formContainer}>
        </View>
        <View>
          <Text style={styles.subtitle}>Build by DEV</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinner: {
    zIndex: 1,
    position: 'relative',
    top: 150,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#6c5ce7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#f3a683'
  },
  subtitle: {
    color: '#fff',
    fontWeight: '100',
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginTop: 20,
    width: 150,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#f3a683',
    borderRadius: 5,
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700'
  }
});

export default Landing