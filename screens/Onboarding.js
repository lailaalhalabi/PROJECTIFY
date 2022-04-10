import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { globalTheme } from "../components/globalTheme";
import onBoardingImage from "../assets/images/vector2.png";
import SkipIcon from "../assets/icons/skip.png";

const Onboarding = ({ handleSkipPress }) => {
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
        <View style={theme.oboardingContainer}>
          <Image style={theme.onboardingImage} source={onBoardingImage} />
          <Text style={theme.onboardingText}>
            Projectify helps you find like minded parters
          </Text>
        </View>
        {/* Skip button */}
        <View style={theme.skipContainer}>
          <Image style={theme.skipIcon} source={SkipIcon} />
          <TouchableOpacity onPress={handleSkipPress}>
            <Text style={theme.skipText}>SKIP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.backgroundColor,
    height: "100%",
  },
  oboardingContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  onboardingImage: {
    width: 328,
    height: 210,
  },
  onboardingText: {
    fontFamily: "PoppinsBold",
    fontSize: 30,
    marginTop: 30,
    marginLeft: 60,
    marginRight: 60,
  },
  skipContainer: {
    marginTop: 200,
    flexDirection: "row",
  },
  skipText: {
    color: "#8A8C93",
    marginLeft: 250,
  },
  skipIcon: {
    marginLeft: 10,
  },
});
