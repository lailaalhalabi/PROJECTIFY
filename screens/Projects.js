import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalTheme } from "../components/globalTheme";
import MyProject from "../components/MyProject";
import SegmentedButtons from "../components/SegmentedButtons";
import TopNav from "../components/TopNav";

/**
 * This component is responsible for the Projects screen.
 * @param {navigatorObject} navigation
 * @returns {React.ReactComponentElement}
 */
const Projects = ({ navigation }) => {
  return (
    <ScrollView style={theme.container} showsVerticalScrollIndicator={false}>
      <TopNav screenName="Projects" goTo={() => navigation.navigate("Home")} />

      <SegmentedButtons
        labels={[
          { label: "ALL" },
          { label: "CURRENT" },
          { label: "COMPLETED" },
        ]}
      />

      <MyProject
        title="Snake Robot"
        description="World’s first unique soft robot"
        tasks="12"
        conversations="38"
        progressPercentage={80}
      />
      <MyProject
        title="UX for Seniors"
        description="Designs for the elderly"
        tasks="26"
        conversations="13"
        progressPercentage={55}
      />
      <MyProject
        title="Visual Software Tester"
        description="Build simple visual QA tool"
        tasks="9"
        conversations="5"
        progressPercentage={30}
      />
    </ScrollView>
  );
};

export default Projects;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.screenBackground,
    marginBottom: 100,
  },
});
