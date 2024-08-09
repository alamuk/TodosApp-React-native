import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header';
import TodosItem from './components/TodosItem';
import AddTodos from './components/AddTodos';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'creat an apple', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevState) => {
      return prevState.filter((todos) => todos.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevState) => {
        return [{ text: text, key: Math.random().toString() }, ...prevState];
      });
    } else {
      Alert.alert('OOPS', 'It must be to over 3 chars long', [
        { text: 'Understood', onPress: () => console.log('alert close') },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <View style={styles.content}>
          <AddTodos submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodosItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingHorizontal:20, // padding right and left
  },
  content: {
    padding: 40,
    flex: 1,
  },

  list: {
    flex: 1,
    marginTop: 20,
  },
});
