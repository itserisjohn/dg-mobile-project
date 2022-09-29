import React, { useEffect } from "react";
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
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import {
  getAccountCheckList,
  getProviderCheckList,
} from "../../services/account";
import checklist from "../../utils/account-checklist.json";
import { getGlobal } from "../../utils/store";

const CheckList = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [checklistData, setChecklistData] = React.useState([]);
  const [accountId, setAccountId] = React.useState(0);
  const [accountType, setAccountType] = React.useState(0);
  const [nextPage, setNextPage] = React.useState("");

  const getData = async () => {
    const id = await getGlobal("account_id");
    const type = await getGlobal("account_type");
    if (id) {
      setAccountId(Number(id));
    }
    if (type) {
      setAccountType(Number(type));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getAccountChecklistData = async () => {
    setIsLoading(true);
    const progressData = getAccountCheckList(1);
    const result = await progressData;
    if (result) {
      console.log(result);
      setChecklistData(result);
      setIsLoading(false);
    }
  };

  const getProviderChecklistData = async () => {
    setIsLoading(true);
    const progressData = getProviderCheckList();
    const result = await progressData;
    if (result) {
      console.log(result);
      setChecklistData(result);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (accountId && accountType) {
      if (accountType == "1") {
        getAccountChecklistData();
      } else {
        getProviderChecklistData;
      }
    }
  }, [accountId, accountType]);

  useEffect(() => {
    if (checklistData) {
      checklist.map((item) => {
        if (checklistData[item.id] === true) setNextPage(item.nextScreen);
      });
    }
  }, [checklistData]);

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // const getAccountInfo = async () => {
  //   setIsLoading(true);
  //   const progressData = getAccountCheckList();
  //   const result = await progressData;
  //   if (result) {
  //     console.log(result);
  //     setChecklistData(result);
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getAccountInfo();
  // }, []);

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
        ></View>
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
              height: windowHeightWithHeader(32),
              paddingLeft: wp(8),
              width: wp(100),
            }}
          >
            <Text style={styles.descText} size={windowHeightWithHeader(1.8)}>
              Get fully verified to secure your account and gain access to all
              services.
            </Text>
            {checklist.map((item) => (
              <View style={styles.checkboxContainer} key={item.id}>
                <View style={styles.square1}>
                  {checklistData[item.id] === true ? (
                    <Image
                      resizeMode={"contain"}
                      style={{ height: hp("4%"), width: hp("4%") }}
                      source={SuccessImage}
                      imageSize={"3%"}
                    ></Image>
                  ) : null}
                </View>
                <View style={styles.square2}>
                  <Text
                    size={hp("2.5%")}
                    color="#4B4C4C"
                    style={{
                      paddingLeft: 10,
                      fontFamily: "Poppins_500Medium",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </View>
            ))}
            {/* <View style={styles.checkheartContainer}>
              <Image
                resizeMode={"contain"}
                style={{ flex: 1, height: undefined, width: undefined }}
                source={SuccessImage}
                imageSize={"3%"}
              ></Image>
              <Text
                size={hp("2.5%")}
                color="#4B4C4C"
                style={{
                  paddingLeft: 10,
                  marginRight: 100,
                  fontFamily: "Poppins_500Medium",
                }}
              >
                Account Information
              </Text>
            </View>
            <View style={styles.checkheartContainer}>
              <Text
                size={hp("2.5%")}
                color="#4B4C4C"
                style={{
                  marginLeft: wp(11.2),
                  fontFamily: "Poppins_500Medium",
                }}
              >
                Payment Information
              </Text>
            </View>
            <View style={styles.checkheartContainer}>
              <Text
                size={hp("2.5%")}
                color="#4B4C4C"
                style={{
                  marginLeft: wp(11.2),
                  fontFamily: "Poppins_500Medium",
                }}
              >
                Other Information
              </Text>
            </View>
            <View style={styles.checkheartContainer}>
              <Text
                size={hp("2.5%")}
                color="#4B4C4C"
                style={{
                  marginLeft: wp(11.2),
                  fontFamily: "Poppins_500Medium",
                }}
              >
                Service Preference
              </Text>
            </View> */}
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
          {nextPage !== "" ? (
            <TouchableOpacity
              onPress={() => navigation.navigate(nextPage)}
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
                Continue
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
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

export default CheckList;
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
    marginBottom: windowHeightWithHeader(3),
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: wp("100%"),
    marginTop: 15,
  },
  square1: {
    flex: 1,
    paddingLeft: wp("3%"),
  },
  square2: {
    flex: 8,
  },
});
