import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SearchIcon from "../assets/icons/search.png";
import Category from "../components/Category";
import { globalTheme } from "../components/globalTheme";

// Categories used by UserGuide screen
export const categories = [
  {
    categoryName: "Web Frontend",
    categoryImage: require("../assets/images/vector5.png"),
  },

  {
    categoryName: "Algorithm",
    categoryImage: require("../assets/images/vector4.png"),
  },

  {
    categoryName: "Mobile Dev",
    categoryImage: require("../assets/images/vector7.png"),
  },

  {
    categoryName: "Embedded",
    categoryImage: require("../assets/images/vector1.png"),
  },

  {
    categoryName: "Backend",
    categoryImage: require("../assets/images/vector3.png"),
  },

  {
    categoryName: "Data Analysis",
    categoryImage: require("../assets/images/vector6.png"),
  },
];

/**
 * This component is responsible for the UserGuide screen.
 * @param {navigatorObject} navigation
 * @returns {React.ReactComponentElement}
 */
const UserGuide = ({ navigation }) => {
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
      <SafeAreaView style={theme.loadingContainer}>
        <ActivityIndicator size="large" color={globalTheme.colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={theme.container}>
      <Text style={theme.textTitle}>What would you like to learn?</Text>

      <View style={theme.inputWrapperContainer}>
        <Image style={theme.searchIcon} source={SearchIcon} />
        <TextInput
          placeholderTextColor={globalTheme.colors.bodyText}
          placeholder="Search"
        />
      </View>

      <View style={theme.categoryContainer}>
        {categories.map((item, index) => (
          <Category
            index={index}
            categoryName={item.categoryName}
            categoryImage={item.categoryImage}
            key={index}
            navigation={navigation}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default UserGuide;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.screenBackground,
    height: "100%",
    paddingTop: 60,
  },
  textTitle: {
    paddingHorizontal: 60,
    fontFamily: "PoppinsBold",
    fontSize: globalTheme.textSize.h2,
    color: globalTheme.colors.titleText,
    marginBottom: 22,
  },
  inputWrapperContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 30,
    marginHorizontal: 35,
    marginBottom: 50,
    paddingHorizontal: 20,
    paddingVertical: 13,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  categoryContainer: {
    marginLeft: "4%",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 100,
  },
});
