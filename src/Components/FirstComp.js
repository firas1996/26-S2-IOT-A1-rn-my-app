import { StyleSheet, Text, View } from "react-native";

const FirstComp = ({ name, getData }) => {
  const x = "World!";
  getData(x);
  // const { name } = props;
  return (
    <View>
      <Text>Hello, {name} !</Text>
    </View>
  );
};

export default FirstComp;

const styles = StyleSheet.create({});
