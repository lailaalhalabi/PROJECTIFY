import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native-ui-lib";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";
import user5 from "../assets/images/user5.jpg";
import user6 from "../assets/images/user6.jpg";
import ChatBox from "../components/ChatBox";
import { globalTheme } from "../components/globalTheme";
import TopNav from "../components/TopNav";

/**
 * This component is responsible for the Chat screen.
 * @param {navigatorObject} navigation
 * @returns {React.ReactComponentElement}
 */
const Chat = ({ navigation }) => {
  return (
    <>
      <TopNav screenName="Messages" goTo={() => navigation.navigate("Home")} />

      <View style={theme.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ChatBox
            image={user1}
            username={"Landon Clayton"}
            time={"5 min ago"}
            text={"Lorem ipsum dolor sit amet..."}
          />
          <ChatBox
            image={user2}
            username={"Bernice Lewis"}
            time={"5 min ago"}
            text={"Lorem ipsum dolor sit amet..."}
          />
          <ChatBox
            image={user3}
            username={"Amy Lucas"}
            time={"5 min ago"}
            text={"Lorem ipsum dolor sit amet..."}
          />
          <ChatBox
            image={user4}
            username={"Martin Garza"}
            time={"5 min ago"}
            text={"Lorem ipsum dolor sit amet..."}
          />
          <ChatBox
            image={user5}
            username={"Elva Moore"}
            time={"5 min ago"}
            text={"Lorem ipsum dolor sit amet..."}
          />
          <ChatBox
            image={user6}
            username={"Josh Lewis"}
            time={"5 min ago"}
            text={"Lorem ipsum dolor sit amet..."}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default Chat;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.screenBackground,
    flex: 1,
    paddingTop: 20,
    marginBottom: 100,
    paddingHorizontal: 20,
  },
});
