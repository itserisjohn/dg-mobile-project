import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Logo from "../assets/images/icon.png";
import UHelpCareImage from "../assets/images/uhelpcare.png";
import { Text as StyledText, theme } from "galio-framework";

const { width, height } = Dimensions.get("screen");

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const [usernameFocused, setUsernameFocused] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = [];

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }

    if (foundUser.length == 0) {
      Alert.alert("Invalid User!", "Username or password is incorrect.", [
        { text: "Okay" },
      ]);
      return;
    }
  };

  const onFocusUsername = (focus) => {
    setUsernameFocused(focus);
  };

  const onFocusPassword = (focus) => {
    setPasswordFocused(focus);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#eaeeea" barStyle="light-content" />
      <View style={styles.header}>
        {/* <Image source={Logo} style={styles.logo} resizeMode="contain"></Image>
        <StyledText size={40} style={styles.title1}>
          N.O.C Stat
        </StyledText>
        <StyledText size={19} style={styles.title2}>
          CARE ON COMMAND
        </StyledText> */}
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: "#ffffff",
          },
        ]}
      >
        <View style={!usernameFocused ? styles.action : styles.actionFocused}>
          <FontAwesome
            name="user-o"
            color={!usernameFocused ? "#4B4C4C" : "#5CCBE6"}
            size={26}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#666666"
            style={
              !usernameFocused ? styles.textInput : styles.textInputFocused
            }
            onBlur={() => onFocusUsername(false)}
            onFocus={() => onFocusUsername(true)}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#00b9d4" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {!data.isValidUser && usernameFocused ? (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        ) : null}
        <View
          style={[
            !passwordFocused ? styles.action : styles.actionFocused,
            {
              marginTop: 30,
            },
          ]}
        >
          <Feather
            name="lock"
            color={!passwordFocused ? "#4B4C4C" : "#5CCBE6"}
            size={26}
            style={{ marginLeft: -2 }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={
              !passwordFocused ? styles.textInput : styles.textInputFocused
            }
            onBlur={() => onFocusPassword(false)}
            onFocus={() => onFocusPassword(true)}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {!data.isValidPassword && passwordFocused ? (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        ) : null}
        <TouchableOpacity>
          <Text
            style={{
              color: "#5CCBE6",
              marginTop: 22,
              textAlign: "right",
              fontSize: 16,
            }}
          >
            Forgot username/password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("App")}
            style={[
              styles.signIn,
              {
                borderColor: "#5CCBE6",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#ffffff",
                },
              ]}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpCareProvider")}
            style={[
              styles.signUp,
              {
                borderColor: "#00b9d4",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#00b9d4",
                },
              ]}
            >
              Create an Account
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={UHelpCareImage}
          style={styles.footerImage}
          resizeMode="contain"
        ></Image>
        <Text size={15} style={styles.footerText}>
          UHelpCare
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5CCBE6",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: height / 1,
  },
  logo: {
    width: "30%",
    maxWidth: 300,
    height: 130,
  },
  title1: {
    fontWeight: "600",
    color: "#ffffff",
  },
  title2: {
    fontWeight: "300",
    color: "#9966ff",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 40,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 12,
  },
  actionFocused: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#5CCBE6",
    paddingBottom: 12,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 15,
    color: "#4B4C4C",
    fontSize: 16,
  },
  textInputFocused: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 15,
    color: "#4B4C4C",
    fontSize: 16,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 20,
  },
  signUp: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#5CCBE6",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footerImage: {
    position: "absolute",
    bottom: 40,
    width: "20%",
    maxWidth: 200,
    height: 60,
  },
  footerText: {
    position: "absolute",
    bottom: 20,
    color: "#00b9d4",
  },
});
