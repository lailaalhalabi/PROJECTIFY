import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Question = () => {
  return (
    <SafeAreaView style={theme.container}>
      <View>
        <Text>Question screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Question;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    height: "100%",
  },
  yourClassName: {
    // backgroundColor: "#fff",
    // height: "100%",
    // paddingTop: 30,
  },
});
