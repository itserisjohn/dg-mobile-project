import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Button, Text } from "galio-framework";
import { View, Image } from "react-native";
const { height } = Dimensions.get("screen");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Checkbox } from "galio-framework";
import Icon from "../../components/Icon";
import { HeaderHeight } from "../../constants/utils";
import Credit from "../../assets/images/payment/credit.png";
import PaymentPaypal from "../../assets/images/payment/paypal.png";
import CashApp from "../../assets/images/payment/cash-app.png";

const PaymentInfo = ({ navigation }) => {
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
          paddingLeft: wp("20%"),
          paddingRight: wp("20%"),
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: hp("5%"),
          }}
        >
          <Text size={hp("2.5%")} color="#4B4C4C">
            Payment Information
          </Text>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddCreditCardScreen")}
            >
              <Image
                source={Credit}
                style={styles.paymentImage2}
                resizeMode="contain"
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square}>
            <Text
              size={22}
              color={"#4B4C4C"}
              style={{ marginLeft: -hp("2.5%"), marginTop: hp("3.5%") }}
              onPress={() => navigation.navigate("AddCreditCardScreen")}
            >
              Credit Card
            </Text>
          </View>
        </View>
        <View style={styles.checkboxContainer}>
          <Image
            source={PaymentPaypal}
            style={styles.paymentImage}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={styles.checkboxContainer}>
          <Image
            source={CashApp}
            style={styles.paymentImage}
            resizeMode="contain"
          ></Image>
        </View>
        <View style={{ marginTop: hp("5%") }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckListScreen")}
            style={styles.nextBtn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#ffffff",
                },
              ]}
            >
              Back
            </Text>
          </TouchableOpacity>
          <Text
            style={{ color: "#87c9e4", marginTop: 16, textAlign: "center" }}
            onPress={() => navigation.navigate("App")}
          >
            Decide Later
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentInfo;

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
    fontWeight: "bold",
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
    marginBottom: hp("4%"),
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
  square: {
    flex: 2,
    height: hp("12%"),
    alignItems: "center",
  },
});
