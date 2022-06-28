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

const ForgotPasswordCode = ({ navigation }) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Button
        style={styles.backBtn}
        color="transparent"
        onPress={() => navigation.navigate("ForgotPassword")}
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
              }}
            >
              <Text
                style={{ fontFamily: "Poppins_400Regular" }}
                size={hp("2%")}
              >
                Enter 4 digit code that you received in email or phone.
              </Text>
              <View style={styles.CodeContainer}>
                <View style={styles.TextInputView}>
                  <TextInput
                    ref={pin1Ref}
                    keyboardType={"number-pad"}
                    maxLenght={1}
                    onChange={(pin1) => {
                      setPin1(pin1);
                      if (pin1 != "") {
                        pin2Ref.current.focus();
                      }
                    }}
                    style={styles.TextInputText}
                  />
                </View>
                <View style={styles.TextInputView}>
                  <TextInput
                    ref={pin2Ref}
                    keyboardType={"number-pad"}
                    maxLenght={1}
                    onChange={(pin2) => {
                      setPin2(pin2);
                      if (pin2 != "") {
                        pin3Ref.current.focus();
                      }
                    }}
                    style={styles.TextInputText}
                  />
                </View>
                <View style={styles.TextInputView}>
                  <TextInput
                    ref={pin3Ref}
                    keyboardType={"number-pad"}
                    maxLenght={1}
                    onChange={(pin3) => {
                      setPin3(pin3);
                      if (pin3 != "") {
                        pin4Ref.current.focus();
                      }
                    }}
                    style={styles.TextInputText}
                  />
                </View>
                <View style={styles.TextInputView}>
                  <TextInput
                    ref={pin4Ref}
                    keyboardType={"number-pad"}
                    maxLenght={1}
                    onChange={(pin4) => {
                      setPin4(pin4);
                      if (pin4 != "") {
                        pin4Ref.current.focus();
                      }
                    }}
                    style={styles.TextInputText}
                  />
                </View>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPasswordReset")}
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
  CodeContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: hp("5%"),
    // borderColor: "#87c9e4",
    // borderWidth: 1,
  },
  TextInputView: {
    borderBottomWidth: 1,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInputText: {
    fontSize: 30,
  },
});

export default ForgotPasswordCode;
