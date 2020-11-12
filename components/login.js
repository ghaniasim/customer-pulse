import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputStyle} placeholder="Username" />
      <TextInput style={styles.inputStyle} placeholder="Password" />
      <TouchableOpacity style={{ marginTop: 50 }}>
        <Button title="Log In" />
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 30 }}>
        <Button title="Sign Up" onPress={() => navigation.navigate("Signup")} />
      </TouchableOpacity>
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

export default LoginScreen;
