import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
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
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-fullpage-form";

const AddCreditCard = ({ navigation }) => {
  const onChange = (form) => {
    console.log(form);
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.backBtn}
        color="transparent"
        onPress={() => navigation.navigate("PaymentInfoScreen")}
      >
        <Icon
          size={hp("5%")}
          name="chevron-left"
          family="feather"
          color={"#5CCBE6"}
          style={styles.backBtn}
        />
      </Button>
      <View style={{ alignItems: "center" }}>
        <Text size={hp("2.5%")} style={styles.headerText}>
          User Account Holder
        </Text>
      </View>
      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View
            style={{
              height: hp("70%"),
              marginTop: hp("10%"),
              paddingLeft: wp("14%"),
              paddingRight: wp("14%"),
            }}
          >
            <View
              style={{
                alignItems: "center",
                marginBottom: hp("5%"),
              }}
            >
              <Text size={hp("2.5%")} color="#4B4C4C">
                Add Credit Card
              </Text>
            </View>
            <SafeAreaView style={styles.container}>
              <KeyboardAvoidingView
                style={styles.avoider}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <CreditCardInput onChange={onChange} />
              </KeyboardAvoidingView>
            </SafeAreaView>
          </View>
          <View
            style={{
              paddingLeft: wp("14%"),
              paddingRight: wp("14%"),
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("PaymentInfoScreen")}
              style={styles.backBtn2}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#5CCBE6",
                  },
                ]}
              >
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("CheckList2Screen")}
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
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AddCreditCard;

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
    borderColor: "#5CCBE6",
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
    color: "#5CCBE6",
    fontWeight: "bold",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
  },
  nextBtn: {
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#5CCBE6",
    borderColor: "#5CCBE6",
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
