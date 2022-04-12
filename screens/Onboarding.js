import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SkipIcon from "../assets/icons/skip.png";
import onBoardingImage from "../assets/images/vector2.png";
import { globalTheme } from "../components/globalTheme";

/**
 * This component is responsible for the Onboarding screen.
 * @param {navigatorObject} navigation
 * @returns {React.ReactComponentElement}
 */
const Onboarding = ({ handleSkipPress }) => {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    Varela: require("../assets/fonts/Varela-Regular.ttf"),
  });

  // Show 'loading...' if fonts are not loaded
  if (!fontsLoaded) {
    return (
      <View style={theme.loadingContainer}>
        <ActivityIndicator size="large" color={globalTheme.colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={theme.container}>
      <View style={theme.oboardingContainer}>
        <Image style={theme.onboardingImage} source={onBoardingImage} />
        <Text style={theme.onboardingText}>
          Projectify helps you find like minded parters
        </Text>
      </View>

      {/* Skip button */}
      <View style={theme.skipContainer}>
        <Image source={SkipIcon} />
        <TouchableOpacity onPress={handleSkipPress}>
          <Text style={theme.skipText}>SKIP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.backgroundColor,
  },
  oboardingContainer: {
    alignItems: "center",
    marginTop: 130,
  },
  onboardingImage: {
    width: 328,
    height: 210,
  },
  onboardingText: {
    fontFamily: "PoppinsBold",
    fontSize: globalTheme.textSize.h1,
    color: globalTheme.colors.titleText,
    marginTop: 30,
    marginLeft: 60,
    marginRight: 60,
  },
  skipContainer: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skipText: {
    color: globalTheme.colors.bodyText,
    fontFamily: "Varela",
  },
});
