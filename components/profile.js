import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "../database/firebase";
import Data from "./data";
import Survey from "./survey";

const Profile = () => {
  var name, email;

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var user = firebase.auth().currentUser;

      if (user != null) {
        name = user.name;
        email = user.email;
        window.alert("success " + email);
      }
    } else {
      // No user is signed in.
      Window.reload();
    }
  });

  const surveyArray = Data;

  console.log("ABC", surveyArray);

  function createSurvey(item) {
    return <Survey name={item.name} />;
  }

  return <View style={styles.container}>{surveyArray.map(createSurvey)}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
