import React from "react";
import { List, ListItem } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { View, StyleSheet } from 'react-native'

import NavBar from './Navbar/NavBar'
import constellations from '../../data/constellations'

export default class ConstellationList extends React.Component {

  render() {
    return (

      <View>
        <List style={styles.listContainer}>
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
        <View style={styles.navContainer}>
          <NavBar />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 370
  },
  listContainer: {
    marginBottom: 20
  }
});
