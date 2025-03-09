/* Authored by: Charies Ann A. Hao, Jacob Andrew V. Masip, Ruvhie Kaye C. Prado, Johannabel DC. Valenzuela
Company: HAVADO CO
Project: BIKBUDS
Feature: [DCVA-002] Home Screen
Description: Serves as the main hub where users can start learning, view 
             instructions, or navigate to other sections.
*/

import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const buttons = [
    { 
      title: 'Words & Phrases', 
      description: 'Common Expressions, Greetings, Directions, Numbers, etc',
      image: require('@/assets/images/bicol.png'),
      route: () => router.push('/screens/bicolPhrases') 
    },
    { 
      title: 'Multiple Choice', 
      description: 'Test your Bikol skills',
      image: require('@/assets/images/multiple.png'),
      route: () => router.push('/screens/Multiple Choice/multipleChoice') 
    },
    { 
      title: 'Flashcards', 
      description: 'Common Expressions, Greetings, Directions, Numbers, etc',
      image: require('@/assets/images/flashcards.png'),
      route: () => router.push('/screens/flashcards') 
    },
    { 
      title: 'Picture Word Match', 
      description: 'Match pictures with words.',
      image: require('@/assets/images/pictureword.png'),
      route: () => router.push('/screens/flashcards') 
    },
  ];

  return (
    <ScrollView>
      <View>
        <Image 
          source={require('@/assets/images/header.png')} 
          style={{ width: '100%', height: 178, resizeMode: 'cover' }} 
        />
      </View>
        {/* Button Grid */}
        <View style={styles.gridContainer}>
        {buttons.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={item.route}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 178,
    resizeMode: 'cover',
    backgroundColor: '#F5EFEB',
    zIndex: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between', 
    paddingHorizontal: 30,
    marginTop: 30,
    marginBottom: 40,
  },
  card: {
    width: '47%',
    aspectRatio: 1, 
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F5EFEB',
    elevation: 3,
    marginBottom: 20, 
  },
  cardImage: {
    width: '100%',
    height: '60%',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cardDescription: {
    fontSize: 11,
    color: 'gray',
    marginBottom: 18,
  },
});
