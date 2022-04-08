import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
    <View>
      <Text style={theme.yourClassName}>SignIn screen</Text>
    </View>
  );
};

export default SignIn;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  yourClassName: {
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "PoppinsBold",
  },
});
