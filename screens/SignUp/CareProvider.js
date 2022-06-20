import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  Platform,
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
import { ScrollView } from "react-native-gesture-handler";

const SignUpCareProvider = ({ navigation }) => {
  const [phone, setPhone] = React.useState("");
  const [image, setImage] = React.useState(null);
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

  const buttonTextStyle = {
    textAlign: "center",
    color: "#ffffff",
    fontSize: wp("4%"),
    fontFamily: "Poppins_400Regular",
  };

  const buttonStyle = {
    width: 100,
    backgroundColor: "#87c9e4",
    padding: 8,
    borderRadius: 4,
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    if (Platform.OS === "ios") {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== "granted") {
        const { newStatus } = await ImagePicker.requestCameraPermissionsAsync();
        if (newStatus !== "granted") {
        } else {
          return false;
        }
      }
    }

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

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
    footerImage: {
      position: "absolute",
      bottom: hp("3.5%"),
      width: wp("20%"),
      height: hp("7%"),
    },
    footerText: {
      position: "absolute",
      bottom: hp("1%"),
      color: "#00b9d4",
    },
    progressContainer: {
      marginBottom: 20,
      paddingTop: hp("2.5%"),
      paddingLeft: hp("4%"),
      paddingRight: hp("4%"),
      backgroundColor: "#f2f4f5",
      height: Platform.OS === "ios" ? hp("65%") : hp("65%"),
    },
    progressContainerPhoto: {
      marginBottom: 20,
      alignItems: "center",
      paddingTop: hp("10%"),
      backgroundColor: "#f2f4f5",
      height: Platform.OS === "ios" ? hp("65%") : hp("65%"),
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
    paymentImage: {
      maxWidth: hp("12%"),
      height: hp("12%"),
    },
    paymentImage2: {
      maxWidth: hp("10%"),
      height: hp("10%"),
    },
    boxContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
    },
    boxContainer2: {
      marginBottom: -hp("10%"),
      flex: 1,
      flexDirection: "row",
      alignItems: "flex-start",
    },
    square: {
      flex: 2,
      height: hp("12%"),
      margin: 4,
      alignItems: "center",
    },
    headerText: {
      fontFamily: "Poppins_600SemiBold",
      position: "absolute",
      top: hp("2%"),
      color: "#4B4C4C",
      marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Button
        style={styles.backBtn}
        color="transparent"
        onPress={() => navigation.navigate("ChecklistEmptyScreen")}
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
            Create a Care Provider Profile
          </Text>
        </View>
        <ProgressSteps
          activeStepIconColor="#87c9e4"
          disabledStepNumColor="transparent"
          activeStepIconBorderColor="#87c9e4"
          activeStepNumColor="#87c9e4"
          activeLabelColor="#87c9e4"
          completedProgressBarColor="#87c9e4"
          completedStepIconColor="#87c9e4"
          topOffset={Platform.OS === "ios" ? hp("12%") : hp("8%")}
          marginBottom={Platform.OS === "ios" ? hp("13%") : hp("9%")}
          labelFontSize={hp("1.6%")}
          labelFontFamily="Poppins_400Regular"
        >
          <ProgressStep
            label="Account Information"
            nextBtnStyle={buttonStyle}
            nextBtnTextStyle={buttonTextStyle}
            nextBtnText="Next"
            scrollable={false}
            style={{ backgroundColor: "#daf0f0" }}
          >
            <View style={styles.progressContainer}>
              <Text
                size={hp("1.8%")}
                color={materialTheme.COLORS.BLACK}
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Username
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#c2c1c1"
              ></TextInput>
              <Text
                size={hp("1.8%")}
                color={materialTheme.COLORS.BLACK}
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Password
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#c2c1c1"
              ></TextInput>
              <Text
                size={hp("1.8%")}
                color={materialTheme.COLORS.BLACK}
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Confirm Password
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#c2c1c1"
              ></TextInput>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Personal Information"
            nextBtnStyle={buttonStyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnStyle={buttonStyle}
            previousBtnTextStyle={buttonTextStyle}
            previousBtnText="Previous"
            nextBtnText="Next"
            scrollable={false}
            style={{ backgroundColor: "#daf0f0" }}
          >
            <View
              animation="slideInRight"
              duration={400}
              style={styles.progressContainer}
            >
              <ScrollView
                style={{ height: "100%" }}
                showsVerticalScrollIndicator={false}
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
                  placeholderTextColor="#c2c1c1"
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
                  placeholderTextColor="#c2c1c1"
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
                  placeholder="xxx-xx-xxxx"
                  placeholderTextColor="#c2c1c1"
                  mask={ssn}
                  keyboardType="number-pad"
                />
                <Text
                  size={hp("1.8%")}
                  color={materialTheme.COLORS.BLACK}
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Date of Birth
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="DoB"
                  placeholderTextColor="#c2c1c1"
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
                  placeholder="(xxx) xxx-xxxx"
                  placeholderTextColor="#c2c1c1"
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
                  placeholder="example@email.com"
                  placeholderTextColor="#c2c1c1"
                ></TextInput>
              </ScrollView>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Address Details"
            nextBtnStyle={buttonStyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnStyle={buttonStyle}
            previousBtnTextStyle={buttonTextStyle}
            previousBtnText="Previous"
            nextBtnText="Next"
            scrollable={false}
          >
            <View style={styles.progressContainer}>
              <ScrollView
                style={{ height: "100%" }}
                showsVerticalScrollIndicator={false}
              >
                <Text
                  size={hp("1.8%")}
                  color={materialTheme.COLORS.WHITE}
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Address
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c2c1c1"
                ></TextInput>
                <Text
                  size={hp("1.8%")}
                  color={materialTheme.COLORS.BLACK}
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Apt/Unit/Lot #
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c2c1c1"
                ></TextInput>
                <Text
                  size={hp("1.8%")}
                  color={materialTheme.COLORS.BLACK}
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  City
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c2c1c1"
                ></TextInput>
                <Text
                  size={hp("1.8%")}
                  color={materialTheme.COLORS.BLACK}
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  State
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c2c1c1"
                ></TextInput>
                <Text
                  size={hp("1.8%")}
                  color={materialTheme.COLORS.BLACK}
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Postal Code
                </Text>
                <TextInput
                  style={styles.input}
                  placeholderTextColor="#c2c1c1"
                ></TextInput>
              </ScrollView>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Profile Photo"
            nextBtnStyle={buttonStyle}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnStyle={buttonStyle}
            previousBtnTextStyle={buttonTextStyle}
            previousBtnText="Previous"
            nextBtnText="Next"
            scrollable={false}
            onSubmit={() => navigation.navigate("ChooseAccountScreen")}
          >
            <View style={styles.progressContainerPhoto}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 200,
                    height: 200,
                    borderWidth: 6,
                    borderRadius: 4,
                    borderColor: "#ffffff",
                  }}
                />
              ) : (
                <Image
                  source={BlankPhoto}
                  style={{
                    width: 200,
                    height: 200,
                    borderWidth: 6,
                    borderRadius: 4,
                    borderColor: "#ffffff",
                  }}
                />
              )}
              <Text
                size={hp("2.5%")}
                color={materialTheme.COLORS.BLACK}
                onPress={takePhoto}
                style={{ marginTop: 30, fontFamily: "Poppins_400Regular" }}
              >
                Take a Photo
              </Text>
              {/* <Text
                size={hp("2%")}
                color={materialTheme.COLORS.BLACK}
                onPress={pickImage}
                style={{ marginTop: 12 }}
              >
                Choose Photo
              </Text> */}
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
};
export default SignUpCareProvider;
