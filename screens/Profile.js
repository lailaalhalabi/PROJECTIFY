import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { globalTheme } from "../components/globalTheme";

const Profile = () => {
  return (
    <SafeAreaView style={theme.container}>
      <View>
        <Text>Profile screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.backgroundColor,
    height: "100%",
  },
  yourClassName: {
    // backgroundColor: "#fff",
    // height: "100%",
    // paddingTop: 30,
  },
});
