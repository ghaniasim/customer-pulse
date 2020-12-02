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

const Post = ({ navigation }) => {
  const [survey, setSurvey] = useState(navigation.state.params.survey);

  console.log("Ready to post:", survey);
  fetch("http://192.168.1.223:8001/feedbacks/survey", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(survey),
  });
  return (
    <View>
      <Text>{survey.teacherName}</Text>
    </View>
  );
};

export default Post;
