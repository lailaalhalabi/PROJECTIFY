import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalTheme } from "../components/globalTheme";
import TopNav from "../components/TopNav";

const Projects = () => {
  return (
    <ScrollView style={theme.container} showsVerticalScrollIndicator={false}>
      <TopNav screenName="Projects" />
    </ScrollView>
  );
};

export default Projects;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.screenBackground,
  },
});
