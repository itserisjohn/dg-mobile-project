import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
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
import { HeaderHeight } from "../../constants/utils";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const LegalWaiver = ({ navigation }) => {
  const [accepted, setAccepted] = React.useState(false);

  let paddingVertical = 7;

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const valueChanged = () => {
    setAccepted(!accepted);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={{ height: hp("65%"), padding: hp("5%") }}>
        <Text color="#696c74" style={styles.titleContainer}>
          Legal Waiver
        </Text>
        <ScrollView style={styles.scrollView}>
          <Text size={hp("2%")} color="#696c74" style={styles.textContainer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            massa vitae tortor condimentum. Quam quisque id diam vel quam
            elementum pulvinar etiam. Non blandit massa enim nec dui nunc.
            Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper. Sodales ut eu sem integer vitae justo eget magna.
            Hendrerit gravida rutrum quisque non tellus orci ac. Eget nulla
          </Text>
          <Text
            size={hp("2%")}
            color="#696c74"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            massa vitae tortor condimentum. Quam quisque id diam vel quam
            elementum pulvinar etiam. Non blandit massa enim nec dui nunc.
            Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
            ullamcorper. Sodales ut eu sem integer vitae justo eget magna.
            Hendrerit gravida rutrum quisque non tellus orci ac. Eget nulla
          </Text>
        </ScrollView>
      </View>
      <View style={{ height: hp("35%"), padding: hp("5%") }}>
        <Checkbox
          color="#00b9d4"
          label="I agree to these terms and policies"
          value={accepted}
          onChange={valueChanged}
          labelStyle={{ fontFamily: "Poppins_400Regular" }}
        />
        <View style={{ marginTop: hp("5%") }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.backBtn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  paddingVertical,
                  color: "#ffffff",
                  fontFamily: "Poppins_400Regular",
                },
              ]}
            >
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpCareProviderScreen")}
            style={accepted ? styles.nextBtn : styles.disabledBtn}
            disabled={!accepted}
          >
            <Text
              style={[
                styles.textSign,
                {
                  paddingVertical,
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

export default LegalWaiver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  titleContainer: {
    fontFamily: "Poppins_500Medium",
    textAlign: "center",
    color: "#4B4C4C",
    fontSize: hp("3%"),
    marginBottom: hp("2.2%"),
    marginTop: Platform.OS === "ios" ? HeaderHeight / 2.5 : 6,
  },
  textContainer: {
    marginBottom: hp("2.2%"),
    fontFamily: "Poppins_400Regular",
  },
  backBtn: {
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#a6aab7",
    borderColor: "#a6aab7",
    borderWidth: 1,
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
  scrollView: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#d1d2d6",
    padding: hp("1%"),
  },
});
