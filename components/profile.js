import React, { Fragment, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Button,
} from "react-native";
import firebase from "../database/firebase";
import Data from "./Data";
import Detail from "./Detail";

const Profile = (props) => {
  var userName, userEmail;

  const [loaded, setLoading] = useState(false);

  function getCurrentUser() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var currentUser = firebase.auth().currentUser;

        userName = user.displayName;

        userEmail = user.email;

        /* if (user != null) {
          setLoading(true);
          userName = user.name;
          userEmail = user.email;
          //window.alert("success " + email);
        }*/
      }
    });
  }

  getCurrentUser();

  const surveyArray = Data;

  console.log("ABC", surveyArray);

  //console.log("userEmail", userEmail);

  //{loaded ? { userEmail } : <h1>Loading ...</h1>}
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.profileText}>Profile {userEmail}</Text>

      <Text style={styles.nameText}>John Doe</Text>
      <Text style={styles.nameText}>Las Vegas, USA</Text>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("SurveyType");
        }}
        style={styles.roundButton1}
      >
        <Text style={{ fontSize: 60 }}>+</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(survey) => survey.id}
        data={surveyArray}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                <Detail id={item.id} />;
                console.log("item.id", item.id);
                props.navigation.navigate("Detail");
              }}
            >
              <Text style={styles.surveyTitle}>{item.name}</Text>
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
