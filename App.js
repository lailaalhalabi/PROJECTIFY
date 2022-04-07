import { KeyboardAvoidingView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNav from "./navigation/BottomNav";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";
import Projects from "./screens/Projects";
import Question from "./screens/Question";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();

/**
 * This is the root/entry point of the application.
 * @returns {React.ReactNode}
 */
function App() {
  return (
    <NavigationContainer>
      {/* <SafeAreaProvider> */}
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        style={{ flex: 1 }}
      > */}
      {/* <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Question" component={Question} />
            <Stack.Screen name="Projects" component={Projects} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator> */}
      <BottomNav />
      {/* </KeyboardAvoidingView> */}
      {/* </SafeAreaProvider> */}
    </NavigationContainer>
  );
}

export default App;
