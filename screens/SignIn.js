import { useFonts } from "expo-font";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  BorderRadiuses,
  Button,
  SegmentedControl,
  TextField,
} from "react-native-ui-lib";
import { globalTheme } from "../components/globalTheme";

const SignIn = ({ handleLogin }) => {
  const [screen, setScreen] = useState(0);

  const onChangeIndex = (index) => {
    setScreen(index);
  };

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    Varela: require("../assets/fonts/Varela-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView style={theme.container}>
      <ScrollView>
        <View style={theme.sign_container}>
          <Image
            style={theme.logo}
            source={require("../assets/images/Projectify-logo.png")}
          />
          <SegmentedControl
            style={theme.segmented_control}
            segments={[{ label: "LOG IN" }, { label: "SIGN UP" }]}
            onChangeIndex={onChangeIndex}
            activeBackgroundColor="#0961F5"
            activeColor="white"
            inactiveColor="#C4C4C4"
            borderRadius={BorderRadiuses.br20}
          />
          {screen === 0 && (
            <View>
              <TextField
                floatingPlaceholder
                placeholder="Email"
                floatOnFocus
                validate={"required"}
                floatingPlaceholderColor={"#0961F5"}
                underlineColor={{ focus: "#0961F5" }}
              />
              <TextField
                floatingPlaceholder
                placeholder="Password"
                secureTextEntry
                floatOnFocus
                validate={"required"}
                floatingPlaceholderColor={"#0961F5"}
                underlineColor={{ focus: "#0961F5" }}
              />
              <Button
                style={theme.login_button}
                backgroundColor="#0961F5"
                label="LOG ME IN"
                onPress={handleLogin}
              />
              <Button
                style={theme.forgot_button}
                backgroundColor="#FFFFFF"
                grey30
                label="FORGOT PASSWORD"
              />
            </View>
          )}
          {screen === 1 && (
            <View>
              <TextField
                floatingPlaceholder
                placeholder="First Name"
                floatOnFocus
                validate={"required"}
                floatingPlaceholderColor={"#0961F5"}
                underlineColor={{ focus: "#0961F5" }}
              />
              <TextField
                floatingPlaceholder
                placeholder="Last Name"
                floatOnFocus
                validate={"required"}
                floatingPlaceholderColor={"#0961F5"}
                underlineColor={{ focus: "#0961F5" }}
              />
              <TextField
                floatingPlaceholder
                placeholder="Email"
                floatOnFocus
                validate={"required"}
                floatingPlaceholderColor={"#0961F5"}
                underlineColor={{ focus: "#0961F5" }}
              />
              <TextField
                floatingPlaceholder
                secureTextEntry
                placeholder="Password"
                floatOnFocus
                validate={"required"}
                floatingPlaceholderColor={"#0961F5"}
                underlineColor={{ focus: "#0961F5" }}
              />
              <Button
                style={theme.signup_button}
                backgroundColor="#0961F5"
                label="SIGN UP"
                onPress={handleLogin}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  container: {
    backgroundColor: globalTheme.colors.screenBackground,
    height: "100%",
  },
  sign_container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: globalTheme.colors.screenBackground,
  },
  logo: {
    width: 90,
    height: 90,
    marginTop: 100,
    backgroundColor: "white",
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
  segmented_control: {
    marginTop: 30,
    marginBottom: 60,
    width: 120,
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.3,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  login_button: {
    marginTop: 30,
    width: 250,
    borderRadius: 10,
  },
  forgot_button: {
    width: 250,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.3,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  signup_button: {
    marginTop: 30,
    marginBottom: 50,
    width: 250,
    borderRadius: 10,
  },
});
