/* Authored by: Charies Ann A. Hao, Jacob Andrew V. Masip, Ruvhie Kaye C. Prado, Johannabel DC. Valenzuela
Company: HAVADO CO
Project: BIKBUDS
Feature: [DCVA-001] Splash Screen
Description: Displays the app logo and briefly introduces the quiz app 
             before navigating to the home screen.
*/

import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Animated, {
  Easing,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

// Keep splash visible until animation finishes
SplashScreen.preventAutoHideAsync();

const AnimatedSplashScreen = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
  const [isReady, setIsReady] = useState(false);

  // Animation values
  const opacity = useSharedValue(1);
  const wiggle = useSharedValue(0);

  useEffect(() => {
    const startAnimation = async () => {
      // Start wiggle animation (left & right movement)
      wiggle.value = withRepeat(
        withSequence(
          withTiming(-10, { duration: 100, easing: Easing.linear }),
          withTiming(10, { duration: 100, easing: Easing.linear })
        ),
        5, 
        true
      );

      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsReady(true);
      opacity.value = withTiming(0, { duration: 1000, easing: Easing.ease });

      setTimeout(() => {
        SplashScreen.hideAsync();
        onAnimationEnd();
      }, 1000);
    };

    startAnimation();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Animated.Image
        source={require('../assets/splash.png')}
        style={[
          styles.image,
          {
            transform: [{ translateX: wiggle }],
          },
        ]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default AnimatedSplashScreen;
