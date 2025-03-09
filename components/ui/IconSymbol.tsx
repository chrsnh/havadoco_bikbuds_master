import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, TextStyle } from 'react-native';

// Corrected MAPPING object
const MAPPING = {
  'search-sharp.fill': 'search',
  'house.fill': 'home',
  'language.fill': 'language',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as const;

export type IconSymbolName = keyof typeof MAPPING;

/**
 * Icon component that uses SF Symbols on iOS and MaterialIcons on Android & web.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>; // Changed from ViewStyle to TextStyle
  weight?: SymbolWeight;
}) {
  const iconName = MAPPING[name] ?? 'help-outline'; // Fallback to avoid errors

  return <MaterialIcons color={color} size={size} name={iconName} style={style as StyleProp<TextStyle>} />;
}
