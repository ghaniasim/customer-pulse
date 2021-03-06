import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Button,
} from "react-native";

const Survey = ({ route, navigation }) => {
  //The following survey constant recieves the data sent from the profile screen via
  //react navigation. It is the whole survey object.
  const [survey, setSurvey] = useState(navigation.state.params.survey);

  //Taking the questions array of the recieved survey
  const questions = survey.questions;

  return (
    <View style={styles.container}>
      <Text style={styles.surveyName}>{survey.surveyName}</Text>
      <Text style={styles.teacherName}>Created by: {survey.teacherName}</Text>
      <Text style={styles.numberOfQuestions}>
        Total number of questions: {questions.length}
      </Text>
      {/*The flatlist here takes the questions array and displays the information from the objects of the array */}
      <FlatList
        keyExtractor={(question) => question._id}
        data={questions}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Answers", {
                  questionObject: item,
                });
              }}
            >
              <Text>
                {item.questionNumber} :{item.questionText}
              </Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3%",
    backgroundColor: "#ffe5d9",

    justifyContent: "center",
  },
  button: {
    backgroundColor: "#ade8f4",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: 10,
  },
  surveyName: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 30,
    width: "100%",
    marginBottom: 20,
  },
  teacherName: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
    marginBottom: 20,
  },
  numberOfQuestions: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 15,
    width: "100%",
    marginBottom: 20,
  },
});

export default Survey;
