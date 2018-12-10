import React from "react";
import constellations from '../../data/constellations'
import { Actions } from 'react-native-router-flux';
import { View, StyleSheet } from 'react-native'
import NavBar from './Navbar/NavBar'
import { List, ListItem } from 'react-native-elements'

export default class ConstellationList extends React.Component {
  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            constellations.map((constellation) => (
              <ListItem
                onPress={() => Actions.constellationdetails({ constellation: constellation })}
                roundAvatar
                avatar={constellation.icon}
                key={constellation.name}
                title={constellation.name}
              />
            ))
          }
        </List>
        <View style={styles.container}>
          <NavBar />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 370
  },
});