import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function GameAll({ show }) {
  if (!show) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.outcomeType}>Party Mode</Text>
      <Text style={styles.nnextBtn}>nnext</Text>
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
  outcomeType: {
    fontSize: 50,
  },
  nnextBtn: {
    fontSize: 120,
  },
});

export default GameAll;