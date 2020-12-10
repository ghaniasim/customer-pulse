import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import firebase from "../../database/firebase";

var userEmail;
const Profile = (props) => {
  //the following function obtains the current user when authentication is changed
  function getCurrentUser() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase.auth().currentUser;
        userEmail = user.email;
      }
    });
  }

  useEffect(() => {
    getCurrentUser();
  }, [userEmail]);

  //surveys constant fetches the surveys created by this user from API
  const [surveys, setSurveys] = useState();
  const [loaded, setLoaded] = useState(false);

  //fetching the data
  async function getData() {
    const res = await fetch(
      `https://customer-pulse-backend.herokuapp.com/feedbacks/${userEmail}`
    );
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
  //reversing the fetched data array so the latest addition appears on top
  if (loaded) {
    surveys.reverse();
  }

  useEffect(() => {
    getData();
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#ffe5d9" }}>
      <View styles={{ marginBottom: 20 }}>
        <Text style={styles.profileText}>Profile </Text>

        <Text style={styles.nameText}>{userEmail}</Text>

        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => {
            props.navigation.navigate("Data");
          }}
        >
          <Text>View Surveys</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Create", { teacherName: userEmail });
          }}
          style={styles.roundButton1}
        >
          <Text style={{ fontSize: 60 }}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ marginTop: "8%", margin: "5%" }}
        keyExtractor={(survey) => survey._id}
        data={surveys}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.navigate("Survey", {
                  survey: item,
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
  viewButton: {
    backgroundColor: "#ade8f4",
    height: 50,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: "5%",
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
