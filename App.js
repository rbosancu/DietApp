import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { personalizare } from './theme/mainTheme';

export default function App() {
  return (
    <View style={personalizare.container}>
      <Text>BLABLA!</Text>
      <StatusBar style="auto" backgroundColor='gray'/>
    </View>
  );
}
