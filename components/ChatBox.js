import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import { Image, Text, View } from "react-native-ui-lib";
import { globalTheme } from "../components/globalTheme";

/**
 * This component displays a single 'chat box' item
 * @param {React.ComponentProps} props
 * @returns {React.Component}
 */
const ChatBox = ({ image, username, time, text }) => {
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
    <View style={theme.chat_container}>
      <View style={theme.chat_avatar_container}>
        <Image style={theme.chat_avatar} source={image} />
      </View>
      <View>
        <Text style={theme.chat_username}>{username}</Text>
        <Text style={theme.chat_text}>{text}</Text>
      </View>
      <Text style={theme.chat_time}>{time}</Text>
    </View>
  );
};

export default ChatBox;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.screenBackground,
  },
  chat_container: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: "row",
    alignItems: "center",
  },
  chat_avatar_container: {
    paddingRight: 12,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  chat_avatar: {
    height: 45,
    width: 45,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
  },
  chat_username: {
    fontSize: globalTheme.textSize.body,
    color: globalTheme.colors.titleText,
    fontFamily: "Varela",
    marginBottom: 3,
  },
  chat_time: {
    fontSize: globalTheme.textSize.small,
    color: globalTheme.colors.bodyText,
    fontFamily: "Varela",
    position: "absolute",
    top: 25,
    right: 15,
  },
  chat_text: {
    fontSize: globalTheme.textSize.small,
    color: globalTheme.colors.bodyText,
    fontFamily: "Varela",
  },
});
