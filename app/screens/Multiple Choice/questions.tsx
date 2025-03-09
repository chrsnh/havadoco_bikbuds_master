/* Authored by: Charies Ann A. Hao, Jacob Andrew V. Masip, Ruvhie Kaye C. Prado, Johannabel DC. Valenzuela
Company: HAVADO CO
Project: BIKBUDS
Feature: [DCVA-004] Multiple Choice Questions Screen
Description: Individual quiz questions with four answer choices, where 
             users select the correct option.
*/

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

const questions = [
  { question: "What is the Bicol word for 'Week'?", options: ["Taon", "Semana", "Bulan", "Aga"], answer: 1 },
  { question: "Ano ang bikol, ng salitang ingles na Monkey?", options: ["Ukay", "Unggoy", "Ikos", "Itlog"], answer: 0 },
  { question: "Ano ang bikol, ng salitang ingles na Tomorrow?", options: ["Kahapon", "Bukas", "Kidamlag", "Banggi"], answer: 2 },
  { question: "Sisay an mas magayon?", options: ["Liza Soberano", "Kathryn Bernardo", "Barbie Imperial", "Anne Curtis"], answer: 3 },
  { question: "Salitang aso sa bikol", options: ["Aso", "Ikos", "Dog", "Ayam"], answer: 3 },
  { question: "Inis sa salitang bikol?", options: ["Bungog", "Uyam", "Asar", "Galit"], answer: 1 },
  { question: "2 + 2 = ?", options: ["2", "4", "6", "8"], answer: 1 },
  { question: "Sino ang best Boxer P4P?", options: ["Mayweather", "Pacquiao", "Canelo", "Bivol"], answer: 1 },
  { question: "3 + 3?", options: ["5", "6", "7", "none of the above"], answer: 3 },
  { question: "Sino ang mas gwapo?", options: ["Coco Martin", "Daniel Padilla", "James Reid", "Xander Ford"], answer: 2 },
];

export default function QuizScreen() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.quizBox}>
          
          <Text style={styles.title}>Quiz Completed!</Text>
          <Text style={styles.subtitle}>Your Score: {score} / {questions.length}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setShowScore(false)}>
            <Text style={styles.buttonText}>Retake Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizBox}>
          <Text style={styles.header}>Multiple Choice: Set 1</Text>
          <Text style={styles.instruction}>Choose the correct answer.</Text>


      <View style={styles.progressbar}>
      <Text style={styles.scoreText}>Current Score: {score}/10</Text>
      <Progress.Bar 
        progress={score / 10} 
        width={150} 
        height={10} 
        borderRadius={5}
        color={score > 0 ? "#4B93C1" : "#F44336"}
        borderWidth={0}
        unfilledColor="#e0e0e0"
      />
    </View>


          <View style={styles.questionBox}>
            <Text style={styles.question}>{questions[currentQuestion].question}</Text>
          </View>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.option} onPress={() => handleAnswer(index)}>
              <Text style={styles.optionText}>{String.fromCharCode(65 + index)}. {option}</Text>
            </TouchableOpacity>
          ))}


        </View>
        
      )}
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
    paddingTop: 15,
    alignItems: "center",
    backgroundColor: "#F5EFEB",
  },
  progressbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#90C7EB",
    padding: 18,
    borderRadius: 10,
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 15,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  quizBox: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start", 
    marginBottom: 2,
  },
  
  instruction: {
    fontSize: 14,
    color: "#666",
    textAlign: "left", 
    alignSelf: "flex-start", 
    marginBottom: 15,
  },
  
  questionBox: {
    width: "100%",
    backgroundColor: "#D2EBFF",
    padding: 10,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },

  question: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    flexShrink: 1,
  },

  option: {
    width: '100%',
    alignItems: "center",
    backgroundColor: "#CDE6F7",
    padding: 18,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1, 
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
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
  scoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },
});


