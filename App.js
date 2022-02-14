import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { TodoCard } from 'TodoCard.js'

export default function App() {
  const [todos, setTodos] = useState([
    {title: "First Todo", content: "This is my first task"},
    {title: "Second Todo", content: "This is my second task"},
    {title: "Third Todo", content: "This is my third task"}
  ]);

  const showTodos = () => todos.map(todo => {
    return 
  })

  return (
    <SafeAreaView style={styles.container}>
      {showTodos()}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}


