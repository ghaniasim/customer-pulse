import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import firebase from "../../database/firebase";

const Data = ({ navigation }) => {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);

  async function getData() {
    const res = await fetch(
      `https://customer-pulse-backend.herokuapp.com/feedbacks`
    );
    res
      .json()
      .then((res) => {
        setData(res);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  useEffect(() => {
    getData();
  }, [data]);

  var userName = firebase.auth().currentUser.email;

  function AnsweredQuestions() {
    const questionArray = data.questions;
  }

  if (loaded) {
    data.reverse();
  }

  function ansCheck(item) {
    var checked;
    const questionArray = item.questions;
    questionArray.map((obj) => {
      obj.answers.map((answer) => {
        if (answer.studentName == userName) {
          checked = true;
        }
      });
    });
    return checked;
  }

  return (
    <View style={{ backgroundColor: "#ffe5d9" }}>
      <Text style={styles.Text}>Surveys</Text>
      <FlatList
        style={{ marginTop: "15%", margin: "5%" }}
        keyExtractor={(survey) => survey._id}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={ansCheck(item) ? styles.buttonA : styles.button}
              onPress={() => {
                if (!ansCheck(item))
                  navigation.navigate("SurveyObject", {
                    survey: item,
                  });
              }}
            >
              <Text style={styles.surveyTitle}>
                {item.surveyName} by {item.teacherName}
              </Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Data;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: "15%",
    paddingTop: "3%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#ade8f4",
    elevation: 2, // Android
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: 5,
  },
  buttonA: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#ffffff",
    elevation: 2, // Android
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: 5,
  },
  Text: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 30,
    width: "100%",
    marginBottom: "3%",
    marginTop: "5%",
  },
  createSurvey: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 30,
    width: "100%",
    marginBottom: 5,
    marginTop: "3%",
  },
});
