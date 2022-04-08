import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Onboarding = () => {
  return (
    <SafeAreaView style={theme.container}>
      <View>
        <Text>Onboarding screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

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
