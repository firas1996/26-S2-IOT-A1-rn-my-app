import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
/////////////////////////////////////////////////////////////////////////////////////////
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../../Firebase";
import "firebase/firestore";
////////////////////////////////////////////////////////////////////////////////////////

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = (value, name) => {
    setUserData({ ...userData, [name]: value });
  };
  const RegisterHandler = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    console.log(userData);
    setUserData({
      email: "",
      password: "",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.containerr}>
        <View style={styles.inpC}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inp}
            onChangeText={(txt) => {
              inputChangeHandler(txt, "email");
            }}
            value={userData.email}
          />
        </View>
        <View style={styles.inpC}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inp}
            onChangeText={(txt) => {
              inputChangeHandler(txt, "password");
            }}
            value={userData.password}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={RegisterHandler}>
          <Text style={styles.btnTxT}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerr: {
    backgroundColor: "#4aeb7f98",
    width: "70%",
    height: "35%",
    borderRadius: 12,
    padding: 12,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  inpC: {
    height: "25%",
  },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  inp: {
    borderColor: "#999999",
    height: 40,
    borderRadius: 12,
    borderWidth: 1,
    padding: "5",
  },
  btn: {
    backgroundColor: "lightblue",
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 12,
  },
  btnTxT: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
