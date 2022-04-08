import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import {
  SegmentedControl,
  BorderRadiuses,
  TextField,
  Button,
} from "react-native-ui-lib";
import { globalTheme } from "../components/globalTheme";
import { useFonts } from "expo-font";

const SignIn = () => {
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
            // backgroundColor="#0961F5"
            activeBackgroundColor="#0961F5"
            activeColor="white"
            inactiveColor="#C4C4C4"
            borderRadius={BorderRadiuses.br20}
          />
          {screen === 0 && (
            <View>
              <TextField
                style={theme.username_textField}
                floatingPlaceholder
                placeholder="Email"
                // onChangeText={this.onChangeText}
                floatOnFocus
                validate={"required"}
              />
              <TextField
                style={theme.password_textField}
                floatingPlaceholder
                placeholder="Password"
                // onChangeText={this.onChangeText}
                floatOnFocus
                validate={"required"}
              />
              <Button
                style={theme.login_button}
                backgroundColor="#0961F5"
                label="LOG ME IN"
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
                style={theme.username_textField}
                floatingPlaceholder
                placeholder="First Name"
                // onChangeText={this.onChangeText}
                floatOnFocus
                validate={"required"}
              />
              <TextField
                style={theme.username_textField}
                floatingPlaceholder
                placeholder="Last Name"
                // onChangeText={this.onChangeText}
                floatOnFocus
                validate={"required"}
              />
              <TextField
                style={theme.username_textField}
                floatingPlaceholder
                placeholder="Email"
                // onChangeText={this.onChangeText}
                floatOnFocus
                validate={"required"}
              />
              <TextField
                style={theme.password_textField}
                floatingPlaceholder
                placeholder="Password"
                // onChangeText={this.onChangeText}
                floatOnFocus
                validate={"required"}
              />
              <Button
                style={theme.signup_button}
                backgroundColor="#0961F5"
                label="SIGN UP"
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
  },
  segmented_control: {
    marginTop: 30,
    marginBottom: 60,
    width: 120,
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  username_textField: {
    width: 250,
    fontSize: 14,
  },
  password_textField: {
    width: 250,
    fontSize: 14,
  },
  login_button: {
    marginTop: 30,
    width: 250,
    borderRadius: 10,
  },
  forgot_button: {
    width: 250,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: globalTheme.colors.primary,
    shadowOpacity: 0.3,
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
