import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Button, Text } from "galio-framework";
import { View, Image } from "react-native";
import materialTheme from "../../constants/Theme";
const { height } = Dimensions.get("screen");
import UHelpCareImage from "../../assets/images/uhelpcare.png";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Icon from "../../components/Icon";
import PaymentCheck from "../../assets/images/payment/check.png";
import PaymentVenmo from "../../assets/images/payment/venmo.png";
import PaymentZelle from "../../assets/images/payment/zelle.png";
import PaymentPaypal from "../../assets/images/payment/paypal.png";
import MaskInput from "react-native-mask-input";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as ImagePicker from "expo-image-picker";
import BlankPhoto from "../../assets/images/blank.jpg";
import { HeaderHeight } from "../../constants/utils";
import * as Animatable from "react-native-animatable";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const SignUpCareProvider = ({ navigation }) => {
  const [phone, setPhone] = React.useState("");
  // const [image, setImage] = React.useState(null);
  let paddingVertical = 7;

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const ssn = [/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];

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
      marginTop: Platform.OS === "ios" ? HeaderHeight / 2.5 : 4,
    },

    backBtn2: {
      borderColor: "#87c9e4",
      backgroundColor: "#87c9e4",
      width: "48%",
      height: hp("6%"),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
      borderWidth: 1,
      marginRight: hp("1%"),
    },

    nextBtn: {
      backgroundColor: "#87c9e4",
      borderColor: "#87c9e4",
      width: "48%",
      height: hp("6%"),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
      borderWidth: 1,
      marginLeft: hp("0.8%"),
    },

    progressContainer: {
      paddingTop: hp("3%"),
      paddingLeft: hp("8%"),
      paddingRight: hp("8%"),
      backgroundColor: "#DCDCDC",
      height: Platform.OS === "ios" ? hp("65%") : hp("70%"),
    },

    input: {
      fontSize: hp("1.8%"),
      marginTop: hp("0.8"),
      marginBottom: hp("0.8%"),
      backgroundColor: "white",
      borderRadius: 4,
      padding: hp("1%"),
      paddingVertical: paddingVertical,
      fontFamily: "Poppins_400Regular",
    },
    headerText: {
      fontFamily: "Poppins_600SemiBold",
      position: "absolute",
      top: hp("2%"),
      color: "#000000",
      marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
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
          alignItems: "center",
          marginBottom: hp("5%"),
        }}
      >
        <Text
          size={hp("2.5%")}
          color="#000000"
          style={{
            fontFamily: "Poppins_400Regular",
            marginTop: hp("10%"),
          }}
        >
          Care Recipient Info
        </Text>

        <View
          animation="slideInRight"
          duration={400}
          style={styles.progressContainer}
        >
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.BLACK}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            First Name
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your First Name"
            placeholderTextColor="#D4D9DD"
          ></TextInput>
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.BLACK}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Last Name
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your Last Name"
            placeholderTextColor="#D4D9DD"
          ></TextInput>
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.BLACK}
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
            placeholderTextColor="#D4D9DD"
            mask={ssn}
            keyboardType="number-pad"
          />
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.BLACK}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Date of birth
          </Text>
          <TextInput
            style={styles.input}
            placeholder="DoB"
            placeholderTextColor="#D4D9DD"
          ></TextInput>
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.BLACK}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Phone Number
          </Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#D4D9DD"
          ></TextInput>
          <Text
            size={hp("1.8%")}
            color={materialTheme.COLORS.BLACK}
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Email Address
          </Text>
          <TextInput
            keyboardType="email-address"
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#D4D9DD"
          ></TextInput>
          <View
            style={{
              marginTop: hp("8%"),
              flexDirection: "row",
              justifyContent: "space-between",
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
            <View
              style={{
                height: hp("70%"),
                marginBottom: hp("12%"),
                paddingTop: hp("1%"),
                paddingLeft: Platform.OS === "android" ? wp("6%") : wp("6%"),
                paddingRight: Platform.OS === "android" ? wp("6%") : wp("6%"),
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpCareProvider;
