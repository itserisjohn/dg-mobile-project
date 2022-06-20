import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  Switch,
  TextInput,
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
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import MaskInput from "react-native-mask-input";

const CareRecipientInfo = ({ navigation }) => {
  const [phone, setPhone] = React.useState("");
  const [image, setImage] = React.useState(null);
  let paddingVertical = 7;

  const ssn = [/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];

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
          height: hp("100%"),
          marginTop: hp("6%"),
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
            color="#000000"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Care Recipient Info
          </Text>
        </View>
        <View
          animation="slideInRight"
          duration={400}
          style={styles.progressContainer}
        >
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.WHITE}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            First Name
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your First Name"
            placeholderTextColor="#addddb"
          ></TextInput>
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.WHITE}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Last Name
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your Last Name"
            placeholderTextColor="#addddb"
          ></TextInput>
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.WHITE}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            SSN
          </Text>
          <MaskInput
            value={phone}
            style={styles.input}
            onChangeText={(masked, unmasked) => {
              setPhone(masked);
            }}
            placeholder="###-##-####"
            placeholderTextColor="#addddb"
            mask={ssn}
            keyboardType="number-pad"
          />
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.WHITE}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Date of birth
          </Text>
          <TextInput
            style={styles.input}
            placeholder="DoB"
            placeholderTextColor="#addddb"
          ></TextInput>
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.WHITE}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Phone Number
          </Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#addddb"
          ></TextInput>
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.WHITE}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Email Address
          </Text>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#addddb"
          ></TextInput>
        </View>

        <View
          style={{
            marginTop: hp("10%"),
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("OtherInformationScreen")}
            style={styles.backBtn2}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#ffffff",
                  fontFamily: "Poppins_400Regular",
                  textTransform: "uppercase",
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
                  textTransform: "uppercase",
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

export default CareRecipientInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
    backgroundColor: "#87c9e4",
    width: "45%",
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: hp("2%"),
  },
  headerText: {
    position: "absolute",
    top: hp("2.5%"),
    color: "#000000",
    fontFamily: "Poppins_700Bold",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
  },
  nextBtn: {
    width: "45%",
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#87c9e4",
    borderColor: "#87c9e4",
    borderWidth: 1,
    marginBottom: hp("2%"),
  },
  input: {
    fontSize: hp("1.8%"),
    width: "80%",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#87c9e4",
    padding: hp("0.8%"),

    fontFamily: "Poppins_400Regular",
  },
  progressContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: hp("7%"),
    paddingRight: hp("7%"),
    paddingBottom: hp("2%"),
    backgroundColor: "#87c9e4",
    height: Platform.OS === "ios" ? hp("65%") : hp("60%"),
  },
});
