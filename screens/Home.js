import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Project1 from "../assets/images/project1.jpg";
import Project2 from "../assets/images/project2.jpg";
import Project3 from "../assets/images/project3.jpg";
import UserProfileImage from "../assets/images/user6.jpg";
import { globalTheme } from "../components/globalTheme";
import PopularProject from "../components/PopularProject";

const Home = () => {
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
    <View style={theme.container}>
      <StatusBar style="auto" />

      <View style={theme.topNav}>
        <View>
          <Text style={theme.title}>Hi Josh,</Text>
          <Text style={theme.subtitle}>Ready for a new challenge?</Text>
          <Text style={theme.linkText}>View your projects</Text>
        </View>
        <View style={theme.profileImageContainer}>
          <Image style={theme.profileImage} source={UserProfileImage} />
        </View>
      </View>

      <View style={theme.popularTextContainer}>
        <View>
          <Text style={theme.popularTitle}>Popular</Text>
          <Text style={theme.popularSubtitle}>The best project ideas</Text>
        </View>
        <Text style={theme.linkText}>View all</Text>
      </View>

      <View style={theme.popularProjectContainer}>
        <ScrollView
          horizontal={true}
          persistentScrollbar={false}
          showsHorizontalScrollIndicator={false}
        >
          <PopularProject image={Project2} name="Project name..." />
          <PopularProject image={Project1} name="Project name..." />
          <PopularProject image={Project3} name="Project name..." />
          <PopularProject image={Project2} name="Project name..." />
        </ScrollView>
      </View>

      <View style={theme.popularTextContainer}>
        <View>
          <Text style={theme.popularTitle}>Recently Launched</Text>
          <Text style={theme.popularSubtitle}>Fresh new idea just arrived</Text>
        </View>
        <Text style={theme.linkText}>View all</Text>
      </View>
    </View>
  );
};

export default Home;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.backgroundColor,
    height: "100%",
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  profileImageContainer: {
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
  },
  title: {
    fontSize: globalTheme.textSize.h1,
    fontFamily: "PoppinsBold",
    color: globalTheme.colors.primary,
    paddingBottom: 6,
  },
  subtitle: {
    fontSize: globalTheme.textSize.body,
    color: globalTheme.colors.bodyText,
    paddingBottom: 6,
  },
  linkText: {
    fontSize: globalTheme.textSize.body,
    color: globalTheme.colors.linkText,
    textDecorationLine: "underline",
  },
  popularTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 37,
    paddingBottom: 12,
  },
  popularTitle: {
    fontSize: globalTheme.textSize.h2,
    fontFamily: "PoppinsBold",
    color: globalTheme.colors.titleText,
    paddingBottom: 6,
  },
  popularSubtitle: {
    fontSize: globalTheme.textSize.body,
    fontFamily: "Varela",
    color: globalTheme.colors.bodyText,
  },
  popularProjectContainer: {
    paddingLeft: 20,
    marginBottom: 40,
  },
});
