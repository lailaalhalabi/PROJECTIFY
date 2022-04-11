import { Image, StyleSheet, Text, View } from "react-native";
import { globalTheme } from "./globalTheme";

/**
 * This component displays a single 'popular project' item
 * @param {React.ComponentProps} image
 * @param {React.ComponentProps} name
 * @returns {React.Component}
 */
const PopularProject = ({ image, name }) => {
  return (
    <View style={theme.popularProject}>
      <Image style={theme.popularProjectImg} source={image} />
      <Text style={theme.popularProjectTitle}>{name}</Text>
    </View>
  );
};

export default PopularProject;

// Styling for 'popular projects' component
const theme = StyleSheet.create({
  popularProject: {
    backgroundColor: "white",
    padding: 3,
    marginVertical: 3,
    marginRight: 12,
    borderRadius: 8,
    shadowColor: globalTheme.colors.primary,
    elevation: 3,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  popularProjectImg: {
    borderRadius: 6,
    width: 125,
    height: 68,
  },
  popularProjectTitle: {
    fontSize: globalTheme.textSize.body,
    color: globalTheme.colors.bodyText,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 8,
  },
});
