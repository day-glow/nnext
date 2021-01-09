import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function NewGameOptions({ show, updateNumPlayers, changeOutcomeType, setStart }) {
  if (!show) return null;

  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [showInvalid, setInvalid] = useState(false);
  const [outcomeTypeSelection, setOutcomeTypeSelection] = useState(null);

  useEffect(() => {
    //send game options to app level
    updateNumPlayers(numberOfPlayers);
    //start game
  }, [numberOfPlayers]);

  useEffect(() => {
    //send game options to app level
    changeOutcomeType(outcomeTypeSelection);
    //start game
  }, [outcomeTypeSelection]);

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
        <TextInput
          style={styles.numPlayersSelection}
          placeholder="How many players in this game?"
          //check for invalid text, num, max, min
          onChangeText={numberInput => {
            if (RegExp('^[0-9]$').test(numberInput)) {
              setInvalid(false);
              setNumberOfPlayers(numberInput);
            } else if (numberInput === '') {
              setInvalid(false);
              setNumberOfPlayers(2);
            } else {
              setInvalid(true);
            }
          }}
          defaultValue={2}
        />
        <Text style={styles.section}>{showInvalid ? "INVALID NUMBER (i.e. 1-100)" : null}</Text>
        <Text style={styles.section}>TESTING INPUT: {numberOfPlayers}</Text>

        <Text style={styles.section}>Type of Outcome</Text>
        <Button
          style={styles.outcomeTypeBtn}
          onPress={() => {
            setOutcomeTypeSelection("single");
          }}
          title="SINGLE"
        />
        <Button
          style={styles.outcomeTypeBtn}
          onPress={() => {
            setOutcomeTypeSelection("oneByOne");
          }}
          title="ONE-BY-ONE"
        />
        <Button
          style={styles.outcomeTypeBtn}
          onPress={() => {
            setOutcomeTypeSelection("all");
          }}
          title="ALL"
        />

        <Text style={styles.section}>Advanced Settings (coming soon)</Text>

        <Button
        style={styles.startGameBtn}
        onPress={() => {
          //send useEffect back to App, toggle pages to show game
          setStart(true);
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
  numPlayersSelection: {

  },
  outcomeTypeBtn: {

  },
  startGameBtn: {
    fontSize: 60,
  },
});

export default NewGameOptions;