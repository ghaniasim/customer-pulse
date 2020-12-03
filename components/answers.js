import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Button,
  ScrollView,
} from "react-native";

const Answers = ({ route, navigation }) => {
  const [questionObject, setQuestionObject] = useState(
    navigation.state.params.questionObject
  );

  const answers = questionObject.answers;
  const question = questionObject.questionText;

  var numOfAnswers = answers.length;

  if (numOfAnswers === 0) {
    numOfAnswers = "No answers have been submitted yet";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.numberOfAnswers}>{question}</Text>
      <Text style={styles.numberOfAnswers}>
        Number of Answers: {numOfAnswers}
      </Text>
      <FlatList
        keyExtractor={(answerObject) => answerObject.answer}
        data={answers}
        renderItem={({ item }) => {
          return (
            <ScrollView>
              <Text>{item.studentName}</Text>
              <View style={styles.button}>
                <Text style={{ margin: "5%" }}>{item.answer}</Text>
              </View>
            </ScrollView>
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

    justifyContent: "center",
  },
  button: {
    backgroundColor: "#ade8f4",
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: 10,
  },
  numberOfAnswers: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
    marginBottom: 20,
  },
});

export default Answers;
