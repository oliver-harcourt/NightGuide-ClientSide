import React from 'react'
import { Alert, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Spinner } from 'native-base'

import NightGuideLogo from './NightGuideLogo'


class Landing extends React.Component {
  state = {
    login: false
  }
  _onPressButton = (evt) => {
    setTimeout(() => {
      this.setState({ login: true })
    }, 1000)

  }
  _goPage = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    }, 3000)

  }

  _bindPressFunc = async () => {
    this._onPressButton();
    await this._goPage()
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#6c5ce7' barStyle="light-content" />
        <View style={styles.logoContainer}>
          {this.state.login && (
            <Spinner style={styles.spinner} color="pink" >
              <Text>
                Loading
                        </Text>
            </Spinner>
          )}
          <NightGuideLogo />
          <Text style={styles.title}>Night Guide</Text>
          <TouchableOpacity style={styles.button} onPress={() => this._bindPressFunc()}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>

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