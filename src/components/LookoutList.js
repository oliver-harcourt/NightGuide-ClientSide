import React from "react";
import lookouts from "../../data/lookouts";

import { ScrollView } from "react-native";

import { List, ListItem } from "react-native-elements";

import BrooklynMap from "./BrooklynMap";

export default class LookoutDetails extends React.Component {
  render() {
    return (
      <ScrollView>
        <BrooklynMap />
        <List containerStyle={{ marginTop: 550 }}>
          {lookouts.map(lookout => (
            <ListItem
              roundAvatar
              avatar={lookout.icon}
              key={lookout.id}
              title={lookout.name}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
