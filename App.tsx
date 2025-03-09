import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AnimatedSplashScreen from './components/AnimatedSplashScreen'; // Ensure path is correct

export default function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  return isSplashVisible ? (
    <AnimatedSplashScreen onAnimationEnd={() => setSplashVisible(false)} />
  ) : (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the App!</Text>
    </View>
  );
}
