import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function NewGameOptions({ show }) {
  if (!show) return null;

  useEffect(() => {
    //send game options to app level
    //start game
  })

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.section}>New Game Options</Text>
        <Text style={styles.sectionText}>
          Quickly customize your perfect nnext game
        </Text>

        <Text style={styles.section}>Number of Players</Text>
        <Text style={styles.sectionText}>
          Drop down? 1-n
        </Text>

        <Text style={styles.section}>Type of Outcome</Text>
        <Text style={styles.sectionText}>
          Single
        </Text>
        <Text style={styles.sectionText}>
          One-by-One
        </Text>
        <Text style={styles.sectionText}>
          All
        </Text>

        <Text style={styles.section}>Advanced Settings (coming soon)</Text>

        <Button
        style={styles.startGameBtn}
        onPress={() => {
          //send useEffect back to App, toggle pages to show game

        }}
        title="START GAME"
      />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    margin: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  section: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  sectionText: {
    textAlign: 'left',
    justifyContent: 'space-around',
    marginTop: 4,
    marginBottom: 4,
  },
  startGameBtn: {
    fontSize: 60,
  },
});

export default NewGameOptions;