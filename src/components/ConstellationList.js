import React from "react";
import constellations from '../../data/constellations'
import { Actions } from 'react-native-router-flux';


import {
  View,
  Text
} from 'react-native'

import {
  List,
  ListItem
} from 'react-native-elements'

export default class ConstellationList extends React.Component {
  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            constellations.map((constellation) => (
              <ListItem
                onPress={() => Actions.constellationdetails({text: constellation})}
                roundAvatar
                avatar={constellation.icon}
                key={constellation.name}
                title={constellation.name}
              />
            ))
          }
        </List>
      </View>
    )
  }
}
