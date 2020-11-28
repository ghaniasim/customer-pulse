import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Header,
  TouchableOpacity,
  TextInput,
} from "react-native";
import firebase from "../database/firebase";

const SurveyType = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Choose a Suvey Type:</Text>
      <Text style={styles.nameText}>
        Create survey with text based questions
      </Text>
      <Button
        title="Create"
        onPress={() => {
          props.navigation.navigate("CreateSurvey");
        }}
      ></Button>
      <Text style={styles.nameText}>Create survey with Yes/No questions</Text>
      <Button
        title="Create"
        onPress={() => {
          props.navigation.navigate("YNsurvey");
        }}
      ></Button>
      <Text style={styles.nameText}>
        Create survey with Multiple Choice Questions
      </Text>
      <Button
        title="Create"
        onPress={() => {
          props.navigation.navigate("MCQsurvey");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: "5%",
  },
  nameText: {
    textAlign: "left",
    color: "#023e8a",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 70,
    marginLeft: 10,
    marginBottom: 10,
  },
});

export default SurveyType;
