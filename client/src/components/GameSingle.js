import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

function GameSingle({ show, numPlayers }) {
  if (!show) return null;

  //const [playersGrid, setPlayersGrid] = useState(null);
  //1-n for loop, create each player box
  let playersGrid = new Array(numPlayers).fill(null);

  if (numPlayers > 0) {
    for (let i = 0; i < numPlayers; i++) {
      playersGrid[i] = (
        <View style={styles.playerBox}>
          <Text style={styles.players}>
            {i + 1}
          </Text>
        </View>
      );
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.outcomeType}>Party Mode: ALL</Text>
      <Text style={styles.numberOfPlayers}>show num of players {numPlayers}</Text>

      <View style={styles.row}>
        <View style={styles.playerBox}/>
        <View style={styles.playerBox}/>
        <View style={styles.playerBox}/>
      </View>

        {playersGrid}


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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  outcomeType: {
    fontSize: 50,
  },
  row: {
    flexDirection: 'row',
  },
  playerBox: {
    width: 100,
    height: 100,
    margin: 4,
    borderColor: 'rgba(0, 0.5, 0.5, 0.15)',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#38E0B1',
    shadowColor: 'rgba(0, 0.5, 0.5, 0.15)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  players: {
    fontSize: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nnextBtn: {
    fontSize: 120,
  },
});

export default GameSingle;