import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";

const Home = () => {
  const getData = () => {
    axios
      .get("http://10.33.5.4:1234/mqtt")
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <View style={styles.container}>
      <Button title="Get MQTT Data" onPress={getData} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
