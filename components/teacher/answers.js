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
import PureChart from "react-native-pure-chart";

const Answers = ({ route, navigation }) => {
  const [questionObject, setQuestionObject] = useState(
    navigation.state.params.questionObject
  );

  const answers = questionObject.answers;
  const question = questionObject.questionText;
  const questionType = questionObject.questionType;
  const questionOptions = questionObject.questionOptions;

  const optionStrings = [];
  const answerMapped = answers.map((answer) =>
    optionStrings.push(answer.answer)
  );

  console.log("Options Strings:", optionStrings);

  function countInArray(array, what) {
    return array.filter((item) => item == what).length;
  }
  const data = [];

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  var chart;
  if (questionType == "Checkbox" || questionType == "Radio") {
    questionOptions.map((question) =>
      data.push({
        label: question.option,
        value: countInArray(optionStrings, question.option),
        color: getRandomColor(),
      })
    );

    chart = <PureChart data={data} type="pie" />;
  }

  console.log("Data array for pie chart:", data);

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

      <View>{chart}</View>

      <FlatList
        keyExtractor={(answerObject) => answerObject._id}
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
