import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function Header({ show }) {
  if (!show) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME TO</Text>
      <Text style={styles.header}>nnext</Text>
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
  welcome: {
    fontSize: 50,
  },
  header: {
    fontSize: 120,
  },
});

export default Header;