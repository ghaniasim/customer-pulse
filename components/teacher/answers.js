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
  //recieving the data sent from previous screen via react navigation
  const [questionObject, setQuestionObject] = useState(
    navigation.state.params.questionObject
  );

  //answers array of the question
  const answers = questionObject.answers;
  //question text of the question object
  const question = questionObject.questionText;
  //question type of the question object (Text, Radio or Checkbox)
  const questionType = questionObject.questionType;
  //the options of this question
  const questionOptions = questionObject.questionOptions;

  //mapping the question options to another array to display those strings in a flatlist
  const optionStrings = [];
  const answerMapped = answers.map((answer) =>
    optionStrings.push(answer.answer)
  );

  //a function to calculate the value how many times a certain answer option has been chosen
  function countInArray(array, what) {
    return array.filter((item) => item == what).length;
  }
  const data = [];
  //random color generator for the graph
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //chart will only show up in case MCQs and not text answers
  var chart;
  if (questionType == "Checkbox" || questionType == "Radio") {
    questionOptions.map((question) =>
      data.push({
        label: question.option,
        value: countInArray(optionStrings, question.option),
        color: getRandomColor(),
      })
    );

    //creating the chart with PureChart library
    chart = <PureChart data={data} type="pie" />;
  }

  var numOfAnswers = answers.length;

  if (numOfAnswers === 0) {
    numOfAnswers = "No answers have been submitted yet";
  }

  //flatlist is not displayed in case of the checkbox type questions
  var list;
  if (questionType == "Text" || questionType == "Radio") {
    list = (
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
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.numberOfAnswers}>{question}</Text>
      <Text style={styles.numberOfAnswers}>
        Number of Answers: {numOfAnswers}
      </Text>

      <View style={{ alignItems: "center" }}>{chart}</View>

      <View>{list}</View>
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
