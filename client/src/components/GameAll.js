import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function GameAll({ show }) {
  if (!show) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.outcomeType}>Party Mode: ALL</Text>
      <Text style={styles.numberOfPlayers}>show num of players</Text>

      <Button
        style={styles.nnextBtn}
        onPress={() => {

        }}
        title={"nnext"}
      />

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
  players: {
    fontSize: 40,
  },
  nnextBtn: {
    fontSize: 120,
  },
});

export default GameAll;