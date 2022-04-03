import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={theme.container}>
      <View>
        <StatusBar style="auto" />
        <Text>Home screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 30,
  },
});
