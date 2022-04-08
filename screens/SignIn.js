import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

const SignIn = () => {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    Varela: require("../assets/fonts/Varela-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={theme.container}>
      <View>
        <Text style={theme.yourClassName}>SignIn screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    height: "100%",
  },
  yourClassName: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "PoppinsBold",
  },
});
