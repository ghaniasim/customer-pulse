import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

const Data = ({ navigation }) => {
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState(false);

  async function getData() {
    const res = await fetch(`http://192.168.1.223:8001/feedbacks`);
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

  function AnsweredQuestions() {
    const questionArray = data.questions;
  }

  if (loaded) {
    data.reverse();
  }

  return (
    <View>
      <Text style={styles.createSurvey}>Student Profile</Text>
      <Text style={styles.createSurvey}>Student Name</Text>
      <FlatList
        style={{ marginTop: "15%", margin: "5%" }}
        keyExtractor={(survey) => survey._id}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
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
