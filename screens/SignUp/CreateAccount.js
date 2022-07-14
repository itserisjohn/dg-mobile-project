import React from "react";
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Text,
  View,
} from "react-native";
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("window");
import { windowHeightWithHeader } from "../../utils/utils";
import BGImage from "../../assets/images/bg_Create-Account.png";

const CreateAccount = ({ navigation }) => {
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
            height: windowHeightWithHeader(12),
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
            height: windowHeightWithHeader(26),
            paddingLeft: wp("8"),
            paddingRight: wp("8"),
            paddingTop: windowHeightWithHeader(1),
          }}
        >
          <Text style={styles.titleContainer}>Create</Text>
          <Text style={styles.titleContainer2}>Account</Text>
        </View>
        <View
          style={{
            height: windowHeightWithHeader(50),
            alignItems: "center",
            alignContent: "center",
            width: wp("100"),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LegalWaiverScreen")}
            style={styles.nextBtn}
          >
            <View style={styles.iconAccHeart}>
              <MaterialCommunityIcons
                name="account-heart-outline"
                color="#782ddb"
                size={windowHeightWithHeader(6)}
                style={{
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              />
            </View>
            <Text
              style={[
                styles.textAccHeart,
                {
                  color: "#ffffff",
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: windowHeightWithHeader(2.6),
                  marginLeft: wp(5),
                  paddingBottom: windowHeightWithHeader(3),
                },
              ]}
            >
              Care
            </Text>
            <Text
              style={[
                styles.textAccHeart,
                {
                  color: "#ffffff",
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: windowHeightWithHeader(2.6),
                  marginLeft: wp(5),
                  marginTop: windowHeightWithHeader(4),
                  paddingTop: windowHeightWithHeader(3.5),
                },
              ]}
            >
              Customer
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: windowHeightWithHeader(50),
              alignItems: "center",
              alignContent: "center",
              width: wp("100"),
              paddingTop: windowHeightWithHeader(2.5),
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("LegalWaiverScreen")}
              style={styles.nextBtn2}
            >
              <View style={styles.iconDoctor}>
                <MaterialCommunityIcons
                  name="doctor"
                  color="#782ddb"
                  size={50}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </View>
              <Text
                style={[
                  styles.textDoctor,
                  {
                    color: "#782ddb",
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: windowHeightWithHeader(2.6),
                    marginLeft: wp(5),
                    paddingBottom: windowHeightWithHeader(3),
                  },
                ]}
              >
                Care
              </Text>
              <Text
                style={[
                  styles.textDoctor,
                  {
                    color: "#782ddb",
                    fontFamily: "Poppins_600SemiBold",
                    fontSize: windowHeightWithHeader(2.6),
                    marginLeft: wp(5),
                    marginTop: wp(4),
                    paddingTop: windowHeightWithHeader(3.5),
                  },
                ]}
              >
                Specialist
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  image: {
    height: height,
  },
  backBtn: {
    alignItems: "flex-start",
    width: 55,
    height: 53,
    marginLeft: wp("5"),
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#6B24AA",
    borderColor: "#6B24AA",
    marginTop: Platform.OS == "ios" ? 55 : 0,
  },
  nextBtn: {
    height: windowHeightWithHeader(12),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#b880f5",
    borderColor: "#b880f5",
    borderWidth: 1,
    width: wp("85"),
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  nextBtn2: {
    width: wp("85"),
    height: windowHeightWithHeader(12),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 5,
  },
  titleContainer: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: 54,
    marginTop: 14,
    position: "relative",
  },
  titleContainer2: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: 54,
  },
  iconAccHeart: {
    height: windowHeightWithHeader(8),
    width: windowHeightWithHeader(9),
    alignItems: "flex-start",
    paddingLeft: wp(2),
    paddingTop: windowHeightWithHeader(1),
    marginLeft: wp(3),
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  textAccHeart: {
    position: "absolute",
    paddingLeft: wp(20),
  },
  iconDoctor: {
    height: windowHeightWithHeader(8),
    width: windowHeightWithHeader(9),
    alignItems: "flex-start",
    paddingLeft: wp(2),
    paddingTop: windowHeightWithHeader(1),
    marginLeft: wp(3),
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  textDoctor: {
    position: "absolute",
    paddingLeft: wp(20),
  },
});
