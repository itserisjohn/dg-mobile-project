import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  Switch,
  TextInput,
  ScrollView,
} from "react-native";
import { Button, Block, Text, Input, theme } from "galio-framework";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Image } from "react-native";
import logo from "../assets/images/icon.png";
import materialTheme from "../constants/Theme";
import { Icon, Product } from "../components/";

const { width } = Dimensions.get("screen");
import products from "../constants/products";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Home = ({ navigation }) => {
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
      <View
        style={{
          marginTop: hp("20%"),
          alignItems: "center",
        }}
      >
        <Image
          source={logo}
          style={{
            width: 200,
            height: 235,
            marginRight: 15,
          }}
        />
        <Text
          size={22}
          color={materialTheme.COLORS.BLACK}
          style={{
            fontFamily: "Poppins_600SemiBold",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          Welcome Test User!
        </Text>
        <Text
          size={18}
          color={materialTheme.COLORS.BLACK}
          style={{
            fontFamily: "Poppins_500Medium",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Care Level 1
        </Text>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
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
    color: "#4B4C4C",
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
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Platform.OS === "ios" ? 35 : 25,
  },
  square1: {
    flex: Platform.OS === "ios" ? 1 : 0.7,
    alignItems: "center",
  },
  square2: {
    flex: Platform.OS === "ios" ? 2 : 2.3,
    alignItems: "flex-start",
  },
});
