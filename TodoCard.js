import React from 'react';
import {View, Text} from 'react-native';

export default function TodoCard({todo}) {
  return (
    <View style={styles.todoCard}>
    <Text style={styles.title}>{todo.title}</Text>
    <Text style={styles.content}>{todo.content}</Text>
  </View>
  )
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    todoCard: {
      flex: 1
    },
    title: {
  
    },
    content: {
  
    }
  });
}

