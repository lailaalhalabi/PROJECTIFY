import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { BorderRadiuses, SegmentedControl } from "react-native-ui-lib";
import SettingsIcon from "../assets/icons/settings.png";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";
import UserProfileImage from "../assets/images/user6.jpg";
import { globalTheme } from "../components/globalTheme";

/**
 * This component is responsible for the Chat screen.
 * @returns {React.ReactComponentElement}
 */
const Profile = () => {
  const [screen, setScreen] = useState(0);

  const onChangeIndex = (index) => {
    setScreen(index);
  };
  BorderRadiuses;
  return (
    <SafeAreaView style={theme.container}>
      <ScrollView>
        <View style={theme.settingsContainer}>
          <Image style={theme.settings} source={SettingsIcon} />
        </View>
        <View style={theme.profileImageContainer}>
          <Image style={theme.profileImage} source={UserProfileImage} />
          <View>
            <Text style={theme.username}>Josh Lewis</Text>
          </View>
          <View>
            <Text style={theme.score}>114,557 XP</Text>
          </View>
        </View>
        <SegmentedControl
          style={theme.segmented_control}
          segments={[
            { label: "SCORES" },
            { label: "FRIENDS" },
            { label: "BADGES" },
          ]}
          onChangeIndex={onChangeIndex}
          activeBackgroundColor="#0961F5"
          activeColor="white"
          inactiveColor="#C4C4C4"
          borderRadius={BorderRadiuses.br20}
        />
        <View style={theme.segmentsContainer}>
          <View style={theme.segmentElementsContainer}>
            <View>
              <Text style={theme.users_ranking}>1</Text>
            </View>
            <View style={theme.users_avatar_container}>
              <Image style={theme.users_avatar} source={user1} />
            </View>
            <View>
              <View>
                <Text style={theme.users_username}>Landon Clayton</Text>
              </View>
              <View>
                <Text style={theme.users_score}>103,597 XP</Text>
              </View>
            </View>
          </View>
          <View style={theme.segmentElementsContainer}>
            <View>
              <Text style={theme.users_ranking}>2</Text>
            </View>
            <View style={theme.users_avatar_container}>
              <Image style={theme.users_avatar} source={user2} />
            </View>
            <View>
              <View>
                <Text style={theme.users_username}>Bernice Lewis</Text>
              </View>
              <View>
                <Text style={theme.users_score}>101,165 XP</Text>
              </View>
            </View>
          </View>
          <View style={theme.segmentElementsContainer}>
            <View>
              <Text style={theme.users_ranking}>3</Text>
            </View>
            <View style={theme.users_avatar_container}>
              <Image style={theme.users_avatar} source={user3} />
            </View>
            <View>
              <View>
                <Text style={theme.users_username}>Amy Lucas</Text>
              </View>
              <View>
                <Text style={theme.users_score}>90,160 XP</Text>
              </View>
            </View>
          </View>
          <View style={theme.segmentElementsContainer}>
            <View>
              <Text style={theme.users_ranking}>4</Text>
            </View>
            <View style={theme.users_avatar_container}>
              <Image style={theme.users_avatar} source={user4} />
            </View>
            <View>
              <View>
                <Text style={theme.users_username}>Martin Garza</Text>
              </View>
              <View>
                <Text style={theme.users_score}>88,100 XP</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.backgroundColor,
    marginBottom: 100,
  },
  settings: {
    marginTop: 50,
    marginRight: 30,
    alignSelf: "flex-end",
  },
  profileImageContainer: {
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    alignItems: "center",
    marginTop: 35,
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: "white",
  },
  username: {
    marginTop: 30,
    fontFamily: "PoppinsBold",
    fontSize: 24,
  },
  score: {
    fontFamily: "Varela",
    color: "#8A8C93",
    fontSize: 16,
  },
  segmented_control: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 30,
  },
  segmentsContainer: {
    marginLeft: 50,
    marginRight: 50,
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
  segmentElementsContainer: {
    flexDirection: "row",
  },
  users_avatar_container: {
    padding: 10,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  users_ranking: {
    marginTop: 30,
    marginRight: 10,
    fontFamily: "Varela",
  },
  users_avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "white",
  },
  users_username: {
    marginTop: 15,
    marginLeft: 15,
    fontFamily: "Varela",
  },
  users_score: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 12,
    color: "#8A8C93",
    fontFamily: "Varela",
  },
});
