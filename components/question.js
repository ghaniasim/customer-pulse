import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Question = () => {
  const [questionNumber, setQuestionNumber] = useState();
  const [questionType, setQuestionType] = useState("");
  const [questionText, setQuestionText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder="Write your question"
        value={questionText}
        onChangeText={setQuestionText}
      />
      <View>
        <Text style={styles.chooseText}>Choose answer category:</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>YES/NO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>MCQ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Question;

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
});
