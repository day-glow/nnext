import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Header from './Header';
import About from './About';
import NewGameOptions from './NewGameOptions';

const App = () => {
  const [showHeader, setHeader] = useState(true);
  const [showAbout, setAbout] = useState(false);
  const [showNewGameOptions, setNewGameOptions] = useState(false);

  const [numPlayers, setNumPlayers] = useState(2);
  const [outcomeType, setOutcomeType] = useState("all");



  return (
    <View style={styles.container}>
      <Header
        show={showHeader}
      />

      <Button
        style={styles.newGameBtn}
        onPress={() => {
          setNewGameOptions(!showNewGameOptions);
          setHeader(!showHeader);
        }}
        title="NEW GAME"
      />
      <Button
        style={styles.aboutBtn}
        onPress={() => {
          //simple toggle (need to set if conditions)
          setAbout(!showAbout);
          setHeader(!showHeader);
        }}
        title={showAbout ? "done reading about section" : "about nnext"}
      />
      <About
        show={showAbout}
      />
      <NewGameOptions
        show={showNewGameOptions}
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
  newGameBtn: {
    fontSize: 60,
  },
  aboutBtn: {
    fontSize: 60,
  },
});

export default App;