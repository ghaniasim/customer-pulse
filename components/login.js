import React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import firebase from "../database/firebase";

const LoginScreen = ({ navigation }) => {
  var email;
  var password;

  //Authenctication with firebase auth function
  userLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        email = "";
        password = "";
        navigation.navigate("Profile");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => (email = val)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => (password = val)}
        maxLength={15}
        secureTextEntry={true}
      />
      <Button color="#3740FE" title="Sign in" onPress={() => userLogin()} />

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate("Signup")}
      >
        Don't have account? Click here to signup
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#ffe5d9",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 50,
    paddingBottom: 10,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  loginText: {
    padding: 30,
    color: "blue",
  },
});

export default LoginScreen;
