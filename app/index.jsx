import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import Logo from '../assets/img/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo}/>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})