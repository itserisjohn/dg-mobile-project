import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  ImageBackground,
  ScrollView,
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
import { windowHeightWithHeader } from "../../utils/utils";

const AddCareRecipient = ({ navigation }) => {
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
        <ScrollView
          style={{
            height: windowHeightWithHeader(75),
            paddingBottom: windowHeightWithHeader(2),
            flex: 1,
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
            <Text style={styles.titleContainer}>Patient</Text>
            <Text style={styles.titleContainer2}>Account Holder</Text>
          </View>
          <View
            View
            style={{
              width: wp(100),
            }}
          >
            <Text style={styles.descText} size={windowHeightWithHeader(1.8)}>
              Add Family Member/s
            </Text>
            <View style={styles.checkboxContainer2}>
              <View style={styles.square1}>
                <Text
                  size={22}
                  style={{
                    color: "#4B4C4C",
                    paddingLeft: wp(8),
                  }}
                >
                  1.
                </Text>
              </View>
              <View style={styles.square2}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CareRecipientInfoScreen")}
                >
                  <Text
                    size={22}
                    style={{
                      color: "#87c9e4",
                      textDecorationLine: "underline",
                    }}
                  >
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: windowHeightWithHeader(20),
            paddingTop: windowHeightWithHeader(3),
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
              Skip
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

export default AddCareRecipient;

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
    marginTop: windowHeightWithHeader(5),
    marginBottom: windowHeightWithHeader(3),
    fontSize: windowHeightWithHeader(3),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    paddingRight: windowHeightWithHeader(3.5),
    paddingLeft: wp(8),
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
    fontSize: windowHeightWithHeader(4),
    marginTop: windowHeightWithHeader(1.2),
    position: "relative",
  },
  titleContainer2: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(4),
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
