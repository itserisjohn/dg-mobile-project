import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import Logo from "../assets/images/Login-Logo.png";
import BGImage from "../assets/images/bg_login.png";
import LogoGoogle from "../assets/images/Login-Icon_Google.png";
import LogoFacebook from "../assets/images/Login-Icon_Facebook.png";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { windowHeight, windowHeightFull } from "../utils/utils";
import { userService } from "../services/auth";
import { ALERT_TYPE, Dialog, Root } from "react-native-alert-notification";

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    Username: "",
    Password: "",
  });
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [usernameFocused, setUsernameFocused] = React.useState(false);
  const [passwordFocused, setPasswordFocused] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // const textInputChange = (val) => {
  //   if (val.trim().length >= 4) {
  //     setData({
  //       ...data,
  //       username: val,
  //       check_textInputChange: true,
  //       isValidUser: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       username: val,
  //       check_textInputChange: false,
  //       isValidUser: false,
  //     });
  //   }
  // };

  // const handlePasswordChange = (val) => {
  //   if (val.trim().length >= 8) {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       password: val,
  //       isValidPassword: false,
  //     });
  //   }
  // };

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleValidUser = (val) => {
    // if (val.trim().length >= 4) {
    //   setData({
    //     ...data,
    //     isValidUser: true,
    //   });
    // } else {
    //   setData({
    //     ...data,
    //     isValidUser: false,
    //   });
    // }
  };

  // const loginHandle = (userName, password) => {
  //   const foundUser = [];

  //   if (data.username.length == 0 || data.password.length == 0) {
  //     Alert.alert(
  //       "Wrong Input!",
  //       "Username or password field cannot be empty.",
  //       [{ text: "Okay" }]
  //     );
  //     return;
  //   }

  //   if (foundUser.length == 0) {
  //     Alert.alert("Invalid User!", "Username or password is incorrect.", [
  //       { text: "Okay" },
  //     ]);
  //     return;
  //   }
  // };

  function onSubmit() {
    setLoading(true);
    const payload = { Username: username, Password: password };
    setData(payload);
    // setLoading(true);
    // return userService
    //   .login(username, password)
    //   .then(() => {
    //     // get return url from query parameters or default to '/'
    //     navigation.navigate("App");
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     // notification["error"]({
    //     //   message: "Login Failed",
    //     //   description:
    //     //     "Your username or password was incorrect. Please try again.",
    //     // });
    //     console.log("fail");
    //     setLoading(false);
    //   });
  }

  async function saveAccount() {
    setLoading(true);
    try {
      const user = await userService.login({
        Username: username,
        Password: password,
      });
      if (user) {
        setLoading(false);
        navigation.navigate("App");
      } else {
        setLoading(false);
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: "Login Failed",
          textBody:
            "Your username or password was incorrect. Please try again.",
          button: "close",
        });
      }
    } catch (err) {
      setLoading(false);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Login Failed",
        textBody: "Your username or password was incorrect. Please try again.",
        button: "close",
      });
    }
  }

  useEffect(() => {
    if (data) {
      if (data.Username && data.Password) {
        saveAccount();
      }
    }
  }, [data]);

  const onFocusUsername = (focus) => {
    setUsernameFocused(focus);
  };

  const onFocusPassword = (focus) => {
    setPasswordFocused(focus);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      alignItems: "center",
      height: windowHeightFull(42),
      paddingTop: windowHeightFull(21),
      // paddingTop: isKeyboardVisible ? hp("0%") : hp("20%"),
    },
    logo: {
      width: wp("75%"),
      height: windowHeightFull(15),
    },
    title1: {
      fontWeight: "600",
      color: "#87c9e4",
      fontFamily: "Poppins_600SemiBold",
    },
    title2: {
      fontWeight: "300",
      color: "#9966ff",
      fontFamily: "Poppins_300Light",
    },
    action: {
      flexDirection: "row",
      marginTop: windowHeight(1),
      borderBottomWidth: 1,
      borderBottomColor: "#f2f2f2",
      padding: 10,
      borderRadius: 8,
      backgroundColor: "#ffffff",
    },
    actionFocused: {
      flexDirection: "row",
      marginTop: windowHeight(1),
      borderBottomWidth: 1,
      borderBottomColor: "#8C00FF",
      padding: 10,
      borderRadius: 8,
      backgroundColor: "#ffffff",
    },
    actionError: {
      flexDirection: "row",
      marginTop: windowHeight(1),
      borderBottomWidth: 1,
      borderBottomColor: "#FF0000",
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      paddingLeft: 15,
      color: "#7933f3",
      fontSize: windowHeight(2),
      fontFamily: "Poppins_400Regular",
    },
    textInputFocused: {
      flex: 1,
      paddingLeft: 15,
      color: "#7933f3",
      fontSize: windowHeight(2),
      fontFamily: "Poppins_400Regular",
    },
    errorMsg: {
      color: "#fe4d4d",
      fontSize: windowHeightFull(1.7),
      marginTop: windowHeightFull(1),
    },
    button: {
      alignItems: "center",
      marginTop: windowHeight(2),
    },
    signUp: {
      width: "100%",
      height: windowHeight(5),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    signIn: {
      width: "100%",
      height: windowHeight(8),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    textSign: {
      fontSize: 22,
    },
    footer: {
      position: "absolute",
      bottom: windowHeight(5),
      alignItems: "center",
      alignContent: "center",
      width: wp("100%"),
    },
    footerText: {
      position: "absolute",
      bottom: windowHeight(11),
      color: "#87c9e4",
    },
    image: {
      height: "100%",
      width: "100%",
      resizeMode: "contain",
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    square: {
      flex: 1,
      alignItems: "center",
      marginTop: windowHeight(1.5),
    },
    square1: {
      flex: 1,
      alignItems: "flex-start",
    },
    square2: {
      flex: 1,
      alignItems: "flex-end",
    },
    description: {
      fontSize: 12,
      color: "#4B4C4C",
      fontFamily: "Poppins_400Regular",
      textAlign: "center",
    },
  });

  return (
    <Root>
      <View style={styles.container}>
        <StatusBar backgroundColor="#eaeeea" barStyle="dark-content" />
        <ImageBackground
          source={BGImage}
          resizeMode="stretch"
          style={styles.image}
        >
          <View style={styles.header}>
            <Image
              source={Logo}
              style={styles.logo}
              resizeMode="contain"
            ></Image>
            <Text
              style={{
                color: "#4c4c4c",
                textAlign: "center",
                fontSize: 14,
                marginTop: -windowHeightFull(0.5),
              }}
            >
              Bringing Care to you and your loved ones.
            </Text>
          </View>
          <Animatable.View
            animation="fadeInUpBig"
            style={{ paddingLeft: wp("5%"), paddingRight: wp("5%") }}
          >
            <View
              style={!usernameFocused ? styles.action : styles.actionFocused}
            >
              <MaterialCommunityIcons
                name="at"
                color="#7933f3"
                size={windowHeight(3)}
                style={{
                  marginLeft: -2,
                }}
              />
              <TextInput
                placeholder="Username"
                placeholderTextColor="#c1c1c1"
                style={
                  !usernameFocused ? styles.textInput : styles.textInputFocused
                }
                onBlur={() => onFocusUsername(false)}
                onFocus={() => onFocusUsername(true)}
                autoCapitalize="none"
                // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                onChangeText={(e) => setUsername(e)}
              />
              {/* {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  name="check-circle"
                  color="#87c9e4"
                  size={hp("2.5%")}
                />
              </Animatable.View>
            ) : null} */}
            </View>
            {/* {!data.isValidUser && usernameFocused ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          ) : null} */}
            <View
              style={[
                !passwordFocused ? styles.action : styles.actionFocused,
                {
                  marginTop: windowHeight(1.5),
                },
              ]}
            >
              <MaterialCommunityIcons
                name="key"
                color="#7933f3"
                size={windowHeight(3)}
                style={{
                  marginLeft: -2,
                }}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="#c1c1c1"
                secureTextEntry={secureTextEntry ? true : false}
                style={
                  !passwordFocused ? styles.textInput : styles.textInputFocused
                }
                onBlur={() => onFocusPassword(false)}
                onFocus={() => onFocusPassword(true)}
                autoCapitalize="none"
                onChangeText={(e) => setPassword(e)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {secureTextEntry ? (
                  <Feather
                    name="eye-off"
                    color="#7933f3"
                    size={windowHeight(3)}
                  />
                ) : (
                  <Feather name="eye" color="#7933f3" size={windowHeight(3)} />
                )}
              </TouchableOpacity>
            </View>
            {/* {!data.isValidPassword && passwordFocused ? (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          ) : null} */}
            <View style={styles.checkboxContainer}>
              <View style={styles.square1}>
                <TouchableOpacity>
                  <Text
                    onPress={() => navigation.navigate("SignUpCareProvider")}
                    style={{
                      color: "#ffffff",
                      marginTop: windowHeight(1),
                      textAlign: "right",
                      fontSize: windowHeight(1.5),
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    Create Account
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.square2}>
                <TouchableOpacity>
                  <Text
                    onPress={() =>
                      navigation.navigate("ForgotUsernamePassword")
                    }
                    style={{
                      color: "#4c4c4c",
                      marginTop: windowHeight(1),
                      textAlign: "right",
                      fontSize: windowHeight(1.4),
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => onSubmit()}
                style={[
                  styles.signIn,
                  {
                    backgroundColor: "#782ddb",
                    borderColor: "#782ddb",
                    borderWidth: 1,
                    marginTop: windowHeight(0.2),
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#f9e0ff",
                      fontFamily: "Poppins_600SemiBold",
                    },
                  ]}
                >
                  Log In{"  "}
                  {loading ? (
                    <ActivityIndicator size="small" color="#ffffff" />
                  ) : null}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: "#4c4c4c",
                  fontFamily: "Poppins_400Regular",
                  fontSize: windowHeight(1.5),
                  marginTop: windowHeight(3),
                }}
              >
                OR login with
              </Text>
              <View style={styles.checkboxContainer}>
                <View style={styles.square}></View>
                <View style={styles.square}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CheckListScreen")}
                    style={{
                      backgroundColor: "#fbfdfe",
                      borderColor: "#57bbcc",
                      borderWidth: 6,
                      padding: 11,
                      borderRadius: 30,
                    }}
                  >
                    <Image
                      source={LogoGoogle}
                      style={{}}
                      resizeMode="contain"
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.square}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#fbfdfe",
                      borderColor: "#57bbcc",
                      borderWidth: 6,
                      padding: 10,
                      paddingLeft: 16,
                      borderRadius: 30,
                      width: 60,
                      height: 60,
                    }}
                  >
                    <Image
                      source={LogoFacebook}
                      style={{}}
                      resizeMode="contain"
                    ></Image>
                  </TouchableOpacity>
                </View>
                <View style={styles.square}></View>
              </View>
            </View>
          </Animatable.View>
        </ImageBackground>
        <View style={styles.footer}>
          <Text
            style={{
              color: "#4c4c4c",
              fontFamily: "Poppins_400Regular",
              fontSize: windowHeight(1.5),
              marginTop: windowHeight(4),
              textAlign: "center",
            }}
          >
            By signing up, you agree with our
          </Text>
          <Text
            style={{
              color: "#f9e0ff",
              fontFamily: "Poppins_400Regular",
              fontSize: windowHeight(1.5),
              textAlign: "center",
            }}
          >
            Terms & Conditions
          </Text>
        </View>
      </View>
    </Root>
  );
};

export default SignInScreen;
