import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* ✅ Ensure this points to (tabs)/_layout.tsx for the bottom navbar */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* Other screens that are NOT part of the tab bar */}
        <Stack.Screen name="screens/flashcards" options={{ title: 'Flashcards' }} />
        <Stack.Screen name="screens/bicolPhrases" options={{ title: 'Bicol Phrases' }} />
        <Stack.Screen name="screens/Multiple Choice/multipleChoice" options={{ title: 'Multiple Choice' }} />
        <Stack.Screen name="screens/Multiple Choice/questions" options={{ title: 'Questions' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
