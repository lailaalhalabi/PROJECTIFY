import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Onboarding = ({ handleSkipPress }) => {
  return (
    <SafeAreaView style={theme.container}>
      <View>
        <Text>Onboarding screen</Text>

        {/* Skip button */}
        <TouchableOpacity onPress={handleSkipPress}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    height: "100%",
  },
});
