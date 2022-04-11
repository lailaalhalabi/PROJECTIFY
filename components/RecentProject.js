import { useFonts } from "expo-font";
import { Image, StyleSheet, Text, View } from "react-native";
import AwardIcon from "../assets/icons/award-icon.png";
import BookmarkIcon from "../assets/icons/bookmark-icon.png";
import MemberIcon from "../assets/icons/memebers-icon.png";
import TimeIcon from "../assets/icons/time-icon.png";
import { globalTheme } from "./globalTheme";

/**
 * This component displays the bottom tab navigation.
 * @param {props} props
 * @returns {React.ReactComponentElement}
 */
const RecentProject = ({ title, text1, text2, text3, mainIcon }) => {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    Varela: require("../assets/fonts/Varela-Regular.ttf"),
  });

  // Show 'loading...' if fonts are not loaded
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text style={theme.recentProjectTitle}>{title}</Text>
      <View style={theme.recentProjHighlight}>
        <Image style={theme.recentProjIcon} source={AwardIcon} />
        <Text style={theme.recentProjText}>{text1}</Text>
      </View>

      <View style={theme.recentProjHighlight}>
        <Image style={theme.recentProjIcon} source={TimeIcon} />
        <Text style={theme.recentProjText}>{text2}</Text>
      </View>

      <View style={theme.recentProjHighlight}>
        <Image style={theme.recentProjIcon} source={MemberIcon} />
        <Text style={theme.recentProjText}>{text3}</Text>
      </View>

      <Image style={theme.bookmarkIcon} source={BookmarkIcon} />

      <Image style={theme.mainProjectIcon} source={mainIcon} />
    </View>
  );
};

export default RecentProject;

const theme = StyleSheet.create({
  recentProjectTitle: {
    fontFamily: "PoppinsBold",
    fontSize: globalTheme.textSize.h3,
    color: "white",
    paddingBottom: 22,
  },
  recentProjHighlight: {
    flexDirection: "row",
    width: "45%",
    alignItems: "center",
    marginBottom: 8,
  },
  recentProjIcon: {
    marginRight: 10,
  },
  recentProjText: {
    color: "white",
    fontSize: globalTheme.textSize.small,
    fontFamily: "Varela",
  },
  bookmarkIcon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  mainProjectIcon: {
    position: "absolute",
    bottom: 10,
    right: 40,
  },
});
