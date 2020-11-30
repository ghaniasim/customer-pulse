import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Create = () => {
  // creating the object for the survey array

  const [teacherName, setTeacherName] = useState("");
  const [surveyName, setSurveyName] = useState("");
  const [questions, setQuestions] = useState([]);

  //Now creating the object for questions array

  const [questionNumber, setQuestionNumber] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [questionText, setQuestionText] = useState("");

  const updateInputVal = (val, prop) => {
    if (prop === "surveyName") {
      setSurveyName(val);
    }
    if (prop === "questionText") {
      setQuestionText(val);
    }
    setQuestionNumber(1);
  };

  //const surveyItem = { id: idNum, name: title, q1: question };
  //console.log("surveyItem", surveyItem);

  return (
    <View>
      <TextInput
        placeholder="Name of survey"
        value={surveyName}
        onChangeText={(val) => updateInputVal(val, "surveyName")}
      />
      <TextInput
        placeholder="Write your question"
        value={questionText}
        onChangeText={(val) => updateInputVal(val, "questionText")}
      />
    </View>
  );
};

export default Create;
