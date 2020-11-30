import React, { useState, useEffect } from "react";
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

const Survey = ({ route, navigation }) => {
  const [survey, setSurvey] = useState({});
  const [loaded, setLoaded] = useState(false);

  async function getData() {
    const res = await fetch(
      `http://192.168.1.223:8001/feedbacks/id/5fc25bb6da3fe82b6ce9e759`
    );
    res
      .json()
      .then((res) => {
        setSurvey(res);
        setLoaded(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const [id, setID] = useState(navigation.state.params.id);

  return (
    <View>
      {loaded ? (
        <Text>{survey.questions[0].questionText}</Text>
      ) : (
        <Text>loading ....</Text>
      )}

      <Text>{id._id}</Text>
    </View>
  );
};

export default Survey;
