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
import RadioButtonRN from "radio-buttons-react-native";
import { LogBox } from "react-native";

const Create = ({ navigation }) => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
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
  const [questionOptions, setQuestionOptions] = useState([]);

  // the question object

  const question = {
    answers: [],

    questionNumber: questionNumber,
    questionType: questionType,
    questionText: questionText,
    questionOptions: questionOptions,
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

  //Data for radio buttons
  const data = [
    {
      label: "Text",
    },
    {
      label: "Multiple Choice Question",
    },
  ];

  const [MCQtype, setMCQtype] = useState();
  // data for MCQ radio buttons
  const option = [
    {
      label: "Respondent can select one option",
    },
    {
      label: "Respondent can select multiple options",
    },
  ];
  //if the user clicks the text radio button then MCQ and Options are null otherwise MCQ will have options
  function MCQ(e) {
    if (e.label == "Text") {
      setMCQtype();

      setOptionText();
    } else {
      setMCQtype(option);
    }
  }

  //this function checks which radio button was clicked and gives the text input to write otpions
  function RadioCheck(e) {
    if (e.label == "Respondent can select one option") {
      setQuestionType("Radio");

      setOptionText(optionTextInput);
    } else {
      setQuestionType("Checkbox");

      setOptionText(optionTextInput);
    }
  }

  const [optionText, setOptionText] = useState();

  const [WroteOption, setWroteOption] = useState();
  var choice;

  const optionTextInput = (
    <TextInput
      style={styles.inputOption}
      placeholder="Write you option"
      value={choice}
      onChangeText={(val) => {
        setWroteOption({ option: val });
      }}
    ></TextInput>
  );

  //returning

  return (
    <ScrollView style={{ backgroundColor: "#ffe5d9" }}>
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
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.inputQN}
          placeholder="Number"
          value={questionNumber}
          onChangeText={setQuestionNumber}
        />

        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.inputQuestion}
          placeholder="Write your question"
          value={questionText}
          onChangeText={setQuestionText}
        />
      </View>

      {/*below are radio buttons to choose answer type (Text or MCQ(Radio) or MCQ(Checkbox))*/}
      <Text style={styles.chooseText}>Choose answer category:</Text>

      <View>
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => {
            MCQ(e);
            setQuestionType("Text");
          }}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={{ textAlign: "center" }}>--------</Text>
        </View>

        <RadioButtonRN
          data={MCQtype}
          selectedBtn={(e) => {
            RadioCheck(e);
          }}
        />
        <View>{optionText}</View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          questionOptions.push(WroteOption);
          console.log("Options:", questionOptions);
          setWroteOption();
        }}
      >
        <Text>Add Option</Text>
      </TouchableOpacity>

      <FlatList
        style={{ marginTop: "8%", margin: "5%" }}
        keyExtractor={(option) => option.option}
        data={questionOptions}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.questionItem}>
              <Text>{item.option}</Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>

      {/*Below is the button to add question*/}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          questionArray.push(question);
          Clear();
          setQuestionOptions([]);
        }}
      >
        <Text>Add Question</Text>
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
    height: 70,
    width: "90%",

    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
  },
  inputOption: {
    margin: "11%",
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
