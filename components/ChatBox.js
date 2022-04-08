import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native-ui-lib";
import { globalTheme } from "../components/globalTheme";

const ChatBox = ({ image, username, time, text }) => {
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
    padding: 3,
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
    marginLeft: 6,
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
  },
  chat_time: {
    marginTop: 15,
    fontSize: 12,
    color: "#8A8C93",
  },
  chat_text: {
    marginTop: 8,
    marginLeft: 12,
    fontSize: 14,
    color: "#8A8C93",
  },
});
