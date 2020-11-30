import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import firebase from "../database/firebase";
import Survey from "./survey";

var userEmail;
const Profile = (props) => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      firebase.auth().currentUser;
      userEmail = user.email;
      console.log("userEmail:", userEmail);
    }
  });

  const [surveys, setSurveys] = useState();
  const [loaded, setLoaded] = useState(false);

  async function getData() {
    const res = await fetch(`http://192.168.1.223:8001/feedbacks/Kashif`);
    res
      .json()
      .then((res) => {
        setSurveys(res);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  if (loaded) {
    console.log("surveyData", surveys);
  }

  return (
    <View style={{ flex: 1 }}>
      <View styles={{ marginBottom: 20 }}>
        <Text style={styles.profileText}>Profile </Text>

        <Text style={styles.nameText}>{userEmail}</Text>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Signup");
          }}
          style={styles.roundButton1}
        >
          <Text style={{ fontSize: 60 }}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ marginTop: "15%", margin: "5%" }}
        keyExtractor={(survey) => survey.id}
        data={surveys}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate("Survey", {
                  id: item,
                });
              }}
            >
              <Text style={styles.surveyTitle}>{item.surveyName}</Text>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: "15%",
    paddingTop: "7%",
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
    marginTop: 10,
  },
  surveyTitle: {
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 20,
  },
  profileText: {
    textAlign: "center",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 30,
    width: "100%",
    marginBottom: 20,
  },
  nameText: {
    textAlign: "left",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  roundButton1: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "orange",
    position: "absolute",
    right: 0,
    marginTop: 50,
    margin: 15,
  },
});

export default Profile;