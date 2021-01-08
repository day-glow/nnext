import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput>Name:</TextInput>
      <Text>This is my first mobile app</Text>
      <Text>YAY!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
