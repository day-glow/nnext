import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function NewGameOptions({ show }) {
  if (!show) return null;

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.section}>New Game Options</Text>
        <Text style={styles.sectionText}>
          Customize your next game by selection the following fields:
        </Text>

        <Text style={styles.section}>Number of Players</Text>
        <Text style={styles.sectionText}>
          Drop down? 1-n
        </Text>

        <Text style={styles.sectionText}>
          Back and forth, until he would basically give up.
        </Text>
        <Text style={styles.sectionText}>
          Next, he tried volunteers...crickets.
        </Text>
        <Text style={styles.sectionText}>
          Next, he would ask someone to pick a random number between 1-n. Next, we would have to shift our numbers as each person went.
        </Text>
        <Text style={styles.sectionText}>
          Let's just say, this is how "nnext" was born.
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
});

export default NewGameOptions;