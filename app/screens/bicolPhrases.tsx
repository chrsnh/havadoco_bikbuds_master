import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons

export default function BicolPhrases() {
  const [sounds, setSounds] = useState<{ [key: string]: Audio.Sound }>({});
  const [currentSound, setCurrentSound] = useState<Audio.Sound | null>(null);
  const [playingKey, setPlayingKey] = useState<string | null>(null);

  useEffect(() => {
    async function loadSounds() {
      const soundFiles: { [key: string]: any } = {
        ano: require('@/assets/sounds/ano.mp3'),
        kasta: require('@/assets/sounds/kasta.mp3'),
        pagal: require('@/assets/sounds/pagal.mp3'),
      };

      const loadedSounds: { [key: string]: Audio.Sound } = {};
      for (const key in soundFiles) {
        const { sound } = await Audio.Sound.createAsync(soundFiles[key]);
        loadedSounds[key] = sound;
      }

      setSounds(loadedSounds);
    }

    loadSounds();

    return () => {
      Object.values(sounds).forEach((sound) => sound?.unloadAsync());
    };
  }, []);

  async function playSound(key: string) {
    if (currentSound) {
      await currentSound.stopAsync();
      setPlayingKey(null);
    }

    if (playingKey === key) {
      setPlayingKey(null);
      return;
    }

    const sound = sounds[key];
    if (sound) {
      await sound.setPositionAsync(0);
      await sound.playAsync();
      setCurrentSound(sound);
      setPlayingKey(key);

      sound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded || status.didJustFinish) {
          setPlayingKey(null);
        }
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Ano man saimo</Text>
        <TouchableOpacity onPress={() => playSound('ano')}>
          <Ionicons name={playingKey === 'ano' ? 'pause' : 'play'} size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Garo ka kasta</Text>
        <TouchableOpacity onPress={() => playSound('kasta')}>
          <Ionicons name={playingKey === 'kasta' ? 'pause' : 'play'} size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Pagal na ako</Text>
        <TouchableOpacity onPress={() => playSound('pagal')}>
          <Ionicons name={playingKey === 'pagal' ? 'pause' : 'play'} size={20} color="black" />
        </TouchableOpacity>
      </View>


      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="home-outline" size={24} color="#3478F6" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="search-outline" size={24} color="#666" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person-outline" size={24} color="#666" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    backgroundColor: 'pink',
    paddingVertical: 17,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 15,
    fontWeight: 'medium',
    color: 'black',
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 5,
    borderTopWidth: 0.5,
    borderColor: "#CCC",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navButton: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#666",
  },
  navTextActive: {
    fontSize: 10,
    color: "#3478F6",
  },
});
