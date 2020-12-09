import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import firebase from "../database/firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  updateInputVal = (val, prop) => {
    if (prop === "email") {
      setEmail(val);
    }
    if (prop === "password") {
      setPassword(val);
    }
  };

  userLogin = () => {
    if ({ email } === "" && { password } === "") {
      window.alert("Enter details to signin!");
    } else {
      setLoading(true);
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setEmail("");
        setPassword("");
        navigation.navigate("Profile");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        value={email}
        onChangeText={(val) => updateInputVal(val, "email")}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        value={password}
        onChangeText={(val) => updateInputVal(val, "password")}
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
    backgroundColor: "#fff",
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
  },
});

export default LoginScreen;
