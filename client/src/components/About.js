import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function About({ show }) {
  if (!show) return null;

  return (
    <View style={styles.container}>

      <Text>About nnext</Text>
      <Text>text why this game rocks and solves useful everyday needs</Text>

      <Text>Introduction</Text>
      <Text>Selecting inputs and outputs for your needs</Text>

      <Text>How To Play</Text>
      <Text>Step 1</Text>
      <Text>Step 2</Text>
      <Text>Step 3</Text>

      <Text>Icons</Text>

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

export default About;