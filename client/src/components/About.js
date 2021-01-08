import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function About({ show }) {
  if (!show) return null;

  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.section}>About nnext</Text>
        <Text style={styles.sectionText}>
          Our teacher has a difficulty randomly selecting the next presenter. He'd ask "Alexa, pick a number between 1-n....Alexa..."
        </Text>
        <Text style={styles.sectionText}>
          Alexa, would respond "I'm sorry I didn't quite catch that".
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

        <Text style={styles.section}>Introduction</Text>
        <Text style={styles.sectionText}>
          It's free and easy to get started, just walk through the nnext steps listed in "How To Play".
        </Text>
        <Text style={styles.sectionText}>
          If you want to go back, select the left arrow, if you want to move on, select the right arrow. You can also select the info icon for more details.
        </Text>
        <Text style={styles.sectionText}>
          Try your first game with something simple, and customize as you play more games.
        </Text>

        <Text style={styles.section}>How To Play</Text>
        <Text>Step 1: Start "New Game"</Text>
        <Text>Step 2: Select the number of players</Text>
        <Text>Step 3: Select the type of game </Text>
        <Text>Step 4: Click "nnext" for each round</Text>
        <Text>Step 5: Celebrate because you saved so much time!</Text>

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
    // textAlign: 'left',
  },
  sectionText: {
    textAlign: 'left',
    justifyContent: 'space-around',
    marginTop: 4,
    marginBottom: 4,
  },
});

export default About;