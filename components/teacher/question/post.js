import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Button,
} from "react-native";

const Post = ({ navigation }) => {
  //obtaining the survey object created in create.js
  const [survey, setSurvey] = useState(navigation.state.params.survey);

  //posting the survey object recieved from create.js
  console.log("Ready to post:", survey);
  fetch("https://customer-pulse-backend.herokuapp.com/feedbacks/survey", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(survey),
  });
  return (
    <View style={{ backgroundColor: "#ffe5d9" }}>
      <Text style={styles.chooseText}>Summary</Text>
      <Text style={styles.chooseText}>{survey.surveyName}</Text>
      <Text style={styles.chooseText}>Survey by: {survey.teacherName}</Text>
      <FlatList
        style={{ marginTop: "8%", margin: "5%" }}
        keyExtractor={(question) => question.text}
        data={survey.questions}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.questionItem}>
              <Text>
                {item.questionNumber}: {item.questionText} -----{" "}
                {item.questionType}
              </Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      <TouchableOpacity
        style={styles.buttonBottom}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text>Confirm</Text>
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
  button: {
    backgroundColor: "#ade8f4",
    height: 50,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: "5%",
    marginLeft: "20%",
  },
  questionItem: {
    backgroundColor: "#ffb4a2",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: "5%",
  },
  typeButton: {
    backgroundColor: "#ade8f4",
    height: 50,
    width: "33.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: "5%",
  },
  buttonBottom: {
    backgroundColor: "#ade8f4",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: "20%",
  },
  inputStyle: {
    width: "80%",
    marginBottom: "5%",
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
    marginTop: "5%",
  },
  chooseText: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
    marginBottom: 20,
  },
  createSurvey: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 30,
    width: "100%",
    marginBottom: 20,
    marginTop: "7%",
  },
  inputQuestion: {
    marginBottom: "5%",
    textAlign: "center",
    borderColor: "#ccc",
    height: 50,
    width: "80%",
    marginTop: "5%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
  },
  inputQN: {
    marginBottom: "5%",
    textAlign: "center",
    borderColor: "#ccc",
    height: 50,
    width: "20%",
    marginTop: "5%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
  },
});

export default Post;
