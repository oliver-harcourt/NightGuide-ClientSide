import React from "react";
import lookouts from "../../data/lookouts";
import { Actions } from 'react-native-router-flux';
import { ScrollView, StyleSheet, View } from "react-native";
import { List, ListItem } from "react-native-elements";

import NavBar from './Navbar/NavBar'
import Map from "./Map";

export default class LookoutDetails extends React.Component {
  
  render() {
    return (
      <ScrollView maximumZoomScale={3} minimumZoomScale={0.2}>
        <Map />
        <List style={styles.listContainer}>
          {lookouts.map(lookout => (
            <ListItem
              onPress={() => Actions.lookoutdetails({ lookout: lookout })} //first lookout is the lookout in {this.props.lookout.name}lookoutdetail
              roundAvatar
              avatar={lookout.icon}
              key={lookout.id}
              title={lookout.name}
            />
          ))}
        </List>
        <View style={styles.navContainer}>
          <NavBar />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  navContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 235
  },
  listContainer: {
    marginTop: 350 
  }
});