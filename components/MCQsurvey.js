import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import firebase from "../database/firebase";
import Data from "./Data";
import Detail from "./Detail";

const MCQsurvey = (props) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");

  updateInputVal = (val, prop) => {
    if (prop === "id") {
      setId(val);
    }
    if (prop === "title") {
      setTitle(val);
    }
    if (prop === "question") {
      setQuestion(val);
    }
  };

  function createSurvey() {
    if ({ id } === "" && { title } === "" && { question } === "") {
      Window.alert("Enter details to form!");
    }
    const idNum = parseInt(id);
    const surveyItem = { id: idNum, name: title, q1: question };
    console.log("surveyItem", surveyItem);

    Data.push(surveyItem);

    props.navigation.navigate("Profile");
  }

  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder="Write your survey id"
        value={id}
        onChangeText={(val) => updateInputVal(val, "id")}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Write your title"
        value={title}
        onChangeText={(val) => updateInputVal(val, "title")}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Write your question"
        value={question}
        onChangeText={(val) => updateInputVal(val, "question")}
      />

      <Button
        title="Add more questions"
        onPress={() => {
          <TextInput
            style={styles.inputStyle}
            placeholder="Write your question"
            value={question}
            onChangeText={(val) => updateInputVal(val, "question")}
          ></TextInput>;
        }}
      />

      <Text style={{ margin: 30, marginLeft: "49%" }}>-</Text>
      <Button title="Create" onPress={() => createSurvey()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  inputStyle: {
    width: "80%",
    margin: 50,
    padding: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
});
export default MCQsurvey;
