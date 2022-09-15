import React, { useEffect, useState } from "react";
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
  TouchableWithoutFeedback,
  Keyboard,
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
import BGImage from "../../assets/images/bg_Create-Account.png";
import materialTheme from "../../constants/Theme";
import MaskInput from "react-native-mask-input";
import { windowHeightWithHeader } from "../../utils/utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CareProvider2 = ({ route, navigation }) => {
  const [userInfo, setUserInfo] = React.useState({});
  const [data, setData] = React.useState({
    account_id: 0,
    firstname: "",
    lastname: "",
    phone: "",
    email_address: "",
    birthdate: "",
    profile_photourl: "",
    ssn: "",
    account_typeid: 1,
  });
  const [phone, setPhone] = React.useState("");
  const [accountType, setAccounType] = useState(0);

  useEffect(() => {
    if (route) {
      if (route.params?.user_info) setUserInfo(route.params.user_info);
      if (route.params?.account_type) setAccounType(route.params.account_type);
    }
  }, [route]);

  const ssn = [/\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];

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
      item.account_typeid = Number(accountType);
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            <View
              style={{
                height: windowHeightWithHeader(10),
              }}
            >
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.navigate("CareProvider1Screen")}
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
                paddingLeft: wp(8),
                paddingRight: wp(8),
                paddingTop: windowHeightWithHeader(1),
                paddingBottom: windowHeightWithHeader(3),
              }}
            >
              <Text style={styles.titleContainer}>Account</Text>
              <Text style={styles.titleContainer2}>Information</Text>
              <View
                animation="slideInRight"
                duration={400}
                style={styles.progressContainer}
              >
                <KeyboardAwareScrollView
                  keyboardShouldPersistTaps={"always"}
                  style={{ flex: 1 }}
                  showsVerticalScrollIndicator={false}
                  enableOnAndroid={true}
                  extraScrollHeight={Platform.OS === "ios" ? 0 : 100}
                >
                  <View>
                    <Text
                      size={windowHeightWithHeader(1.4)}
                      color={materialTheme.COLORS.BLACK}
                      style={{ fontFamily: "Poppins_400Regular" }}
                    >
                      First Name{" "}
                      <Text
                        size={windowHeightWithHeader(1.6)}
                        style={{ color: "red", justifyContent: "center" }}
                      >
                        *
                      </Text>
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Your First Name"
                      placeholderTextColor="#c2c1c1"
                      value={data.username}
                      onChangeText={(e) => handleChange("firstname", e)}
                    ></TextInput>
                    <Text
                      size={windowHeightWithHeader(1.4)}
                      color={materialTheme.COLORS.BLACK}
                      style={{ fontFamily: "Poppins_400Regular" }}
                    >
                      Last Name{" "}
                      <Text
                        size={windowHeightWithHeader(1.6)}
                        style={{ color: "red", justifyContent: "center" }}
                      >
                        *
                      </Text>
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Your Last Name"
                      placeholderTextColor="#c2c1c1"
                      value={data.lastname}
                      onChangeText={(e) => handleChange("lastname", e)}
                    ></TextInput>
                    <Text
                      size={windowHeightWithHeader(1.4)}
                      color={materialTheme.COLORS.BLACK}
                      style={{ fontFamily: "Poppins_400Regular" }}
                    >
                      SSN{" "}
                      <Text
                        size={windowHeightWithHeader(1.6)}
                        style={{ color: "red", justifyContent: "center" }}
                      >
                        *
                      </Text>
                    </Text>
                    <MaskInput
                      value={phone}
                      style={styles.input}
                      onChangeText={(masked, unmasked) => {
                        setPhone(masked);
                        handleChange("ssn", unmasked);
                      }}
                      placeholder="xxx-xx-xxxx"
                      placeholderTextColor="#c2c1c1"
                      mask={ssn}
                      keyboardType="number-pad"
                    />
                    <Text
                      size={windowHeightWithHeader(1.4)}
                      color={materialTheme.COLORS.BLACK}
                      style={{ fontFamily: "Poppins_400Regular" }}
                    >
                      Date of Birth{" "}
                      <Text
                        size={windowHeightWithHeader(1.6)}
                        style={{ color: "red", justifyContent: "center" }}
                      >
                        *
                      </Text>
                    </Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Date of Birth"
                      placeholderTextColor="#c2c1c1"
                      value={data.birthdate}
                      onChangeText={(e) => handleChange("birthdate", e)}
                    ></TextInput>
                    <Text
                      size={windowHeightWithHeader(1.4)}
                      color={materialTheme.COLORS.BLACK}
                      style={{ fontFamily: "Poppins_400Regular" }}
                    >
                      Phone Number{" "}
                      <Text
                        size={windowHeightWithHeader(1.6)}
                        style={{ color: "red", justifyContent: "center" }}
                      >
                        *
                      </Text>
                    </Text>
                    <TextInput
                      keyboardType="phone-pad"
                      style={styles.input}
                      placeholder="(xxx) xxx-xxxx"
                      placeholderTextColor="#c2c1c1"
                      value={data.phone}
                      onChangeText={(e) => handleChange("phone", e)}
                    ></TextInput>
                    <Text
                      size={windowHeightWithHeader(1.4)}
                      color={materialTheme.COLORS.BLACK}
                      style={{ fontFamily: "Poppins_400Regular" }}
                    >
                      Email Address{" "}
                      <Text
                        size={windowHeightWithHeader(1.6)}
                        style={{ color: "red", justifyContent: "center" }}
                      >
                        *
                      </Text>
                    </Text>
                    <TextInput
                      keyboardType="email-address"
                      style={styles.input}
                      placeholder="example@email.com"
                      placeholderTextColor="#c2c1c1"
                      value={data.email_address}
                      onChangeText={(e) => handleChange("email_address", e)}
                      autoCapitalize="none"
                    ></TextInput>
                  </View>
                </KeyboardAwareScrollView>
              </View>
            </View>
            <View
              style={{
                height: windowHeightWithHeader(10),
                alignItems: "center",
                alignContent: "center",
                width: wp(100),
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("CareProvider3Screen", {
                    account_info: data,
                    user_info: userInfo,
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
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

export default CareProvider2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
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
    padding: 11,
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
    backgroundColor: "#41c3e0",
    borderColor: "#41c3e0",
    borderWidth: 1,
    width: wp(85),
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
});
