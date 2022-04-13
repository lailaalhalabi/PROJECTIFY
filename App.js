import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNav from "./components/BottomNav";
import Onboarding from "./screens/Onboarding";
import SignIn from "./screens/SignIn";
import UserGuide from "./screens/UserGuide";

/**
 * This is the root/entry point of the application.
 * The general userflow: Onboarding > Login > Select topic of interest > Home
 * @returns {React.ReactNode}
 */
function App() {
  // Fake onBoarding state. Change to "true" to see all app screens.
  const [isOnboardingDone, setOnboardingDone] = useState(false);

  // Fake login state. Change to "true" to see all app screens.
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Fake user guide state: choose topic of interest. Change to "true" to see all app screens.
  const [isTopicChosen, setTopicChosen] = useState(false);

  // Handle what happens when user press "Skip"
  const handleSkipPress = () => {
    setOnboardingDone(true);
  };

  // Handle user log in
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Handle selected topic
  const handleSelectedTopic = () => {
    setTopicChosen(true);
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          {!isOnboardingDone ? (
            <Onboarding handleSkipPress={handleSkipPress} />
          ) : !isLoggedIn ? (
            <SignIn handleLogin={handleLogin} />
          ) : !isTopicChosen ? (
            <UserGuide handleSelectedTopic={handleSelectedTopic} />
          ) : (
            <BottomNav />
          )}
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
