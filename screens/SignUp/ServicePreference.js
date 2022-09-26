import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  toggleSwitch,
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
import Image1 from "../../assets/images/services/image1.png";
import Image1C from "../../assets/images/services/image1c.png";
import Image2 from "../../assets/images/services/image2.png";
import Image2C from "../../assets/images/services/image2c.png";
import Image3 from "../../assets/images/services/image3.png";
import Image3C from "../../assets/images/services/image3c.png";
import Image4 from "../../assets/images/services/image4.png";
import Image4C from "../../assets/images/services/image4c.png";
import Image5 from "../../assets/images/services/image5.png";
import Image5C from "../../assets/images/services/image5c.png";
import Image6 from "../../assets/images/services/image6.png";
import Image6C from "../../assets/images/services/image6c.png";
import Image7 from "../../assets/images/services/image7.png";
import Image7C from "../../assets/images/services/image7c.png";
import Image8 from "../../assets/images/services/image8.png";
import Image8C from "../../assets/images/services/image8c.png";
import Image9 from "../../assets/images/services/image9.png";
import Image9C from "../../assets/images/services/image9c.png";
import Image10 from "../../assets/images/services/image10.png";
import Image10C from "../../assets/images/services/image10c.png";
import Image11 from "../../assets/images/services/image11.png";
import Image11C from "../../assets/images/services/image11c.png";
import Image12 from "../../assets/images/services/image12.png";
import Image12C from "../../assets/images/services/image12c.png";
import Image13 from "../../assets/images/services/image13.png";
import Image13C from "../../assets/images/services/image13c.png";
import Image14 from "../../assets/images/services/image14.png";
import Image14C from "../../assets/images/services/image14c.png";
import { getServicePreference } from "../../services/servicepreference";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CareProvider2 = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [accountType, setAccounType] = useState(0);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);
  const [isEnabled6, setIsEnabled6] = useState(false);
  const [isEnabled7, setIsEnabled7] = useState(false);
  const [isEnabled8, setIsEnabled8] = useState(false);
  const [isEnabled9, setIsEnabled9] = useState(false);
  const [isEnabled10, setIsEnabled10] = useState(false);
  const [isEnabled11, setIsEnabled11] = useState(false);
  const [isEnabled12, setIsEnabled12] = useState(false);
  const [isEnabled13, setIsEnabled13] = useState(false);
  const [isEnabled14, setIsEnabled14] = useState(false);
  const toggleSwitch = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);
  const toggleSwitch5 = () => setIsEnabled5((previousState) => !previousState);
  const toggleSwitch6 = () => setIsEnabled6((previousState) => !previousState);
  const toggleSwitch7 = () => setIsEnabled7((previousState) => !previousState);
  const toggleSwitch8 = () => setIsEnabled8((previousState) => !previousState);
  const toggleSwitch9 = () => setIsEnabled9((previousState) => !previousState);
  const toggleSwitch10 = () =>
    setIsEnabled10((previousState) => !previousState);
  const toggleSwitch11 = () =>
    setIsEnabled11((previousState) => !previousState);
  const toggleSwitch12 = () =>
    setIsEnabled12((previousState) => !previousState);
  const toggleSwitch13 = () =>
    setIsEnabled13((previousState) => !previousState);
  const toggleSwitch14 = () =>
    setIsEnabled14((previousState) => !previousState);
  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem("account_id", jsonValue);
  //   } catch (e) {
  //     // saving error
  //   }
  // };

  // useEffect(() => {
  //   storeData(1);
  // }, []);

  const getServicePreferenceData = async () => {
    setIsLoading(true);
    const progressData = getServicePreference();
    const result = await progressData;
    if (result) {
      // console.log(result);
      setData(result);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (route) {
      getServicePreferenceData();
      // setAccounType(1);
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={BGImage}
        resizeMode="stretch"
        style={styles.imageBackground}
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
                onPress={() => navigation.navigate("CheckList3Screen")}
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
                height: windowHeightWithHeader(80),
                paddingLeft: wp(8),
                paddingRight: wp(8),
                paddingTop: windowHeightWithHeader(0),
                paddingBottom: windowHeightWithHeader(3),
              }}
            >
              <Text style={styles.titleContainer}>Service</Text>
              <Text style={styles.titleContainer2}>Preference</Text>

              <View
                style={{
                  height: windowHeightWithHeader(28),
                  marginTop: windowHeightWithHeader(1),
                }}
              >
                <View style={[styles.servicesContainer]}>
                  <View style={styles.serviceLeft}>
                    <TouchableOpacity
                      onPress={toggleSwitch}
                      style={{
                        backgroundColor: isEnabled1 ? "#6B24AA" : "#e4caff",
                        borderRadius: 12,
                        width: "100%",
                        height: windowHeightWithHeader(8.5),
                        paddingTop: windowHeightWithHeader(1.3),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="human"
                        color="#ffffff"
                        size={windowHeightWithHeader(5.5)}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.description,
                        {
                          marginTop: windowHeightWithHeader(1),
                          marginBottom: windowHeightWithHeader(1.7),
                        },
                      ]}
                    >
                      {data[0].service_preferencename}
                    </Text>
                    <Text style={styles.description}></Text>
                  </View>
                  <View style={styles.service}>
                    <TouchableOpacity onPress={toggleSwitch2}
                      style={{
                        backgroundColor: isEnabled2 ? "#6B24AA" : "#e4caff",
                        borderRadius: 12,
                        width: "100%",
                        height: windowHeightWithHeader(8.5),
                        paddingTop: windowHeightWithHeader(1.3),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="human-wheelchair"
                        color="#ffffff"
                        size={windowHeightWithHeader(5.5)}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.description,
                        { marginTop: windowHeightWithHeader(1) },
                      ]}
                    >
                      {data[1].service_preferencename}
                    </Text>
                    <Text style={styles.description}></Text>
                  </View>
                  <View style={styles.service}>
                    <TouchableOpacity onPress={toggleSwitch3}
                      style={{
                        backgroundColor: isEnabled3 ? "#6B24AA" : "#e4caff",
                        borderRadius: 12,
                        width: "100%",
                        height: windowHeightWithHeader(8.5),
                        paddingTop: windowHeightWithHeader(1.3),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="bed"
                        color="#ffffff"
                        size={windowHeightWithHeader(5.5)}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.description,
                        { marginTop: windowHeightWithHeader(1) },
                      ]}
                    >
                      {data[2].service_preferencename}
                    </Text>
                    <Text style={styles.description}></Text>
                  </View>
                  <View style={styles.serviceRight}>
                    <TouchableOpacity onPress={toggleSwitch4}
                      style={{
                        backgroundColor: isEnabled4 ? "#6B24AA" : "#e4caff",
                        borderRadius: 12,
                        width: "100%",
                        height: windowHeightWithHeader(8.5),
                        paddingTop: windowHeightWithHeader(1.3),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="hand-heart"
                        color="#ffffff"
                        size={windowHeightWithHeader(5.5)}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.description,
                        { marginTop: windowHeightWithHeader(1) },
                      ]}
                    >
                      {data[3].service_preferencename}
                    </Text>
                    <Text style={styles.description}></Text>
                  </View>
                </View>
                <View style={styles.servicesContainer}>
                  <View style={styles.serviceLeft}>
                    <TouchableOpacity onPress={toggleSwitch5}
                      style={{
                        backgroundColor: isEnabled5 ? "#6B24AA" : "#e4caff",
                        borderRadius: 12,
                        width: "100%",
                        height: windowHeightWithHeader(8.5),
                        paddingTop: windowHeightWithHeader(1.3),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="human"
                        color="#ffffff"
                        size={windowHeightWithHeader(5.5)}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.description,
                        {
                          marginTop: windowHeightWithHeader(1),
                          marginBottom: windowHeightWithHeader(2),
                        },
                      ]}
                    >
                      {data[4].service_preferencename}
                    </Text>
                    <Text style={styles.description}></Text>
                  </View>
                  <View style={styles.service}>
                    <TouchableOpacity onPress={toggleSwitch6}
                      style={{
                        backgroundColor: isEnabled6 ? "#6B24AA" : "#e4caff",
                        borderRadius: 12,
                        width: "100%",
                        height: windowHeightWithHeader(8.5),
                        paddingTop: windowHeightWithHeader(1.3),
                        marginTop: windowHeightWithHeader(1.6),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="human-wheelchair"
                        color="#ffffff"
                        size={windowHeightWithHeader(5.5)}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.description,
                        { marginTop: windowHeightWithHeader(1) },
                      ]}
                    >
                      {data[5].service_preferencename}
                    </Text>
                    <Text style={styles.description}></Text>
                  </View>
                  <View style={styles.service}>
                    <TouchableOpacity onPress={toggleSwitch7}
                      style={{
                        backgroundColor: isEnabled7 ? "#6B24AA" : "#e4caff",
                        borderRadius: 12,
                        width: "100%",
                        height: windowHeightWithHeader(8.5),
                        paddingTop: windowHeightWithHeader(1.3),
                        marginTop: windowHeightWithHeader(1.6),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="bed"
                        color="#ffffff"
                        size={windowHeightWithHeader(5.5)}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.description,
                        { marginTop: windowHeightWithHeader(1) },
                      ]}
                    >
                      {data[6].service_preferencename}
                    </Text>
                    <Text style={styles.description}></Text>
                  </View>
                  <View style={styles.serviceRight}>
                    <TouchableOpacity onPress={toggleSwitch8}
                      style={{
                        backgroundColor: isEnabled8 ? "#6B24AA" : "#e4caff",
                        borderRadius: 12,
                        width: "100%",
                        height: windowHeightWithHeader(8.5),
                        paddingTop: windowHeightWithHeader(1.3),
                        // marginTop: windowHeightWithHeader(1),
                      }}
                    >
                      <MaterialCommunityIcons
                        name="hand-heart"
                        color="#ffffff"
                        size={windowHeightWithHeader(5.5)}
                        style={{
                          textAlign: "center",
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        styles.description,
                        { marginTop: windowHeightWithHeader(1) },
                      ]}
                    >
                      {data[7].service_preferencename}
                    </Text>
                    <Text style={styles.description}></Text>
                  </View>
                </View>
              </View>
              <View style={styles.servicesContainer}>
                <View style={styles.serviceLeft}>
                  <TouchableOpacity onPress={toggleSwitch9}
                    style={{
                      backgroundColor: isEnabled9 ? "#6B24AA" : "#e4caff",
                      borderRadius: 12,
                      width: "100%",
                      height: windowHeightWithHeader(8.5),
                      paddingTop: windowHeightWithHeader(1.3),
                      marginTop: windowHeightWithHeader(1.5),
                    }}
                  >
                    <MaterialCommunityIcons
                      name="human"
                      color="#ffffff"
                      size={windowHeightWithHeader(5.5)}
                      style={{
                        textAlign: "center",
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.description,
                      { marginTop: windowHeightWithHeader(1) },
                    ]}
                  >
                    {data[8].service_preferencename}
                  </Text>
                  <Text style={styles.description}></Text>
                </View>
                <View style={styles.service}>
                  <TouchableOpacity onPress={toggleSwitch10}
                    style={{
                      backgroundColor: isEnabled10 ? "#6B24AA" : "#e4caff",
                      borderRadius: 12,
                      width: "100%",
                      height: windowHeightWithHeader(8.5),
                      paddingTop: windowHeightWithHeader(1.3),
                      marginTop: windowHeightWithHeader(1.5),
                    }}
                  >
                    <MaterialCommunityIcons
                      name="human-wheelchair"
                      color="#ffffff"
                      size={windowHeightWithHeader(5.5)}
                      style={{
                        textAlign: "center",
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.description,
                      { marginTop: windowHeightWithHeader(1) },
                    ]}
                  >
                    {data[9].service_preferencename}
                  </Text>
                  <Text style={styles.description}></Text>
                </View>
                <View style={styles.service}>
                  <TouchableOpacity onPress={toggleSwitch11}
                    style={{
                      backgroundColor: isEnabled11 ? "#6B24AA" : "#e4caff",
                      borderRadius: 12,
                      width: "100%",
                      height: windowHeightWithHeader(8.5),
                      paddingTop: windowHeightWithHeader(1.3),
                      marginTop: windowHeightWithHeader(3),
                    }}
                  >
                    <MaterialCommunityIcons
                      name="bed"
                      color="#ffffff"
                      size={windowHeightWithHeader(5.5)}
                      style={{
                        textAlign: "center",
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.description,
                      { marginTop: windowHeightWithHeader(1) },
                    ]}
                  >
                    {data[10].service_preferencename}
                  </Text>
                  <Text style={styles.description}></Text>
                </View>
                <View style={styles.serviceRight}>
                  <TouchableOpacity onPress={toggleSwitch12}
                    style={{
                      backgroundColor: isEnabled12 ? "#6B24AA" : "#e4caff",
                      borderRadius: 12,
                      width: "100%",
                      height: windowHeightWithHeader(8.5),
                      paddingTop: windowHeightWithHeader(1.3),
                      marginTop: windowHeightWithHeader(3.2),
                    }}
                  >
                    <MaterialCommunityIcons
                      name="hand-heart"
                      color="#ffffff"
                      size={windowHeightWithHeader(5.5)}
                      style={{
                        textAlign: "center",
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.description,
                      { marginTop: windowHeightWithHeader(1) },
                    ]}
                  >
                    {data[11].service_preferencename}
                  </Text>
                  <Text style={styles.description}></Text>
                </View>
              </View>
              <View style={styles.servicesContainer2}>
                <View style={styles.serviceLeft2}>
                  <TouchableOpacity onPress={toggleSwitch13}
                    style={{
                      backgroundColor: isEnabled13 ? "#6B24AA" : "#e4caff",
                      borderRadius: 12,
                      width: "100%",
                      height: windowHeightWithHeader(8),
                      paddingTop: windowHeightWithHeader(1),
                      marginTop: windowHeightWithHeader(3),
                      marginRight: windowHeightWithHeader(3),
                    }}
                  >
                    <MaterialCommunityIcons
                      name="human"
                      color="#ffffff"
                      size={windowHeightWithHeader(5.5)}
                      style={{
                        textAlign: "center",
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.description,
                      { marginTop: windowHeightWithHeader(1) },
                    ]}
                  >
                    {data[12].service_preferencename}
                  </Text>
                  <Text style={styles.description}></Text>
                </View>
                <View style={styles.serviceLeft3}>
                  <TouchableOpacity onPress={toggleSwitch14}
                    style={{
                      backgroundColor: isEnabled14 ? "#6B24AA" : "#e4caff",
                      borderRadius: 12,
                      width: "70%",
                      height: windowHeightWithHeader(8),
                      paddingTop: windowHeightWithHeader(1.3),
                      marginTop: windowHeightWithHeader(3),
                    }}
                  >
                    <MaterialCommunityIcons
                      name="human-wheelchair"
                      color="#ffffff"
                      size={windowHeightWithHeader(5.5)}
                      style={{
                        textAlign: "center",
                      }}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.description,
                      { marginTop: windowHeightWithHeader(1) },
                    ]}
                  >
                    {data[13].service_preferencename}
                  </Text>
                  <Text style={styles.description}></Text>
                </View>
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
                onPress={() => navigation.navigate("Checklist4Screen")}
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
                  Submit
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
  imageBackground: {
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
  checkboxContainer1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp("0.2%"),
  },
  square1: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: windowHeightWithHeader(5),
    width: wp(9.5),
  },
  description: {
    fontSize: 12,
    color: "#4B4C4C",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
    paddingVertical: 10,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  servicesContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp("2%"),
  },
  servicesContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp("2%"),
    marginTop: hp("2%"),
  },

  serviceLeft: {
    flex: 1,
    alignItems: "center",
    marginRight: wp(2),
  },
  serviceRight: {
    flex: 1,
    alignItems: "center",
    marginLeft: wp(2),
  },
  service: {
    flex: 1,
    alignItems: "center",
    marginLeft: wp(2),
    marginRight: wp(2),
  },
  description: {
    fontSize: windowHeightWithHeader(1.2),
    color: "#4c4c4c",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  serviceLeft2: {
    alignItems: "flex-start",
    marginRight: wp(4),
  },
  serviceLeft3: {
    alignItems: "flex-start",
    marginRight: wp(3),
  },
});

