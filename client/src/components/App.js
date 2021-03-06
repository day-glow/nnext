import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Header from './Header';
import About from './About';
import NewGameOptions from './NewGameOptions';
import GameAll from './GameAll';

const App = () => {
  const [showHeader, setHeader] = useState(true);
  const [showAbout, setAbout] = useState(false);
  const [showNewGameOptions, setNewGameOptions] = useState(false);
  const [showGameAll, setGameAll] = useState(false);

  const [numPlayers, setNumPlayers] = useState(2);
  const [outcomeType, setOutcomeType] = useState(null);
  const [start, setStart] = useState(false);

  function updateNumPlayers(num) {
    setNumPlayers(num);
  };

  function changeOutcomeType(type) {
    setOutcomeType(type);
  };

  useEffect(() => {
    //show game page if selection is on
    //if game type matches and "start game" is selected
    if (start === true && outcomeType === "all" && numPlayers > 0) {
      setGameAll(true);
      setHeader(false);
      setAbout(false);
      setNewGameOptions(false);
    }
  }, [start]);

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
      <Text style={{fontWeight: 'bold'}}>TESTING INPUT: {start}</Text>
      <NewGameOptions
        show={showNewGameOptions}
        updateNumPlayers={updateNumPlayers}
        changeOutcomeType={changeOutcomeType}
        setStart={setStart}
      />

      <GameAll
        show={showGameAll}
        numPlayers={numPlayers}
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
  game: {

  },
});

export default App;