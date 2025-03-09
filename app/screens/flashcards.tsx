import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function FlashcardsScreen() {
  const [cards] = useState([
    { question: 'What is your name?', answer: 'My name is John.' },
    { question: 'Where are you from?', answer: 'I am from Naga.' },
    { question: 'What do you do?', answer: 'I am a student.' },
  ]);
  
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.question}>{card.question}</Text>
          <Text style={styles.answer}>{card.answer}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    marginTop: 8,
    color: '#555',
  },
});
