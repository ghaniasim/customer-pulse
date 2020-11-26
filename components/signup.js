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

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  updateInputVal = (val, prop) => {
    if (prop === "name") {
      setName(val);
    }
    if (prop === "email") {
      setEmail(val);
    }
    if (prop === "password") {
      setPassword(val);
    }
  };

  const registerUser = () => {
    if ({ email } === "" && { password } === "") {
      Alert.alert("Enter details to signup!");
    } else {
      setLoading(true);
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user.updateProfile({
          name: { name },
        });
        console.log("User registered successfully!");

        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");

        navigation.navigate("Login");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Name"
        value={name}
        onChangeText={(val) => updateInputVal(val, "name")}
      />
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
      <Button color="#3740FE" title="Signup" onPress={() => registerUser()} />
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
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default SignupScreen;
