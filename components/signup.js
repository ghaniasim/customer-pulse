import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder="Full Name" />
      <TextInput style={styles.inputStyle} placeholder="Password" />
      <TextInput style={styles.inputStyle} placeholder="Email" />
      <TextInput style={styles.inputStyle} placeholder="Confirm Password" />
      <Button title="Create" />
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
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
});

export default SignupScreen;
