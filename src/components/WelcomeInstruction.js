import React from 'react'
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux'
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from "react-native";

export default () =>
  <Swiper style={styles.wrapper}
    showsPagination={false}
  >
    <View style={styles.slide}>
      <Image
        resizeMode="contain"
        source={require('../../assets/instruction/instructionOne.gif')}
        style={{ width: "100%" }}
      />
      <TouchableOpacity onPress={() => Actions.home()}
        style={styles.container}
       
      >
        <View>
          <Text style={{ fontSize: 35 }}>x</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.slide} >
      <Image
        resizeMode="contain"
        source={require('../../assets/instruction/instructionTwo.gif')}
        style={{ width: "100%" }}
      />
      <TouchableOpacity onPress={() => Actions.home()}
        style={styles.container}
       
      >
        <View>
          <Text style={{ fontSize: 35 }}>x</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.slide}>
      <Image
        resizeMode="contain"
        source={require('../../assets/instruction/instructionThree.gif')}
        style={{ width: "100%" }}
      />
      <TouchableOpacity onPress={() => Actions.home()}
        style={styles.container}
       
      >
        <View>
          <Text style={{ fontSize: 35 }}>x</Text>
        </View>
      </TouchableOpacity>
    </View>
  </Swiper>

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginLeft: 325,
    position: 'absolute', // add if dont work with above
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f3a683',
    padding: 10,
  },
})
