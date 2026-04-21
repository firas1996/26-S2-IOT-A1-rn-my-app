import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstComp from "./src/Components/FirstComp";
import { useState } from "react";
import Login from "./src/Screens/Login";

export default function App() {
  const name = "Firas";
  const [x, setX] = useState("");
  const getData = (data) => {
    setX(data);
    console.log(x);
  };
  return (
    <View style={styles.container}>
      {/* <Text>Hello, {x} </Text>
      <FirstComp name={name} getData={getData} />
      <StatusBar style="auto" /> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
