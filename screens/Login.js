import React, { useState, useEffect } from "react";
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
  Keyboard,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Logo from "../assets/images/icon2.png";
import LogoWhite from "../assets/images/icon-white.png";
import { Text as StyledText } from "galio-framework";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

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

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  let paddingVertical = 7;

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const styles = StyleSheet.create({
    container: {
      height: hp("100%"),
      flex: 1,
      backgroundColor: "#ffffff",
    },
    header: {
      alignItems: "center",
      height: hp("100%"),
      paddingTop: isKeyboardVisible ? hp("0%") : hp("10%"),
    },
    logo: {
      width: wp("80%"),
      height: hp("20%"),
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
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop: isKeyboardVisible ? -hp("80%") : -hp("60%"),
      height: hp("100%"),
      padding: hp("5%"),
    },
    action: {
      flexDirection: "row",
      marginTop: hp("1"),
      borderBottomWidth: 1,
      borderBottomColor: "#f2f2f2",
      paddingBottom: hp("1.5%"),
    },
    actionFocused: {
      flexDirection: "row",
      marginTop: hp("1"),
      borderBottomWidth: 1,
      borderBottomColor: "#8C00FF",
      paddingBottom: hp("1.5%"),
    },
    actionError: {
      flexDirection: "row",
      marginTop: hp("1"),
      borderBottomWidth: 1,
      borderBottomColor: "#FF0000",
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === "ios" ? 0 : -7,
      paddingLeft: 15,
      color: "#ffffff",
      fontSize: hp("2%"),
      fontFamily: "Poppins_400Regular",
    },
    textInputFocused: {
      flex: 1,
      marginTop: Platform.OS === "ios" ? 0 : -7,
      paddingLeft: 15,
      color: "#ffffff",
      fontSize: hp("2%"),
      fontFamily: "Poppins_400Regular",
    },
    errorMsg: {
      color: "#fe4d4d",
      fontSize: hp("1.7"),
      marginTop: hp("1%"),
    },
    button: {
      alignItems: "center",
      marginTop: hp("2%"),
    },
    signUp: {
      width: "100%",
      height: hp("5%"),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    signIn: {
      width: "100%",
      height: hp("5%"),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundColor: "#ffffff",
    },
    textSign: {
      fontSize: hp("2%"),
    },
    footerImage: {
      position: "absolute",
      bottom: hp("43%"),
      width: wp("20%"),
      height: hp("7%"),
    },
    footerText: {
      position: "absolute",
      bottom: hp("11%"),
      color: "#ffffff",
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#eaeeea" barStyle="dark-content" />
      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} resizeMode="contain"></Image>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: "#87c9e4",
          },
        ]}
      >
        <View style={!usernameFocused ? styles.action : styles.actionFocused}>
          <FontAwesome
            name="user-o"
            color={!usernameFocused ? "#ffffff" : "#8C00FF"}
            size={hp("3%")}
            style={{ marginTop: Platform.OS === "ios" ? 0 : -hp("0.9%") }}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#dafcfc"
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
              <Feather name="check-circle" color="#ffffff" size={hp("2.5%")} />
            </Animatable.View>
          ) : null}
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
              marginTop: hp("3%"),
            },
          ]}
        >
          <Feather
            name="lock"
            color={!passwordFocused ? "#ffffff" : "#8C00FF"}
            size={hp("3%")}
            style={{
              marginLeft: -2,
              marginTop: Platform.OS === "ios" ? 0 : -hp("0.9%"),
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#dafcfc"
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
              <Feather name="eye-off" color="#ffffff" size={hp("2.5%")} />
            ) : (
              <Feather name="eye" color="#ffffff" size={hp("2.5%")} />
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
        <TouchableOpacity>
          <Text
            style={{
              color: "#87c9e4",
              marginTop: hp("2%"),
              textAlign: "right",
              fontSize: hp("1.8%"),
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
                borderColor: "#ffffff",
                borderWidth: 1,
                marginTop: hp("1.8%"),
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#87c9e4",
                  fontFamily: "Poppins_600SemiBold",
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
                borderColor: "#ffffff",
                borderWidth: 1,
                marginTop: hp("1.8%"),
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  paddingVertical,
                  color: "#ffffff",
                  fontFamily: "Poppins_600SemiBold",
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
          source={LogoWhite}
          style={styles.footerImage}
          resizeMode="contain"
        ></Image>
      </View>
    </View>
  );
};

export default SignInScreen;
