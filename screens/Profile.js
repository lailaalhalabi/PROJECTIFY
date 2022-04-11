import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SettingsIcon from "../assets/icons/settings.png";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";
import user5 from "../assets/images/user5.jpg";
import {
  default as user6,
  default as UserProfileImage,
} from "../assets/images/user6.jpg";
import { globalTheme } from "../components/globalTheme";
import SegmentedButtons from "../components/SegmentedButtons";

// List of users (Retrieving from Database in real life)
const users = [
  { username: "Landon Clayton", profileImage: user1, score: "103,597 XP" },
  { username: "Amy Lucas", profileImage: user2, score: "126,538 XP" },
  { username: "Bernice Landon", profileImage: user3, score: "101,165 XP" },
  { username: "Elva Moore", profileImage: user4, score: "90,801 XP" },
  { username: "Martin Garza", profileImage: user5, score: "88,100 XP" },
  { username: "Josh Lewis", profileImage: user6, score: "122,381 XP" },
];

/**
 * This component is responsible for the Chat screen.
 * @returns {React.ReactComponentElement}
 */
const Profile = () => {
  return (
    <SafeAreaView style={theme.container}>
      <ScrollView>
        <View style={theme.settingsContainer}>
          <Image style={theme.settings} source={SettingsIcon} />
        </View>
        <View style={theme.profileImageContainer}>
          <Image style={theme.profileImage} source={UserProfileImage} />
        </View>
        <View style={theme.profileText}>
          <Text style={theme.username}>Josh Lewis</Text>
          <Text style={theme.score}>114,557 XP</Text>
        </View>

        <View style={theme.segmentedButtons}>
          <SegmentedButtons
            labels={[
              { label: "SCORES" },
              { label: "FRIENDS" },
              { label: "BADGES" },
            ]}
          />
        </View>

        <View style={theme.segmentsContainer}>
          {users.map((user, index) => (
            <View style={theme.segmentElementsContainer} key={user.username}>
              <View>
                <Text style={theme.users_ranking}>{index}</Text>
              </View>
              <View style={theme.users_avatar_container}>
                <Image style={theme.users_avatar} source={user.profileImage} />
              </View>
              <View>
                <View>
                  <Text style={theme.users_username}>{user.username}</Text>
                </View>
                <View>
                  <Text style={theme.users_score}>{user.score}</Text>
                </View>
              </View>
            </View>
          ))}
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
    marginTop: 20,
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
    borderWidth: 6,
    borderColor: "white",
  },
  profileText: {
    alignItems: "center",
  },
  username: {
    marginTop: 10,
    fontFamily: "PoppinsBold",
    fontSize: globalTheme.textSize.h2,
  },
  score: {
    marginTop: 5,
    fontFamily: "Varela",
    color: "#8A8C93",
    fontSize: globalTheme.textSize.small,
  },
  segmentedButtons: {
    paddingHorizontal: 20,
  },
  segmentsContainer: {
    marginLeft: 60,
    marginRight: 60,
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
