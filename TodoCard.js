import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TodoCard({todo}) {
  return (
    <View style={styles.todoCard}>
    <Text style={styles.title}>{todo.title}</Text>
    <Text style={styles.content}>{todo.content}</Text>
  </View>
  )
}

  const styles = StyleSheet.create({
    todoCard: {
      flex: 1
    },
    title: {
  
    },
    content: {
  
    }
  });

