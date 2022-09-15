import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Image,
} from "react-native";
import { Text } from "galio-framework";
import { View } from "react-native";
const { width, height } = Dimensions.get("window");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "../../components/Icon";
import BGImage from "../../assets/images/bg_Create-Account.png";
import SuccessImage from "../../assets/images/img_success-check.png";
import { windowHeightWithHeader } from "../../utils/utils";

const CheckList4 = ({ navigation }) => {
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
            onPress={() => navigation.navigate("ServicePreferenceScreen")}
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
            height: windowHeightWithHeader(75),
            paddingBottom: windowHeightWithHeader(2),
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
            <Text style={styles.titleContainer}>Get Fully</Text>
            <Text style={styles.titleContainer2}>Verified</Text>
          </View>
          <View
            View
            style={{
              height: windowHeightWithHeader(48),
              paddingLeft: wp(8),
              width: wp(100),
            }}
          >
            <Text style={styles.descText} size={windowHeightWithHeader(1.8)}>
              Get fully verified to secure your account and gain access to all
              services.
            </Text>
            <View style={styles.checkboxContainer2}>
              <View style={styles.square1}>
                <Image
                  resizeMode={"contain"}
                  style={{ height: 35, width: 35 }}
                  source={SuccessImage}
                ></Image>
              </View>
              <View style={styles.square2}>
                <Text
                  size={hp("2.5%")}
                  color="#4B4C4C"
                  style={{
                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  Account Information
                </Text>
              </View>
            </View>
            <View style={styles.checkboxContainer2}>
              <View style={styles.square1}>
                <Image
                  resizeMode={"contain"}
                  style={{ height: 35, width: 35 }}
                  source={SuccessImage}
                ></Image>
              </View>
              <View style={styles.square2}>
                <Text
                  size={hp("2.5%")}
                  color="#4B4C4C"
                  style={{
                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  Payment Information
                </Text>
              </View>
            </View>
            <View style={styles.checkboxContainer2}>
              <View style={styles.square1}>
                <Image
                  resizeMode={"contain"}
                  style={{ height: 35, width: 35 }}
                  source={SuccessImage}
                ></Image>
              </View>
              <View style={styles.square2}>
                <Text
                  size={hp("2.5%")}
                  color="#4B4C4C"
                  style={{
                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  Other Information
                </Text>
              </View>
            </View>
            <View style={styles.checkboxContainer2}>
              <View style={styles.square1}>
                <Image
                  resizeMode={"contain"}
                  style={{ height: 35, width: 35 }}
                  source={SuccessImage}
                ></Image>
              </View>
              <View style={styles.square2}>
                <Text
                  size={hp("2.5%")}
                  color="#4B4C4C"
                  style={{
                    fontFamily: "Poppins_500Medium",
                  }}
                >
                  Service Preference
                </Text>
              </View>
            </View>
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
            onPress={() => navigation.navigate("App")}
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
              Home
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

export default CheckList4;

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
    marginTop: windowHeightWithHeader(11),
    marginBottom: windowHeightWithHeader(3),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    paddingRight: windowHeightWithHeader(3.5),
  },
  nextBtn: {
    height: windowHeightWithHeader(10),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#41c3e0",
    borderColor: "#41c3e0",
    borderWidth: 1,
    width: wp(90),
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
    paddingLeft: wp(76),
  },
  textSign: {
    position: "absolute",
    paddingLeft: windowHeightWithHeader(4),
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
    fontSize: 54,
  },
  checkheartContainer: {
    flexDirection: "row",
    marginBottom: windowHeightWithHeader(3),
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Platform.OS === "ios" ? 35 : 25,
  },
  square1: {
    flex: 1,
    alignItems: "flex-start",
  },
  square2: {
    flex: 5,
    alignItems: "flex-start",
  },
});
