import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

const Create = ({ navigation }) => {
  // creating the object for the survey array

  const [teacherName, setTeacherName] = useState(
    navigation.state.params.teacherName
  );

  const [surveyName, setSurveyName] = useState("");
  const [questions, setQuestions] = useState([]);

  //Now creating the object for questions array

  const surveyObject = {
    teacherName: teacherName,
    surveyName: surveyName,
    questions: [
      {
        answers: [
          {
            answer: "yes",
          },
        ],

        questionNumber: "1",
        questionType: "YESNO",
        questionText: "Are you working on your project?",
      },
    ],
  };

  return (
    <View>
      <Text style={styles.createSurvey}>Create Your Survey</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name of survey"
        value={surveyName}
        onChangeText={setSurveyName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Question");
        }}
      >
        <Text>Add Questions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBottom}>
        <Text>Create Survey</Text>
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
  buttonBottom: {
    backgroundColor: "#ade8f4",
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: "100%",
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
export default Create;
