import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    {title: "First Todo", content: "This is my first task"},
    {title: "Second Todo", content: "This is my second task"},
    {title: "Third Todo", content: "This is my third task"}
  ]);

  const showTodos = () => todos.map(todo => {
    <View style={styles.card}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.content}>{todo.content}</Text>
    </View>
  })

  return (
    <View style={styles.container}>
      {showTodos()}
      {/* <StatusBar style="auto" /> */}
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
  card: {

  },
  title: {

  },
  content: {

  }
});
