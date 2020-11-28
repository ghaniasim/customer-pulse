import Data from "./Data";
import Question from "./CreateSurvey";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import Profile from "./profile";

const Detail = (props) => {
  const survey = props.id;
  console.log("Survey", survey);
  return (
    <FlatList
      keyExtractor={(survey) => survey}
      data={survey}
      renderItem={({ item }) => {
        return (
          <Text>
            {item.q1}
            {item.q2}
          </Text>
        );
      }}
    ></FlatList>
  );
};

export default Detail;

/*function createQuestion(item) {
    return (
      <View>
        <Question q1={item.q1} q2={item.q2} />
      </View>
    );
  }

  return <View>{Data.map(createQuestion)}</View>;*/
