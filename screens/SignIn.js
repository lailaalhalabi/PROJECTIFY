import { useFonts } from "expo-font";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LockIcon from "../assets/icons/lock.png";
import UserIcon from "../assets/icons/username.png";
import { globalTheme } from "../components/globalTheme";
import SegmentedButtons from "../components/SegmentedButtons";

/**
 * This component is responsible for the Signin screen.
 * @param {Function} handleLogin
 * @returns {React.ReactComponentElement}
 */
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

  // Show 'loading...' if fonts are not loaded
  if (!fontsLoaded) {
    return (
      <View style={theme.loadingContainer}>
        <ActivityIndicator size="large" color={globalTheme.colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={theme.container}>
      <ScrollView>
        <View style={theme.sign_container}>
          <View style={theme.logo_container}>
            <Image
              style={theme.logo}
              source={require("../assets/images/Projectify-logo.png")}
            />
          </View>

          <SegmentedButtons
            labels={[{ label: "LOG IN" }, { label: "SIGN UP" }]}
            onChangeIndex={onChangeIndex}
          />

          {screen === 0 && (
            <View style={theme.inputsContainer}>
              <View style={theme.inputWrapper}>
                <Image style={theme.textInputIcon} source={UserIcon} />
                <TextInput
                  placeholderTextColor={globalTheme.colors.bodyText}
                  placeholder="Username"
                />
              </View>
              <View style={theme.inputWrapper}>
                <Image style={theme.textInputIcon} source={LockIcon} />
                <TextInput
                  placeholderTextColor={globalTheme.colors.bodyText}
                  secureTextEntry={true}
                  placeholder="Password"
                />
              </View>
              <TouchableOpacity
                style={theme.login_button}
                onPress={handleLogin}
              >
                <Text style={theme.inputTextStyle}>LOG ME IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={theme.forgot_button}
                onPress={handleLogin}
              >
                <Text style={theme.inputTextStyleDark}>FORGOT PASSWORD</Text>
              </TouchableOpacity>
            </View>
          )}
          {screen === 1 && (
            <View style={theme.inputsContainer}>
              <View style={theme.inputWrapper}>
                <Image style={theme.textInputIcon} source={UserIcon} />
                <TextInput
                  placeholderTextColor={globalTheme.colors.bodyText}
                  placeholder="First name"
                />
              </View>
              <View style={theme.inputWrapper}>
                <Image style={theme.textInputIcon} source={UserIcon} />
                <TextInput
                  placeholderTextColor={globalTheme.colors.bodyText}
                  placeholder="Last name"
                />
              </View>
              <View style={theme.inputWrapper}>
                <Image style={theme.textInputIcon} source={UserIcon} />
                <TextInput
                  placeholderTextColor={globalTheme.colors.bodyText}
                  placeholder="Email"
                />
              </View>
              <View style={theme.inputWrapper}>
                <Image style={theme.textInputIcon} source={LockIcon} />
                <TextInput
                  placeholderTextColor={globalTheme.colors.bodyText}
                  secureTextEntry={true}
                  placeholder="Password"
                />
              </View>
              <TouchableOpacity
                style={theme.login_button}
                onPress={handleLogin}
              >
                <Text style={theme.inputTextStyle}>SIGN UP</Text>
              </TouchableOpacity>
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
    width: 100,
    height: 100,
  },
  logo_container: {
    marginTop: 85,
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
  inputsContainer: {
    marginTop: 40,
  },
  login_button: {
    backgroundColor: globalTheme.colors.primary,
    marginTop: 30,
    width: 250,
    paddingVertical: 16,
    borderRadius: 8,
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.3,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  inputTextStyle: {
    textAlign: "center",
    color: "white",
    fontFamily: "PoppinsBold",
    fontSize: globalTheme.textSize.small,
  },
  inputTextStyleDark: {
    textAlign: "center",
    color: globalTheme.colors.bodyText,
    fontFamily: "PoppinsRegular",
    fontSize: globalTheme.textSize.small,
  },
  forgot_button: {
    width: 250,
    marginTop: 15,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: globalTheme.colors.generalGrey,
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.1,
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
  textInputIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: globalTheme.colors.generalGrey,
    padding: 5,
    marginBottom: 35,
  },
  loadingContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
