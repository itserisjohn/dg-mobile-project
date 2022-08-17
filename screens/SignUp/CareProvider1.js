import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  View,
  ImageBackground,
  TextInput,
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
import Animatable from "react-native-animatable";

const CareProvider1 = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  const [dataTemp, setDataTemp] = useState({
    account_info: {
      account_id: 0,
      firstname: "",
      lastname: "",
      phone: "",
      email_address: "",
      birthdate: "",
      profile_photourl: "",
      ssn: "",
      account_typeid: 1,
    },
    user_info: {
      user_id: 0,
      account_id: 0,
      username: "",
      password: "",
    },
    address: {
      address_id: 0,
      account_id: 0,
      address_line1: "",
      address_line2: "",
      city: "",
      state_address: "",
      zip: "",
    },
  });

  const [data, setData] = useState({
    user_id: 0,
    account_id: 0,
    username: "",
    password: "",
  });
  const [password2, setPassword2] = useState("");
  const [isValid, setIsValid] = useState(false);

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

  function onNext() {
    let valid = false;
    if (data.username && data.password) {
      if (data.password === password2) {
        valid = true;
      }
    }

    if (valid) {
      navigation.navigate("CareProvider2Screen", { user_info: data });
    }
  }

  useEffect(() => {
    if (data.username && data.password) {
      if (data.password === password2) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } else {
      setIsValid(false);
    }
  }, [data, password2]);

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
            onPress={() => navigation.navigate("CreateAccountScreen")}
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
          <Text style={styles.titleContainer}>Login</Text>
          <Text style={styles.titleContainer2}>Information</Text>
          <View style={styles.progressContainer}>
            <Text
              size={windowHeightWithHeader(1.8)}
              color={materialTheme.COLORS.BLACK}
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              Username{" "}
              <Text
                size={windowHeightWithHeader(2)}
                style={{ color: "red", justifyContent: "center" }}
              >
                *
              </Text>
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="#c2c1c1"
              value={data.username}
              onChangeText={(e) => handleChange("username", e)}
            ></TextInput>
            <Text
              size={windowHeightWithHeader(1.8)}
              color={materialTheme.COLORS.BLACK}
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              Password{" "}
              <Text
                size={windowHeightWithHeader(2)}
                style={{ color: "red", justifyContent: "center" }}
              >
                *
              </Text>
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#c2c1c1"
              autoCapitalize="none"
              secureTextEntry={true}
              value={data.password}
              onChangeText={(e) => handleChange("password", e)}
            ></TextInput>

            <Text
              size={windowHeightWithHeader(1.8)}
              color={materialTheme.COLORS.BLACK}
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              Confirm Password{""}
              <Text
                size={windowHeightWithHeader(2)}
                style={{ color: "red", justifyContent: "center" }}
              >
                *
              </Text>
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#c2c1c1"
              autoCapitalize="none"
              secureTextEntry={true}
              value={password2}
              onChangeText={(e) => setPassword2(e)}
            ></TextInput>
            {!password2 ? null : (
              <View>
                <Text style={styles.errorMsg}>Password does not match</Text>
                <Icon
                  size={13}
                  name="exclamationcircle"
                  family="AntDesign"
                  color={"#ffffff"}
                  style={styles.exCircle}
                />
              </View>
            )}
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
          <TouchableOpacity onPress={onNext} disabled={!isValid}>
            <View style={[styles.nextBtn, { opacity: isValid ? 1 : 0.4 }]}>
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
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CareProvider1;

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
    paddingTop: windowHeightWithHeader(2.5),
    height:
      Platform.OS === "ios"
        ? windowHeightWithHeader(65)
        : windowHeightWithHeader(65),
  },
  input: {
    fontSize: 14,
    marginTop: windowHeightWithHeader(1.1),
    marginBottom: windowHeightWithHeader(1),
    backgroundColor: "#ffffff",
    borderRadius: 4,
    padding: 14,
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
    opacity: 0.1,
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
  errorMsg: {
    position: "absolute",
    color: "#ffffff",
    fontSize: 14,
    paddingRight: windowHeightWithHeader(12.7),
    paddingLeft: windowHeightWithHeader(5),
    fontFamily: "Poppins_400Regular",
    backgroundColor: "#FE2472",
    borderRadius: 4,
    padding: 8,
    justifyContent: "flex-end",
  },
  exCircle: {
    paddingTop: 12,
    paddingLeft: 20,
  },
});
