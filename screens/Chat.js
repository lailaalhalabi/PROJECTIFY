import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalTheme } from "../components/globalTheme";
import TopNav from "../components/TopNav";

const Onboarding = () => {
  return (
    <ScrollView style={theme.container} showsVerticalScrollIndicator={false}>
      <TopNav screenName="Messages" />
    </ScrollView>
  );
};

export default Onboarding;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.screenBackground,
  },
});
