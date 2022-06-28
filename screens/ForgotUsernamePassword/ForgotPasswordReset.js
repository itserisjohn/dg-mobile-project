import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Communications,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "../../components";
import { Button, Text } from "galio-framework";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ForgotPasswordReset = ({ navigation }) => {
  const [data, setData] = React.useState({
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidPassword: true,
  });

  const [passwordFocused, setPasswordFocused] = React.useState(false);

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

  const onFocusPassword = (focus) => {
    setPasswordFocused(focus);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Button
        style={styles.backBtn}
        color="transparent"
        onPress={() => navigation.navigate("ForgotPasswordCode")}
      >
        <Icon
          size={hp("5%")}
          name="chevron-left"
          family="feather"
          color={"#4B4C4C"}
          style={styles.backBtn}
        />
      </Button>

      <View style={{ height: hp("100%") }}>
        <View style={{ alignItems: "center" }}>
          <Text size={hp("2.5%")} style={styles.headerText}>
            Forgot Password?
          </Text>
          <View style={styles.progressContainer}>
            <View
              style={{
                marginTop: hp("2%"),
                marginBottom: Platform.OS === "ios" ? hp("5%") : hp("3%"),
                paddingLeft: wp("6%"),
                paddingRight: wp("6%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                }}
                size={hp("2%")}
              >
                Reset Password
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                }}
                size={hp("2%")}
              >
                Set the new password of your account so you can access all the
                features.
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
              }}
              size={hp("2%")}
            >
              Enter new password
            </Text>
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
                color={!passwordFocused ? "#4B4C4C" : "#87c9e4"}
                size={hp("3%")}
                style={{
                  marginLeft: -2,
                  marginTop: Platform.OS === "ios" ? 0 : -hp("0.9%"),
                }}
              />
              <TextInput
                placeholder=""
                placeholderTextColor="#4B4C4C"
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
                  <Feather name="eye-off" color="#4B4C4C" size={hp("2.5%")} />
                ) : (
                  <Feather name="eye" color="#4B4C4C" size={hp("2.5%")} />
                )}
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
              }}
              size={hp("2%")}
            >
              Comfirm password
            </Text>
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
                color={!passwordFocused ? "#4B4C4C" : "#87c9e4"}
                size={hp("3%")}
                style={{
                  marginLeft: -2,
                  marginTop: Platform.OS === "ios" ? 0 : -hp("0.9%"),
                }}
              />
              <TextInput
                placeholder=""
                placeholderTextColor="#4B4C4C"
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
                  <Feather name="eye-off" color="#4B4C4C" size={hp("2.5%")} />
                ) : (
                  <Feather name="eye" color="#4B4C4C" size={hp("2.5%")} />
                )}
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPasswordUpdated")}
                style={styles.SubmitBtn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      fontSize: 16,
                      color: "#FFFFFF",
                      fontFamily: "Poppins_400Regular",
                    },
                  ]}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
  },
  headerText: {
    position: "absolute",
    top: hp("2.5%"),
    color: "#4B4C4C",
    fontFamily: "Poppins_600SemiBold",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
  },
  backBtn: {
    alignItems: "flex-start",
    position: "absolute",
    marginLeft: 0,
    top: 0,
    borderColor: "transparent",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 2.5 : 6,
  },
  SubmitBtn: {
    width: "50%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#87c9e4",
    borderColor: "#87c9e4",
    borderWidth: 1,
    marginTop: hp("7%"),
  },
  progressContainer: {
    marginTop: hp("13%"),
    paddingTop: hp("1%"),
    paddingLeft: hp("4%"),
    paddingRight: hp("4%"),
    backgroundColor: "#f2f4f5",
    height: Platform.OS === "ios" ? hp("65%") : hp("65%"),
  },
  actionFocused: {
    flexDirection: "row",
    marginTop: hp("1"),
    borderBottomWidth: 1,
    borderBottomColor: "#87c9e4",
    paddingBottom: hp("1.5%"),
  },
  action: {
    flexDirection: "row",
    marginTop: hp("1"),
    borderBottomWidth: 1,
    borderBottomColor: "#4B4C4C",
    paddingBottom: hp("1.5%"),
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -7,
    paddingLeft: 15,
    color: "#4B4C4C",
    fontSize: hp("2%"),
    fontFamily: "Poppins_400Regular",
  },
  textInputFocused: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -7,
    paddingLeft: 15,
    color: "#4B4C4C",
    fontSize: hp("2%"),
    fontFamily: "Poppins_400Regular",
  },
});

export default ForgotPasswordReset;
