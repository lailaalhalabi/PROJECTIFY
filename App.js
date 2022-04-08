import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNav from "./components/BottomNav";
import SignIn from "./screens/SignIn";

/**
 * This is the root/entry point of the application.
 * @returns {React.ReactNode}
 */
function App() {
  // Fake login state. Change to "true" to see all app screens.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          {isLoggedIn ? <BottomNav /> : <SignIn />}
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
