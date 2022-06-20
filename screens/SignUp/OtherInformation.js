import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  Switch,
} from "react-native";
import { Button, Text } from "galio-framework";
import { View, Image } from "react-native";
const { height } = Dimensions.get("screen");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Checkbox, theme, Block } from "galio-framework";
import Icon from "../../components/Icon";
import { HeaderHeight } from "../../constants/utils";
import Credit from "../../assets/images/payment/credit.png";
import PaymentPaypal from "../../assets/images/payment/paypal.png";
import CashApp from "../../assets/images/payment/cash-app.png";
import materialTheme from "../../constants/Theme";

const OtherInformation = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Button
        style={styles.backBtn}
        color="transparent"
        onPress={() => navigation.navigate("CheckListScreen")}
      >
        <Icon
          size={hp("5%")}
          name="chevron-left"
          family="feather"
          color={"#87c9e4"}
          style={styles.backBtn}
        />
      </Button>
      <View style={{ alignItems: "center" }}>
        <Text size={hp("2.5%")} style={styles.headerText}>
          User Account Holder
        </Text>
      </View>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: hp("70%"),
          marginTop: hp("12%"),
          paddingTop: hp("5%"),
          paddingLeft: Platform.OS === "android" ? wp("11%") : wp("14%"),
          paddingRight: Platform.OS === "android" ? wp("11%") : wp("14%"),
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: hp("5%"),
          }}
        >
          <Text
            size={hp("2.5%")}
            color="#4B4C4C"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Other Information
          </Text>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}>
            <Switch
              style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
              ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
              thumbColor={
                Platform.OS === "android"
                  ? materialTheme.COLORS.SWITCH_OFF
                  : null
              }
              trackColor={{
                false: materialTheme.COLORS.SWITCH_OFF,
                true: "#87c9e4",
              }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.square2}>
            <Text
              size={16}
              color={"#4B4C4C"}
              style={{ textAlign: "left", fontFamily: "Poppins_400Regular" }}
            >
              Do you have any food or medication allergy?
            </Text>
          </View>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}>
            <Switch
              style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
              ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
              thumbColor={
                Platform.OS === "android"
                  ? materialTheme.COLORS.SWITCH_OFF
                  : null
              }
              trackColor={{
                false: materialTheme.COLORS.SWITCH_OFF,
                true: "#87c9e4",
              }}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
          <View style={styles.square2}>
            <Text
              size={16}
              color={"#4B4C4C"}
              style={{ textAlign: "left", fontFamily: "Poppins_400Regular" }}
            >
              Do you have any pets?
            </Text>
          </View>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}>
            <Switch
              style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
              ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
              thumbColor={
                Platform.OS === "android"
                  ? materialTheme.COLORS.SWITCH_OFF
                  : null
              }
              trackColor={{
                false: materialTheme.COLORS.SWITCH_OFF,
                true: "#87c9e4",
              }}
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
          <View style={styles.square2}>
            <Text
              size={16}
              color={"#4B4C4C"}
              style={{ textAlign: "left", fontFamily: "Poppins_400Regular" }}
            >
              Do you have any advance directive?
            </Text>
          </View>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}></View>
          <View style={styles.square2}></View>
        </View>
        <View
          style={{
            marginTop: hp("5%"),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckList2Screen")}
            style={styles.backBtn2}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#87c9e4",
                  fontFamily: "Poppins_400Regular",
                },
              ]}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("CareRecipientInfoScreen")}
            style={styles.nextBtn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#ffffff",
                  fontFamily: "Poppins_400Regular",
                },
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OtherInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    textAlign: "center",
    color: "#4B4C4C",
    fontSize: hp("3%"),
    marginBottom: hp("2.2%"),
  },
  textContainer: {
    marginBottom: hp("2.2%"),
  },
  backBtn: {
    alignItems: "flex-start",
    position: "absolute",
    marginLeft: 0,
    top: 0,
    borderColor: "transparent",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 2.5 : 6,
  },
  backBtn2: {
    borderColor: "#87c9e4",
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    marginTop: hp("1.8%"),
  },
  headerText: {
    position: "absolute",
    top: hp("2.5%"),
    color: "#87c9e4",
    fontFamily: "Poppins_700Bold",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
  },
  nextBtn: {
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
  disabledBtn: {
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#9de3f7",
    borderColor: "#9de3f7",
    borderWidth: 1,
    marginTop: hp("1.8%"),
  },
  checkboxContainer: {
    alignItems: "center",
    marginBottom: hp("4%"),
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  paymentImage: {
    maxWidth: hp("25%"),
    height: hp("10%"),
  },
  paymentImage2: {
    maxWidth: hp("10%"),
    height: hp("10%"),
    marginLeft: -hp("1%"),
  },
  square1: {
    flex: 1,
    height: hp("12%"),
    alignItems: "center",
  },
  square2: {
    flex: 2,
    height: hp("12%"),
    alignItems: "flex-start",
  },
  rows: {
    height: theme.SIZES.BASE * 2,
    paddingHorizontal: theme.SIZES.BASE,
    marginBottom: theme.SIZES.BASE / 2,
  },
});
