import React from "react";
import constellations from '../../data/constellations'

import {
  View
} from 'react-native'

import {
  List,
  ListItem
} from 'react-native-elements'

export default class ConstellationList extends React.Component {
  render() {
    return (
      <View>
        <List containerStyle={{marginBottom: 20}}>
          {
            constellations.map((constellation) => (
              <ListItem
                roundAvatar
                avatar={{uri:constellation.icon}}
                key={constellation.name}
                title={constellation.name}
                subtitle={constellation.translation}
              />
            ))
          }
        </List>
      </View>
    )
  }
}
