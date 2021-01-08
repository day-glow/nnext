import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import About from './About';

const App = () => {
  const [showAbout, setAbout] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput>Name:</TextInput>
      <Text>WELCOME TO</Text>
      <Text>nnext</Text>
      <Text></Text>
      <Button
        onPress={() => {
          console.log("hey you pressed the new game button")
        }}
        title="NEW GAME"
      />
      <Button
        onPress={() => {
          setAbout(!showAbout);
        }}
        title={showAbout ? "read about" : "about nnext"}
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
});

export default App;