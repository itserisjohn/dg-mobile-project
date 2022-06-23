import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Communications,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Icon } from "../components";
import { Button, Text } from "galio-framework";

const ForgotUsername = ({ navigation }) => {
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
            Forgot Username
          </Text>

          <View style={styles.progressContainer}>
            <View
              style={{
                marginTop: hp("2%"),
                marginBottom: Platform.OS === "ios" ? hp("5%") : hp("3%"),
                paddingLeft: wp("6%"),
                paddingRight: wp("6%"),
              }}
            >
              <Text
                size={22}
                color="#4B4C4C"
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Account Verification
              </Text>
            </View>
            <View>
              {/* SMS: text(phoneNumber = null, body = null) */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={() =>
                  Communications.text(
                    "0123456789",
                    "Follow https://aboutreact.com"
                  )
                }
              >
                <Text style={styles.buttonTextStyle}>
                  Send code to your mobile
                </Text>
              </TouchableOpacity>
              {/* Mail: email(to, cc, bcc, subject, body) */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btn}
                onPress={() =>
                  Communications.email(
                    ["aboutreact11@gmail.com", "hello@aboutreact.com"],
                    null,
                    null,
                    "Demo Subject",
                    "Demo Content for the mail"
                  )
                }
              >
                <Text style={styles.buttonTextStyle}>Send code via Email</Text>
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
  btn: {
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#87c9e4",
    borderColor: "#87c9e4",
    borderWidth: 1,
    marginTop: hp("1.8%"),
  },
  buttonTextStyle: {
    color: "#ffffff",
    textAlign: "center",
  },
  progressContainer: {
    marginTop: hp("13%"),
    paddingTop: hp("1%"),
    paddingLeft: hp("4%"),
    paddingRight: hp("4%"),
    backgroundColor: "#f2f4f5",
    height: Platform.OS === "ios" ? hp("65%") : hp("65%"),
  },
});

export default ForgotUsername;
