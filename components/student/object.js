import React, { useState, useEffect } from "react";
import CheckBox from "@react-native-community/checkbox";
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
import RadioButtonRN from "radio-buttons-react-native";

//Obtaining the entire survey object from previous screen (Data.js)
const SurveyObject = ({ route, navigation }) => {
  const [survey, setSurvey] = useState(navigation.state.params.survey);

  //taking out the questions array
  const questions = survey.questions;

  const [num, setNum] = useState(0);

  const displayQuestion = questions[num].questionText;

  const id = questions[num]._id;

  const questionType = questions[num].questionType;

  const questionOptions = questions[num].questionOptions;
  const data = [];
  const mapped = questionOptions.map((question) =>
    data.push({ label: question.option })
  );

  var response;

  const [answer, setAnswer] = useState();

  function updateQuestionType(type) {
    if (type === "Text") {
      response = (
        <TextInput
          style={styles.inputStyle}
          placeholder="Write your Answer"
          value={answer}
          onChangeText={setAnswer}
        ></TextInput>
      );
    }
    if (type === "Radio") {
      response = (
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => {
            setAnswer(e.label);
          }}
        />
      );
    }
    if (type === "Checkbox") {
      response = (
        <FlatList
          style={{ marginTop: "8%", margin: "5%" }}
          keyExtractor={(option) => option.option}
          data={questionOptions}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <CheckBox
                  disabled={false}
                  value={false}
                  onValueChange={(newValue) => {
                    if (newValue === true) {
                      setAnswer(item.option);
                      fetch(
                        `http://192.168.1.223:8001/feedbacks/questions/${id}`,
                        {
                          method: "PATCH",
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify(answerObject),
                        }
                      );
                    }
                  }}
                ></CheckBox>
                <Text>{item.option}</Text>
              </View>
            );
          }}
        ></FlatList>
      );
    }
  }

  updateQuestionType(questionType);

  const student = "kashif@kashif.com";

  const answerObject = { answer: answer, studentName: student };

  /*function postAnswer(ans) {
    fetch(`http://192.168.1.223:8001/feedbacks/questions/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ans),
    });
  }*/

  function clear() {
    setAnswer();
  }

  var realNumber = 0;

  /* function back(realNumber) {
    if (realNumber < questions.length) {
      realNumber + 1;
      setNum(realNumber);
    } else {
      navigation.navigate("Data");
    }
  }*/
  return (
    <View style={styles.container}>
      <Text style={styles.surveyName}>{survey.surveyName}</Text>
      <Text style={styles.teacherName}>Created by: {survey.teacherName}</Text>
      <Text style={styles.numberOfQuestions}>
        Total number of questions: {questions.length}
      </Text>

      <Text>{displayQuestion}</Text>

      <View>{response}</View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (num < questions.length - 1) {
            setNum(num + 1);
            console.log("num being printed:", num);
          } else {
            navigation.navigate("Data");
          }

          if (questionType == "Text" || questionType == "Radio") {
            fetch(`http://192.168.1.223:8001/feedbacks/questions/${id}`, {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(answerObject),
            });
          }

          clear();
        }}
      >
        <Text>Next</Text>
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
