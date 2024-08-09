import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.boxOne}> One </Text>
      <Text style={styles.boxTwo}> Two </Text>
      <Text style={styles.boxThree}> Three </Text>
      <Text style={styles.boxFour}> Four </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: '#ddd',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  boxOne: {
    flex: 6,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: 'gold',
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: 'coral',
    padding: 30,
  },
  boxFour: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 40,
  },
});
