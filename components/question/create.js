import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

const Create = ({ navigation }) => {
  // creating the object for the survey array

  const [teacherName, setTeacherName] = useState(
    navigation.state.params.teacherName
  );

  const [surveyName, setSurveyName] = useState("");
  const [questionArray, setQuestionArray] = useState([]);

  //Now creating the object for questions array

  const [questionNumber, setQuestionNumber] = useState();
  const [questionType, setQuestionType] = useState("");
  const [questionText, setQuestionText] = useState("");

  // the question object

  const question = {
    answers: [],

    questionNumber: questionNumber,
    questionType: questionType,
    questionText: questionText,
  };

  //the survey object

  const surveyObject = {
    teacherName: teacherName,
    surveyName: surveyName,
    questions: questionArray,
  };

  function Clear() {
    setQuestionNumber("");
    setQuestionText("");
    setQuestionType("");
  }

  //returning

  return (
    <ScrollView>
      {/*Topic of the page*/}
      <Text style={styles.createSurvey}>Create Your Survey</Text>

      {/*Asking for survey title in text input*/}
      <TextInput
        style={styles.inputStyle}
        placeholder="Name of survey"
        value={surveyName}
        onChangeText={setSurveyName}
      />

      {/*The view below asks Qnestion no. and question text*/}
      <View style={{ flexDirection: "row" }}>
        <TextInput
          style={styles.inputQN}
          placeholder="Number"
          value={questionNumber}
          onChangeText={setQuestionNumber}
        />

        <TextInput
          style={styles.inputQuestion}
          placeholder="Write your question"
          value={questionText}
          onChangeText={setQuestionText}
        />
      </View>

      {/*below are three buttons to choose answer type (Text, YESNO or MCQ)*/}
      <Text style={styles.chooseText}>Choose answer category:</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.typeButton}
          onPress={() => {
            setQuestionType("Text");
          }}
        >
          <Text>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.typeButton}
          onPress={() => {
            setQuestionType("YESNO");
          }}
        >
          <Text>YES/NO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.typeButton}
          onPress={() => {
            setQuestionType("MCQ");
          }}
        >
          <Text>MCQ</Text>
        </TouchableOpacity>
      </View>

      {/*Below is the button to add question*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          questionArray.push(question);
          Clear();
        }}
      >
        <Text>Add</Text>
      </TouchableOpacity>

      <FlatList
        style={{ marginTop: "8%", margin: "5%" }}
        keyExtractor={(question) => question.text}
        data={questionArray}
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

      {/*Create and post the survey to server*/}
      <TouchableOpacity
        style={styles.buttonBottom}
        onPress={() => {
          navigation.navigate("Post", { survey: surveyObject });
          //console.log("survey object is here:", surveyObject);
        }}
      >
        <Text>Create Survey</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginTop: "25%",
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
export default Create;
