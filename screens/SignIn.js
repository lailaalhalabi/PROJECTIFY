import reactDom from "react-dom";
import { StyleSheet, View, Image } from "react-native";
import {
  SegmentedControl,
  BorderRadiuses,
  TextField,
  Button,
} from "react-native-ui-lib";
import { globalTheme } from "../components/globalTheme";

const SignIn = () => {
  return (
    <View style={theme.sign_container}>
      <Image
        style={theme.logo}
        source={require("../assets/images/Projectify-logo.png")}
      />
      <SegmentedControl
        style={theme.segmented_control}
        segments={[{ label: "LOG IN" }, { label: "SIGN UP" }]}
        // backgroundColor="#0961F5"
        activeBackgroundColor="#0961F5"
        activeColor="white"
        inactiveColor="#C4C4C4"
        borderRadius={BorderRadiuses.br20}
      />
      <TextField
        style={theme.username_textField}
        floatingPlaceholder
        placeholder="Username"
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
  );
};

export default SignIn;

// Style for this component (similar to a CSS file)
const theme = StyleSheet.create({
  sign_container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: globalTheme.colors.screenBackground,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 100,
    backgroundColor: "white",
  },
  segmented_control: {
    marginTop: 30,
    marginBottom: 60,
    shadowOffset: { width: 15, height: 15 },
    shadowColor: "#C4C4C4",
    shadowOpacity: 1,
    elevation: 3,
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
    shadowOffset: { width: 15, height: 15 },
    shadowColor: "gray",
    shadowOpacity: 1,
    elevation: 3,
  },
});
