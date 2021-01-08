import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import About from './About';

const App = () => {
  const [showAbout, setAbout] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>WELCOME TO</Text>
      <Text style={styles.header}>nnext</Text>
      <Text></Text>
      <Button
        style={styles.newGameBtn}
        onPress={() => {
          console.log("hey you pressed the new game button")
        }}
        title="NEW GAME"
      />
      <Button
        style={styles.aboutBtn}
        onPress={() => {
          setAbout(!showAbout);
        }}
        title={showAbout ? "done reading about section" : "about nnext"}
      />
      <About
        show={showAbout}
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
  welcome: {
    fontSize: 50,
  },
  header: {
    fontSize: 120,
  },
  newGameBtn: {
    fontSize: 60,
  },
  aboutBtn: {
    fontSize: 60,
  },
});

export default App;