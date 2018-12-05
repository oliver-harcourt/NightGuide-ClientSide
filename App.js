import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BoorklynMap from './src/components'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Yoo!s</Text>
        <BoorklynMap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
