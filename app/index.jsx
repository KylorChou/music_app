import { StyleSheet, Text, View, Image, Dimensions, Animated, ImageBackground, Easing } from 'react-native'
import React, {useEffect, useRef } from 'react'
import { Link } from 'expo-router'

import Logo from '../assets/img/logo.png'

const {width, height } = Dimensions.get('window');

const STRIPE_HEIGHT = 100;
const IMAGE = require('../assets/img/sheetMusic.jpg');
const DIAGONAL = Math.sqrt((width ** 2) + (height ** 2));
const STRIPE_COUNT = Math.ceil(DIAGONAL / STRIPE_HEIGHT);
const IMAGE_WIDTH = 1500;

const Welcome = () => {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopscroll = () => {
      translateX.setValue(0);
      Animated.timing(translateX, {
        toValue: -IMAGE_WIDTH,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(loopscroll);
    };

    loopscroll();
  }, [translateX]);

  const stripes = Array.from({ length: 20}, (_, i) => i);

  return (
    
    <View style={styles.container}>
      <View style={styles.cropContainer}>
        <View style={styles.fullOverlay}>
          <View style={styles.stripeContainer}>
            {Array.from({ length: STRIPE_COUNT }).map((_, i) =>
            i % 2 === 0 ? (
              <View key = {i} style = {styles.stripe}>
                <Animated.View style={[styles.scrollRow, { transform: [{ translateX }] }, ]}>
                  <Image source={IMAGE} style={styles.image}/>
                  <Image source={IMAGE} style={styles.image}/>
                  </Animated.View>
                </View>
              ) : (
                <View key={i} style={[styles.stripe, styles.solidStripe]}/>
              )
            )}
          </View>
        </View>
      </View>

      <Image source={Logo} style={styles.img} resizeMode="contain"/>

      <Text style={styles.title}>Welcome!</Text>

      <Link href="/home" style={styles.signin}>Sign-in</Link>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#818fc7',
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
  signin: {
    backgroundColor: '#002960',
    color: 'white',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 20,
    transform: [{translateY: 50}],
  },
  cropContainer: {
    position: 'absolute',
    width,
    height,
    overflow: 'hidden',
  },
  fullOverlay: {
    position: 'absolute',
    width: DIAGONAL * 2,
    height: DIAGONAL * 2,
    top: -(DIAGONAL - height) / 2,
    left: -(DIAGONAL - width) / 2,
    transform: [{ rotate: '-45deg'}],
  },
  stripeContainer: {
    flex: 1,
  },
  stripe: {
    height: STRIPE_HEIGHT,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  solidStripe: {
    backgroundColor: '#818fc7',
  },
  scrollRow: {
    flexDirection: 'row',
    width: IMAGE_WIDTH * 2,
  },
  image: {
    height: STRIPE_HEIGHT,
    width: IMAGE_WIDTH,
    resizeMode: 'cover'
  },
})