import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { globalTheme } from "./globalTheme";

/**
 * This component displays a single 'Category' item on the UserGuide screen
 * @param {React.ComponentProps} props
 * @returns {React.Component}
 */
const Category = ({ categoryImage, categoryName, index, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("BottomNav")}>
      <View
        style={[
          theme.container,
          index % 2 === 1 ? { marginTop: 15 } : { marginTop: -15 },
        ]}
      >
        <Image style={theme.categoryImage} source={categoryImage} />
        <View style={theme.divider} />
        <Text style={theme.categoryTitle}>{categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "white",
    width: 145,
    height: 190,
    margin: 3,
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 8,
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.1,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  categoryImage: {
    width: "100%",
    height: 105,
    marginBottom: 8,
  },
  categoryTitle: {
    fontFamily: "Varela",
    fontSize: globalTheme.textSize.body,
    color: globalTheme.colors.bodyText,
    paddingBottom: 20,
    paddingTop: 16,
  },
  divider: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: globalTheme.colors.generalGrey,
  },
});
