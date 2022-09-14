import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Text } from "galio-framework";
import Icon from "../../components/Icon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
const { width, height } = Dimensions.get("window");
import { windowHeightWithHeader } from "../../utils/utils";
import BGImage from "../../assets/images/bg_Create-Account.png";
import materialTheme from "../../constants/Theme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MapView from "react-native-maps";
import { values } from "regenerator-runtime";

const CareProvider3 = ({ route, navigation }) => {
  const [userInfo, setUserInfo] = React.useState({});
  const [accountInfo, setAccountInfo] = React.useState({});
  const [currentAddress, setCurrentAddress] = React.useState({});
  const [data, setData] = React.useState({
    address_id: 0,
    account_id: 0,
    address_line1: "",
    address_line2: "",
    city: "",
    state_address: "",
    zip: "",
  });

  useEffect(() => {
    if (currentAddress) {
      const addressData = {
        address_id: 0,
        account_id: 0,
        address_line1: `${currentAddress[0].name} ${currentAddress[0].street} ${currentAddress[0].district} ${currentAddress[0].city}`,
        address_line2: "",
        city: currentAddress[0].city,
        state_address: currentAddress[0].subregion,
        zip: "",
      };
      setData(addressData)
    }
  }, [currentAddress]);

  useEffect(() => {
    if (route) {
      setUserInfo(route.params.user_info);
      setAccountInfo(route.params.account_info);
      if (route.params.address) {
        setData(route.params.address);
      }
      if (route.params.currentAddress) {
        setCurrentAddress(route.params.currentAddress);
        console.log(route.params.currentAddress);
      }
    }
  }, [route]);


  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  function handleChange(dataType, value) {
    let newState = [];
    newState.push(data);
    let account = newState.map((item, i) => {
      if (i == 0) {
        return { ...item, [dataType]: value };
      }
      return item;
    });
    setData(account[0]);
  }

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
            onPress={() =>
              navigation.navigate("CareProvider2Screen", {
                account_info: accountInfo,
                user_info: userInfo,
              })
            }
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
            paddingLeft: wp("8%"),
            paddingRight: wp("8%"),
            paddingTop: windowHeightWithHeader(1),
            paddingBottom: windowHeightWithHeader(3),
          }}
        >
          <Text style={styles.titleContainer}>Location</Text>
          <Text style={styles.titleContainer2}>Information</Text>
          <View style={styles.progressContainer}>
            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MapViewsScreen", {
                    account_info: accountInfo,
                    user_info: userInfo,
                    address: data,
                  })
                }
              >
                <Text style={styles.Location}>Use my current location</Text>
                <Icon
                  size={30}
                  name="location-on"
                  family="materialicons"
                  color={"#6B24AA"}
                  style={styles.LocationIcon}
                />
              </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView
              keyboardShouldPersistTaps={"always"}
              style={{ flex: 1 }}
              showsVerticalScrollIndicator={false}
              enableOnAndroid={true}
              extraScrollHeight={Platform.OS === "ios" ? 0 : 100}
            >
              <Text
                size={hp("1.8%")}
                color={materialTheme.COLORS.BLACK}
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Address{" "}
                <Text
                  size={windowHeightWithHeader(2)}
                  style={{ color: "red", justifyContent: "center" }}
                >
                  *
                </Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#c2c1c1"
                placeholder="Floor / Suite / Door #"
                value={data.address_line1}
                onChangeText={(e) => handleChange("address_line1", e)}
              ></TextInput>
              <Text
                size={hp("1.8%")}
                color={materialTheme.COLORS.BLACK}
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                Apt/Unit/Lot #{" "}
                <Text
                  size={windowHeightWithHeader(2)}
                  style={{ color: "red", justifyContent: "center" }}
                >
                  *
                </Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#c2c1c1"
                placeholder="Blg / Apartment"
                value={data.address_line2}
                onChangeText={(e) => handleChange("address_line2", e)}
              ></TextInput>
              <Text
                size={hp("1.8%")}
                color={materialTheme.COLORS.BLACK}
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                City{" "}
                <Text
                  size={windowHeightWithHeader(2)}
                  style={{ color: "red", justifyContent: "center" }}
                >
                  *
                </Text>
              </Text>
              <TextInput
                name="city"
                style={styles.input}
                placeholderTextColor="#c2c1c1"
                placeholder="City"
                value={data.city}
                onChangeText={(e) => handleChange("city", e)}
              ></TextInput>
              <Text
                size={hp("1.8%")}
                color={materialTheme.COLORS.BLACK}
                style={{ fontFamily: "Poppins_400Regular" }}
              >
                State{" "}
                <Text
                  size={windowHeightWithHeader(2)}
                  style={{ color: "red", justifyContent: "center" }}
                >
                  *
                </Text>
              </Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#c2c1c1"
                placeholder="State"
                value={data.state_address}
                onChangeText={(e) => handleChange("state_address", e)}
              ></TextInput>
            </KeyboardAwareScrollView>
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
            onPress={() =>
              navigation.navigate("CareProvider4Screen", {
                account_info: accountInfo,
                user_info: userInfo,
                address: data,
              })
            }
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
              Next
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

export default CareProvider3;

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
  progressContainer: {
    marginBottom: 20,
    paddingTop: windowHeightWithHeader(1),
    paddingBottom: windowHeightWithHeader(15),
    height:
      Platform.OS === "ios"
        ? windowHeightWithHeader(65)
        : windowHeightWithHeader(65),
  },
  input: {
    fontSize: windowHeightWithHeader(1.4),
    marginTop: windowHeightWithHeader(1),
    marginBottom: windowHeightWithHeader(1),
    backgroundColor: "#ffffff",
    borderRadius: 4,
    padding: 12,
    fontFamily: "Poppins_400Regular",
    borderColor: materialTheme.COLORS.BLACK,
    borderWidth: Platform.OS === "ios" ? 0.5 : 1.5,
  },
  textContainer: {
    marginBottom: windowHeightWithHeader(2),
    fontFamily: "Poppins_400Regular",
  },
  backBtn: {
    alignItems: "flex-start",
    width: 55,
    height: 53,
    marginLeft: wp("5%"),
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
    backgroundColor: "#41c3e0",
    borderColor: "#41c3e0",
    borderWidth: 1,
    width: wp("85%"),
  },
  iconSign: {
    alignItems: "flex-end",
    position: "absolute",
    paddingLeft: wp("72%"),
  },
  textSign: {
    position: "absolute",
    paddingLeft: windowHeightWithHeader(4),
  },
  Location: {
    position: "absolute",
    color: "#6B24AA",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
    paddingRight: windowHeightWithHeader(10),
    paddingLeft: windowHeightWithHeader(4.5),
    paddingTop: windowHeightWithHeader(1.8),
  },
  LocationIcon: {
    // paddingBottom: 10,
    // paddingRight: 15,
    marginBottom: 15,
    marginTop: 10,
    padding: 0,
  },
});
