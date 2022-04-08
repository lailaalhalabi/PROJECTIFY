import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { View, Text, Image } from "react-native-ui-lib";
import { globalTheme } from "../components/globalTheme";
import TopNav from "../components/TopNav";
import ChatBox from "../components/ChatBox";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";
import user5 from "../assets/images/user5.jpg";
import user6 from "../assets/images/user6.jpg";

const Chat = () => {
  return (
    <View style={theme.container}>
      <ScrollView>
        <TopNav screenName="Messages" />
        <ChatBox
          image={user1}
          username={"Landon Clayton"}
          time={"5 min ago"}
          text={"Lorem ipsum dolor sit amet consectetur..."}
        />
        <ChatBox
          image={user2}
          username={"Bernice Lewis"}
          time={"5 min ago"}
          text={"Lorem ipsum dolor sit amet consectetur..."}
        />
        <ChatBox
          image={user3}
          username={"Amy Lucas"}
          time={"5 min ago"}
          text={"Lorem ipsum dolor sit amet consectetur..."}
        />
        <ChatBox
          image={user4}
          username={"Martin Garza"}
          time={"5 min ago"}
          text={"Lorem ipsum dolor sit amet consectetur..."}
        />
        <ChatBox
          image={user5}
          username={"Elva Moore"}
          time={"5 min ago"}
          text={"Lorem ipsum dolor sit amet consectetur..."}
        />
        <ChatBox
          image={user6}
          username={"Josh Lewis"}
          time={"5 min ago"}
          text={"Lorem ipsum dolor sit amet consectetur..."}
        />
      </ScrollView>
    </View>
  );
};

export default Chat;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.screenBackground,
    flex: 1,
  },
});
