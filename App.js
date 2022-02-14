import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    {title: "First Todo", content: "This is my first task"},
    {title: "Second Todo", content: "This is my second task"},
    {title: "Third Todo", content: "This is my third task"}
  ])

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
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
