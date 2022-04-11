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
        <View style={theme.chat_title}>
          <Text style={theme.chat_username}>{username}</Text>
          <Text style={theme.chat_time}>{time}</Text>
        </View>
        <Text style={theme.chat_text}>{text}</Text>
      </View>
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
    padding: 5,
    marginVertical: 3,
    marginRight: 12,
    marginLeft: 12,
    borderRadius: 8,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: "row",
  },
  chat_avatar_container: {
    padding: 10,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  chat_avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
  },
  chat_title: {
    flexDirection: "row",
  },
  chat_username: {
    marginTop: 15,
    marginLeft: 12,
    fontSize: 16,
    color: "#031820",
    flex: 1,
    fontFamily: "Varela",
  },
  chat_time: {
    marginTop: 15,
    fontSize: 12,
    color: "#8A8C93",
    fontFamily: "Varela",
  },
  chat_text: {
    marginTop: 8,
    marginLeft: 12,
    fontSize: 14,
    color: "#8A8C93",
    fontFamily: "Varela",
  },
});
