import React from 'react'
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux'
import { ImageBackground, View, StyleSheet, Text, Button,Image, Dimensions, ScrollView } from "react-native";
import instructions from '../../data/instructions'
import {List,ListItem} from 'react-native-elements'

var styles = {
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c5ce7'
    },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c5ce7'
  },
  slide3: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c5ce7'
  },
  text: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold'
  }
}

export default () => <Swiper style={styles.wrapper} showsButtons >
<ImageBackground
        source={require('../../assets/bg.jpg')}
        style={StyleSheet.absoluteFill}
      >
  <View style={styles.slide1}>
    <Text style={styles.text}>Welcome to Night Guide!
</Text>
<View style={styles.imgcontainer}>
            <Image
              resizeMode="cover"
              source={require('../../assets/instruction_welcome.png')}
              style={{
                width: 201,
                height: 375,
                marginTop: 20
              }}
            />
          </View>
  </View>
  </ImageBackground>
  
  <View style={styles.slide2}>
  <List containerStyle={{ marginBottom: 20 }}>
          {
            instructions.map((instruction) => (
              <ListItem
                onPress={() => Actions.instructiondetails({ instruction: instruction })}
                roundAvatar
                avatar={instruction.icon}
                key={instruction.name}
                title={instruction.name}
              />
            ))
          }
        </List>
    </View>
  <View style={styles.slide3}>
    <Text style={styles.text}>Slide 3
</Text>
<Button onPress={() => Actions.home()} title="Home" ></Button>
  </View>
</Swiper>






