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
import { TextInput } from "react-native-gesture-handler";

const SurveyObject = ({ route, navigation }) => {
  const [survey, setSurvey] = useState(navigation.state.params.survey);

  const questions = survey.questions;

  const [num, setNum] = useState(0);

  const displayQuestion = questions[num].questionText;

  const id = questions[num]._id;

  const questionType = questions[num].questionType;

  var response;

  function updateQuestionType(type) {
    if (type === "Text") {
      response = <TextInput style={styles.inputStyle}></TextInput>;
    }
    if (type === "MCQ") {
      response = <Text>MCQ</Text>;
    }
    if (type === "YESNO") {
      response = (
        <View>
          <TouchableOpacity style={styles.button}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>No</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  updateQuestionType(questionType);

  return (
    <View style={styles.container}>
      <Text style={styles.surveyName}>{survey.surveyName}</Text>
      <Text style={styles.teacherName}>Created by: {survey.teacherName}</Text>
      <Text style={styles.numberOfQuestions}>
        Total number of questions: {questions.length}
      </Text>
      <Text>{displayQuestion}</Text>
      <Text>{id}</Text>
      <Text>{questionType}</Text>
      <View>{response}</View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setNum(num + 1);
        }}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3%",

    justifyContent: "center",
  },
  viewButton: {
    backgroundColor: "#ade8f4",
    height: 50,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: "5%",
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
  inputStyle: {
    width: "100%",
    marginBottom: 50,
    marginTop: 40,
    paddingBottom: 5,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default SurveyObject;
