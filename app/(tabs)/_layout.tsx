import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: '#888', // Inactive tab icon color
        headerShown: true,
        headerStyle: styles.headerContainer,
        headerTitle: () => <Text style={styles.headerTitle}>{getHeaderTitle(route.name)}</Text>,
        headerRight: () => (
          <TouchableOpacity onPress={() => {}} style={styles.iconButton}></TouchableOpacity>
        ),
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: styles.tabBar, // Apply custom tab bar style
        tabBarItemStyle: styles.tabBarItem, // Custom tab item style
        tabBarLabelStyle: styles.tabBarLabel, // Custom label style
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="search-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="person-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}

// Explicitly type the routeName parameter
const getHeaderTitle = (routeName: string): string => {
  switch (routeName) {
    case 'index':
      return 'Home';
    case 'profile':
      return 'Profile';
    case 'search':
      return 'Search';
    default:
      return 'App';
  }
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  headerTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500',
    marginLeft: 13,
  },
  iconButton: {
    padding: 8,
    marginRight: 20,
  },
  tabBar: {
    backgroundColor: 'white',
    height: 58,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabBarItem: {
    paddingVertical: 5,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '600',
  },
});

