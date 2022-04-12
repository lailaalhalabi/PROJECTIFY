import { StyleSheet } from "react-native";
import { SegmentedControl } from "react-native-ui-lib";
import { globalTheme } from "./globalTheme";

const SegmentedButtons = ({ labels, onChangeIndex }) => {
  return (
    <SegmentedControl
      style={theme.segmented_control}
      segments={labels}
      onChangeIndex={onChangeIndex}
      activeBackgroundColor={globalTheme.colors.primary}
      activeColor="white"
      backgroundColor="white"
      inactiveColor={globalTheme.colors.generalGrey}
      borderRadius={8}
    />
  );
};

export default SegmentedButtons;

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
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.1,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    minWidth: 170,
  },
});
