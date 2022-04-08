import { Image, StyleSheet, Text, View } from "react-native";
import { globalTheme } from "./globalTheme";

const PopularProject = ({ image, name }) => {
  return (
    <View style={theme.popularProject}>
      <Image style={theme.popularProjectImg} source={image} />
      <Text style={theme.popularProjectTitle}>{name}</Text>
    </View>
  );
};

export default PopularProject;

const theme = StyleSheet.create({
  popularProject: {
    backgroundColor: "white",
    padding: 3,
    marginRight: 12,
    borderRadius: 8,
    shadowColor: globalTheme.colors.primary,
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
