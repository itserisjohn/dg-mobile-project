import React from "react";
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import { Button, Text } from "galio-framework";
import { View } from "react-native";
import Icon from "../../components/Icon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SelectDropdown from "react-native-select-dropdown";
import { HeaderHeight } from "../../constants/utils";
const { width, height } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
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
import SuccessImage from "../../assets/images/img_success-check.png";
import { windowHeightWithHeader } from "../../utils/utils";

const ChooseAccount = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState(["As a User", "As a Care Provider"]);

  let paddingVertical = 7;

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
            onPress={() => navigation.navigate("Login")}
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
            height: windowHeightWithHeader(78),
            paddingBottom: windowHeightWithHeader(3),
          }}
        >
          <View
            style={{
              marginTop: windowHeightWithHeader(2),
              height: windowHeightWithHeader(9),
              paddingLeft: wp(8),
              paddingRight: wp(8),
            }}
          >
            <Text style={styles.titleContainer}>Success!</Text>
          </View>
          <View
            View
            style={{
              height: windowHeightWithHeader(25),
              alignItems: "center",
              alignContent: "center",
              width: wp(100),
              paddingLeft: wp(7),
            }}
          >
            <Image source={SuccessImage}></Image>
          </View>
          <View
            View
            style={{
              height: windowHeightWithHeader(32),
              paddingLeft: wp(8),
              width: wp(100),
            }}
          >
            <Text style={styles.descText} size={windowHeightWithHeader(2)}>
              Congratulations!
            </Text>
            <Text style={styles.descText2} size={windowHeightWithHeader(2)}>
              Your account has been successfully created.
            </Text>
            <Text style={styles.descText3} size={windowHeightWithHeader(2)}>
              Proceed to get fully verified.
            </Text>
          </View>
        </View>
        <View
          style={{
            height: windowHeightWithHeader(10),
            alignItems: "center",
            alignContent: "center",
            width: wp("100%"),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckListScreen")}
            style={styles.nextBtn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#d7feff",
                  fontFamily: "Poppins_700Bold",
                  fontSize: 26,
                },
              ]}
            >
              Proceed
            </Text>
            <Text style={styles.iconSign}>
              <Icon
                size={30}
                name="chevron-right"
                family="feather"
                color={"#d7feff"}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChooseAccount;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#f2f4f5",
  },
  image: {
    height: height,
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
  descText: {
    marginTop: windowHeightWithHeader(2.5),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    paddingRight: windowHeightWithHeader(25),
  },
  descText2: {
    marginTop: windowHeightWithHeader(2.5),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    paddingRight: windowHeightWithHeader(15),
  },
  descText3: {
    marginTop: windowHeightWithHeader(2.5),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    paddingRight: windowHeightWithHeader(14.5),
  },
  nextBtn: {
    height: windowHeightWithHeader(10),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#41c3e0",
    borderColor: "#41c3e0",
    borderWidth: 1,
    width: wp(85),
  },
  // DROPDOWN
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  iconSign: {
    alignItems: "flex-end",
    position: "absolute",
    paddingLeft: wp(72),
  },
  textSign: {
    position: "absolute",
    paddingLeft: windowHeightWithHeader(4),
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  titleContainer: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(6),
    marginTop: windowHeightWithHeader(1.2),
    position: "relative",
  },
});
