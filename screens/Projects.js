import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalTheme } from "../components/globalTheme";
import TopNav from "../components/TopNav";
import { SegmentedControl, BorderRadiuses } from "react-native-ui-lib";
import { useState } from "react";
import MyProject from "../components/MyProject";

const Projects = () => {
  const [screen, setScreen] = useState(0);

  const onChangeIndex = (index) => {
    setScreen(index);
  };

  return (
    <ScrollView style={theme.container} showsVerticalScrollIndicator={false}>
      <TopNav screenName="Projects" />
      <SegmentedControl
        style={theme.segmented_control}
        segments={[
          { label: "ALL" },
          { label: "CURRENT" },
          { label: "COMPLETED" },
        ]}
        onChangeIndex={onChangeIndex}
        activeBackgroundColor="#0961F5"
        activeColor="white"
        inactiveColor="#C4C4C4"
        borderRadius={BorderRadiuses.br20}
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
  segmented_control: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 30,
  },
});
