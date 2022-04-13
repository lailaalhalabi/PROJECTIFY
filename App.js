import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BottomNav from "./components/BottomNav";
import Chat from "./screens/Chat";
import Home from "./screens/Home";
import Onboarding from "./screens/Onboarding";
import Profile from "./screens/Profile";
import Projects from "./screens/Projects";
import SignIn from "./screens/SignIn";
import UserGuide from "./screens/UserGuide";

// Array of screens used by Stack navigator
export const screens = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Chat",
    component: Chat,
  },
  {
    name: "Onboarding",
    component: Onboarding,
  },
  {
    name: "Profile",
    component: Profile,
  },
  {
    name: "Projects",
    component: Projects,
  },
  {
    name: "SignIn",
    component: SignIn,
  },
  {
    name: "UserGuide",
    component: UserGuide,
  },
  {
    name: "BottomNav",
    component: BottomNav,
  },
];

// Create a stack navigator system.
const Stack = createNativeStackNavigator();

/**
 * This is the root/entry point of the application.
 * The general userflow: Onboarding > Login > Select topic of interest > Home
 *
 * Two navigators are nested: Stack navigator & Bottom Tab navigator
 * @returns {React.ReactNode}
 */
function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          <Stack.Navigator initialRouteName="Onboarding">
            {screens.map((item, index) => (
              <Stack.Screen
                name={item.name}
                component={item.component}
                options={{ headerShown: false }}
                key={index}
              />
            ))}
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
