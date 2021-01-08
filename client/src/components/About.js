import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function About({ show }) {
  if (!show) return null;

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.section}>About nnext</Text>
        <Text>text why this game rocks and solves useful everyday needs</Text>

        <Text style={styles.section}>Introduction</Text>
        <Text>Selecting inputs and outputs for your needs</Text>

        <Text style={styles.section}>How To Play</Text>
        <Text>Step 1</Text>
        <Text>Step 2</Text>
        <Text>Step 3</Text>

        <Text style={styles.section}>Icons</Text>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    fontWeight: 'bold',
  },
});

export default About;