import React from "react";
import {
  StyleSheet,
  StatusBar,
  TextInput,
  email,
  TouchableOpacity,
  setEmail,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "../components";
import { Button, Text } from "galio-framework";
import { View } from "react-native";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Button
        style={styles.backBtn}
        color="transparent"
        onPress={() => navigation.navigate("Login")}
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
            Forgot Password
          </Text>

          <View style={styles.progressContainer}>
            <View>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#4B4C4C",
                    fontFamily: "Poppins_400Regular",
                  },
                ]}
              >
                {"Please enter your account email to reset your password:"}
              </Text>
              <TextInput
                style={styles.input}
                value={email}
                placeholder={"Your account email"}
                onChangeText={(text) => setEmail(text)}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
              />
              <TouchableOpacity onPress={() => doUserPasswordReset()}>
                <View style={styles.btn}>
                  <Text style={styles.btnLabel}>{"Reset Password"}</Text>
                </View>
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
  input: {
    fontSize: 14,
    marginTop: hp("1.1%"),
    marginBottom: hp("2.2%"),
    backgroundColor: "white",
    borderRadius: 4,
    padding: 14,
    fontFamily: "Poppins_400Regular",
  },
  progressContainer: {
    marginTop: hp("13%"),
    paddingTop: hp("1%"),
    paddingLeft: hp("4%"),
    paddingRight: hp("4%"),
    backgroundColor: "#f2f4f5",
    height: Platform.OS === "ios" ? hp("65%") : hp("65%"),
  },
  btn: {
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#87c9e4",
    borderColor: "#87c9e4",
    borderWidth: 1,
    marginTop: hp("1.8%"),
  },
  btnLabel: {
    color: "#ffffff",
    fontFamily: "Poppins_400Regular",
  },
  backBtn: {
    alignItems: "flex-start",
    position: "absolute",
    marginLeft: 0,
    top: 0,
    borderColor: "transparent",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 2.5 : 6,
  },
});

export default ForgotPassword;
