import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import Logo from '../assets/img/logo.png'

const {width, height } = Dimensions.get('window');

const Welcome = () => {

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} resizeMode="contain"/>

      <Text style={styles.title}>Welcome!</Text>

      <Link href="/home">Sign-in</Link>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 0.3 * width,
    height: 0.3 * height,
    transform: [{translateY: -250}]
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    transform: [{translateY: -275}]
  },
})