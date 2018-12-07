import React from "react";
import lookouts from "../../data/lookouts";

import { View, Text } from "react-native";

import { List, ListItem } from "react-native-elements";

export default class LookoutDetails extends React.Component {
  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          {lookouts.map(lookout => (
            <ListItem
              roundAvatar
              avatar={{ uri: lookout.icon }}
              key={lookout.id}
              title={lookout.name}
            />
          ))}
        </List>
      </View>
    );
  }
}
