/* Authored by: Charies Ann A. Hao, Jacob Andrew V. Masip, Ruvhie Kaye C. Prado, Johannabel DC. Valenzuela
Company: HAVADO CO
Project: BIKBUDS
Feature: [DCVA-003] Multiple Choice Quiz Sets Screen
Description: A collection of multiple-choice questions grouped together for a quiz session.
*/

import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const imageAspectRatio = 16 / 9;
const imageHeight = screenWidth / imageAspectRatio;

export default function QuizChoice() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Transparent Image */}
      <Image source={require("../../../assets/images/setmultiplecchoice.png")} style={styles.image} />

      {/* Full-Screen Box Below Image */}
      <View style={styles.fullScreenBox}>
        <Text style={styles.title}>Multiple Choice Quiz Sets</Text>
        <Text style={styles.subtitle}>Select a set to begin a quiz.</Text>

        {/* Scrollable Quiz Set Buttons */}
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {[...Array(10)].map((_, index) => (
            <TouchableOpacity
              key={index}
              style={styles.quizButton}
              onPress={() => {
                if (index === 0) {
                  router.push("/screens/Multiple Choice/questions");
                } else {
                  console.log(`Set ${index + 1} clicked (No screen yet)`);
                }
              }}
            >
              <Text style={styles.quizButtonText}>Set {index + 1}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/")}>
          <Ionicons name="home-outline" size={24} color="#9F9F9F" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/(tabs)/search")}>
          <Ionicons name="search-outline" size={24} color="#9F9F9F" />
          <Text style={styles.navText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={() => router.push("/(tabs)/profile")}>
          <Ionicons name="person-outline" size={24} color="#9F9F9F" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDEADF",
  },
  image: {
    width: screenWidth,
    resizeMode: "cover",
  },
  fullScreenBox: {
    width: "100%",
    flex: 1,
    backgroundColor: "#F5EFEB",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  scrollContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  quizButton: {
    backgroundColor: "#FFF",
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  quizButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 8,
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
    fontSize: 10,
    fontWeight: '600',
    color: "#9F9F9F"
  },
  navTextActive: {
    fontSize: 10,
    fontWeight: '600',
    color: "#9F9F9F"
  },
});

