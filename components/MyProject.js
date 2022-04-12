import { useFonts } from "expo-font";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-ui-lib";
import ConversationsIcon from "../assets/icons/conversations.png";
import RightArrowIcon from "../assets/icons/rightArrow.png";
import TasksIcon from "../assets/icons/tasks.png";
import { globalTheme } from "./globalTheme";

/**
 * This component displays a single 'my project' item
 * @param {React.ComponentProps} props
 * @returns {React.Component}
 */
const MyProject = ({
  title,
  description,
  tasks,
  conversations,
  progressPercentage,
}) => {
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
    <View style={theme.myProjectContainer}>
      <View style={theme.header}>
        <Text style={theme.title}>{title}</Text>
        <Image style={theme.rightArrow} source={RightArrowIcon} />
      </View>
      <View>
        <Text style={theme.description}>{description}</Text>
        <View style={{ marginTop: 15 }}>
          <View style={theme.alignItemsRow}>
            <Image source={TasksIcon} />
            <Text style={theme.details}>{tasks} Tasks</Text>
          </View>
          <View style={theme.alignItemsRow}>
            <Image source={ConversationsIcon} />
            <Text style={theme.details}>{conversations} Conversations</Text>
          </View>
        </View>
      </View>
      <ProgressBar
        style={theme.progressbar}
        progress={progressPercentage}
        progressColor={"#0961F5"}
      />
    </View>
  );
};

export default MyProject;

// Styling for 'my project' component
const theme = StyleSheet.create({
  myProjectContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    marginHorizontal: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  header: {
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    flex: 1,
    fontFamily: "PoppinsBold",
  },
  rightArrow: {
    width: 30,
    height: 30,
  },
  description: {
    color: "#8A8C93",
    fontFamily: "Varela",
  },
  details: {
    color: "#8A8C93",
    marginLeft: 10,
    fontFamily: "Varela",
  },
  alignItemsRow: {
    flexDirection: "row",
    marginTop: 8,
  },
  progressbar: {
    marginTop: 20,
  },
});
