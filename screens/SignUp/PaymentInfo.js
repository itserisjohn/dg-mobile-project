import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  ImageBackgroundBase,
} from "react-native";
import { Text } from "galio-framework";
import { View } from "react-native";
import Icon from "../../components/Icon";
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
import BGImage from "../../assets/images/bg_Create-Account.png";
import { windowHeightWithHeader } from "../../utils/utils";

import CustomIcon from "../../assets/CustomIconSVG/CustomIcon";

const PaymentInfo = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={BGImage}
        resizeMode="stretch"
        style={styles.image}
      >
        <View
          style={{
            height: windowHeightWithHeader(10),
          }}
        >
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("CheckListScreen")}
          >
            <Icon
              size={22}
              name="arrow-left"
              family="feather"
              color={"#DCDCDC"}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: windowHeightWithHeader(23),
            paddingLeft: wp("8%"),
            paddingRight: wp("8%"),
            paddingTop: windowHeightWithHeader(1),
            paddingBottom: windowHeightWithHeader(3),
          }}
        >
          <Text style={styles.titleContainer}>Payment</Text>
          <Text style={styles.titleContainer2}>Information</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddCreditCardListScreen")}
          >
            <View style={styles.checkboxContainer}>
              <Icon
                size={20}
                name="credit-card-alt"
                family="font-awesome"
                color={"#ffffff"}
                style={styles.CreditCardIcon}
              />
              <Text style={styles.text1}>Credit Card</Text>
              <Text style={styles.text2}>Tap to Add Primary Account</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.checkboxContainer}>
            <Icon
              size={24}
              name="paypal"
              family="font-awesome"
              color={"#ffffff"}
              style={styles.PaypalIcon}
            />
            <Text style={styles.text1}>Paypal</Text>
            <Text style={styles.text2}>Tap to Add Primary Account</Text>
          </View>

          <View style={styles.checkboxContainer}>
            <View style={styles.CashAppIcon}>
              <CustomIcon fill="#ffffff" />
            </View>
            <Text style={styles.text1}>Cash App</Text>
            <Text style={styles.text2}>Tap to Add Primary Account</Text>
          </View>
        </View>
        <View style={styles.newcardContainer}>
          <TouchableOpacity>
            <Text
              style={[
                styles.textSign,
                {
                  textAlign: "center",
                  color: "#ffffff",
                  fontFamily: "Poppins_500Medium",
                  fontSize: 20,
                },
              ]}
            >
              Add New Card
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: windowHeightWithHeader(18),
            marginTop: windowHeightWithHeader(12),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckListScreen")}
          >
            <View style={styles.nextBtn2}>
              <Text
                style={[
                  styles.textSign2,
                  {
                    color: "#d7feff",
                    fontFamily: "Poppins_700Bold",
                    fontSize: 26,
                  },
                ]}
              >
                Submit
              </Text>
              <Text style={styles.iconSign2}>
                <Icon
                  size={30}
                  name="chevron-right"
                  family="feather"
                  color={"#d7feff"}
                />
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("App")}
            disabled={isLoading}
          >
            <View style={[styles.nextBtn]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    textAlign: "center",
                    color: "#41c3e0",
                    fontFamily: "Poppins_700Bold",
                    fontSize: 26,
                    textDecorationLine: "underline",
                  },
                ]}
              >
                Decide Later
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PaymentInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  backBtn: {
    alignItems: "flex-start",
    width: 55,
    height: 53,
    marginLeft: wp(5),
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#6B24AA",
    borderColor: "#6B24AA",
    marginTop: Platform.OS == "ios" ? 44 : 22,
  },

  nextBtn: {
    height: windowHeightWithHeader(10),
    justifyContent: "center",
    borderRadius: 12,
    textAlign: "center",
  },
  titleContainer: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(6),
    marginTop: windowHeightWithHeader(1.2),
    position: "relative",
  },
  titleContainer2: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(6),
  },
  checkboxContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#6B24AA",
    borderRadius: 12,
    padding: 8,
    height: 70,
    width: wp("91%"),
    marginTop: windowHeightWithHeader(1.5),
    marginLeft: windowHeightWithHeader(2),
    paddingLeft: windowHeightWithHeader(3),
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: windowHeightWithHeader(10),
    borderWidth: 1,
    borderColor: "red",
  },
  nextBtn2: {
    height: windowHeightWithHeader(10),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#41c3e0",
    borderColor: "#41c3e0",
    borderWidth: 1,
    width: wp("91%"),
    marginTop: windowHeightWithHeader(1),
    marginLeft: windowHeightWithHeader(2),
  },
  iconSign2: {
    alignItems: "flex-end",
    position: "absolute",
    paddingLeft: wp("72%"),
  },
  textSign2: {
    position: "absolute",
    paddingLeft: windowHeightWithHeader(4),
  },
  text1: {
    position: "absolute",
    fontFamily: "Poppins_600SemiBold",
    paddingLeft: windowHeightWithHeader(1),
    paddingBottom: windowHeightWithHeader(2),
    marginLeft: windowHeightWithHeader(10),
  },
  text2: {
    position: "absolute",
    color: "#979797",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    paddingLeft: windowHeightWithHeader(1),
    paddingTop: windowHeightWithHeader(3),
    marginLeft: windowHeightWithHeader(10),
    marginBottom: windowHeightWithHeader(3),
  },
  CreditCardIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B24AA",
    borderColor: "#6B24AA",
    borderWidth: 1,
    padding: 12,
    borderRadius: 26,
    paddingLeft: windowHeightWithHeader(1.3),
    paddingRight: windowHeightWithHeader(1),
  },
  PaypalIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B24AA",
    borderColor: "#6B24AA",
    borderWidth: 1,
    padding: 10,
    borderRadius: 24,
    paddingLeft: windowHeightWithHeader(1.5),
  },
  CashAppIcon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B24AA",
    borderColor: "#6B24AA",
    borderWidth: 1,
    padding: 7,
    borderRadius: 24,
    paddingLeft: windowHeightWithHeader(1),
  },
  newcardContainer: {
    height: windowHeightWithHeader(7),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#6B24AA",
    borderColor: "#6B24AA",
    borderWidth: 1,
    width: wp("91%"),
    marginTop: windowHeightWithHeader(1.5),
    marginLeft: windowHeightWithHeader(2),
    paddingLeft: wp("8%"),
    paddingRight: wp("8%"),
  },
  textSign: {
    fontSize: 22,
  },
});

// size={22}
// color={"#4B4C4C"}
// style={{
//   marginLeft: -wp(22),
//   marginTop: windowHeightWithHeader(2.3),
//   fontFamily: "Poppins_400Regular",
// }}
// onPress={() => navigation.navigate("AddCreditCardListScreen")}
