import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LeftArrow from "../assets/icons/leftArrow.png";
import SearchIcon from "../assets/icons/search.png";
import { globalTheme } from "./globalTheme";

/**
 * This component displays the general top navigation bar
 * @param {React.ComponentProps} navigation
 * @param {React.ComponentProps} goTo
 * @returns {React.ReactComponentElement}
 */
const TopNav = ({ screenName, goTo }) => {
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
    <View style={theme.topNavContainer}>
      <View style={theme.topNavLeftItems}>
        <TouchableOpacity onPress={goTo}>
          <Image style={theme.arrowIcon} source={LeftArrow} />
        </TouchableOpacity>
        <Text style={theme.screenName}>{screenName}</Text>
      </View>
      <Image style={theme.searchIcon} source={SearchIcon} />
    </View>
  );
};

export default TopNav;

const theme = StyleSheet.create({
  topNavContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  topNavLeftItems: {
    flexDirection: "row",
  },
  arrowIcon: {
    width: 30,
    height: 30,
    paddingRight: 30,
  },
  screenName: {
    fontFamily: "PoppinsBold",
    paddingLeft: 10,
    fontSize: globalTheme.textSize.h2,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});
