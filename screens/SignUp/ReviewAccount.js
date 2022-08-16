import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { Text } from "galio-framework";
import { View } from "react-native";
import Icon from "../../components/Icon";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
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
import { windowHeightWithHeader } from "../../utils/utils";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ALERT_TYPE, Dialog, Root } from "react-native-alert-notification";
import { saveGlobal } from "../../utils/store";

const ChooseAccount = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const [data, setData] = React.useState({
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

  const [userInfo, setUserInfo] = React.useState({});
  const [accountInfo, setAccountInfo] = React.useState({});
  const [address, setAddress] = React.useState({});
  const [imageData, setImageDAta] = React.useState({});

  useEffect(() => {
    if (route) {
      if (
        route.params.user_info &&
        route.params.account_info &&
        route.params.address &&
        route.params.imageData
      ) {
        setUserInfo(route.params.user_info);
        setAccountInfo(route.params.account_info);
        setAddress(route.params.address);
        setImageDAta(route.params.imageData);
        const payload = {
          user_info: route.params.user_info,
          account_info: route.params.account_info,
          address: route.params.address,
        };
        setData(payload);
      }
    }
  }, [route]);

  let paddingVertical = 7;

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  function handleResponse(response) {
    return response.text().then((text) => {
      let data;
      try {
        data = text && JSON.parse(text);
      } catch (e) {
        return text;
      }

      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        console.log("response: " + text);
        console.log("API Error: " + error);
        // return Promise.reject(error);
      }

      // return data;
      if (data) {
        console.log(data);
        if (data.account_info) {
          const account_id = data.account_info.account_id;
          console.log(account_id);
          saveGlobal("account_id", account_id.toString());
          setTimeout(function () {
            setIsLoading(false);
            navigation.navigate("ChooseAccountScreen");
          }, 2000);
        }
      }
    });
  }

  async function onSubmit() {
    setIsLoading(true);

    let headers = new Headers();
    headers.append("Content-Type", "multipart/form-data");

    let formData = new FormData();
    formData.append("accountinfo", JSON.stringify(data));
    formData.append("", imageData);

    try {
      fetch(`https://asp-noc-dev-win.azurewebsites.net/api/accounts`, {
        method: "POST",
        body: formData,
        headers: headers,
        redirect: "follow",
      })
        .then(handleResponse)
        .catch(function (error) {
          setIsLoading(false);
          console.log("error: " + JSON.stringify(error));
          Dialog.show({
            type: ALERT_TYPE.DANGER,
            title: "Account Creation Failed",
            textBody: "error: " + JSON.stringify(error),
            button: "close",
          });
        });
    } catch (e) {
      setIsLoading(false);
      console.log(e);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Account Creation Failed",
        textBody: "error: " + e,
        button: "close",
      });
    }
  }

  return (
    <Root>
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
                navigation.navigate("CareProvider4Screen", {
                  account_info: accountInfo,
                  user_info: userInfo,
                  address: address,
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
              paddingBottom: windowHeightWithHeader(3),
            }}
          >
            <Text style={styles.titleContainer}>Review</Text>
            <Text style={styles.titleContainer2}>Information</Text>
            <View
              View
              style={{
                height: windowHeightWithHeader(32),
              }}
            >
              <Text
                style={[
                  styles.descText,
                  { marginBottom: windowHeightWithHeader(3) },
                ]}
                size={windowHeightWithHeader(1.6)}
              >
                Check your spelling and important details
              </Text>
              <Text style={styles.descText} size={windowHeightWithHeader(1.6)}>
                Name
              </Text>
              <Text style={styles.descText2} size={windowHeightWithHeader(2)}>
                {data.account_info.firstname} {data.account_info.lastname}
              </Text>
              <Text style={styles.descText} size={windowHeightWithHeader(1.6)}>
                SSN
              </Text>
              <Text style={styles.descText2} size={windowHeightWithHeader(2)}>
                {data.account_info.ssn}
              </Text>
              <Text style={styles.descText} size={windowHeightWithHeader(1.6)}>
                Birthdate
              </Text>
              <Text style={styles.descText2} size={windowHeightWithHeader(2)}>
                {data.account_info.birthdate}
              </Text>
              <Text style={styles.descText} size={windowHeightWithHeader(1.6)}>
                Phone
              </Text>
              <Text style={styles.descText2} size={windowHeightWithHeader(2)}>
                {data.account_info.phone}
              </Text>
              <Text style={styles.descText} size={windowHeightWithHeader(1.6)}>
                Email Address
              </Text>
              <Text style={styles.descText2} size={windowHeightWithHeader(2)}>
                {data.account_info.email_address}
              </Text>
              <Text style={styles.descText3} size={windowHeightWithHeader(1.8)}>
                Press back to edit your details
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
            <TouchableOpacity onPress={onSubmit} disabled={isLoading}>
              <View style={[styles.nextBtn, { opacity: !isLoading ? 1 : 0.4 }]}>
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
                {isLoading ? (
                  <ActivityIndicator size="large" color="#ffffff" />
                ) : null}
                <Text style={styles.iconSign}>
                  <MaterialCommunityIcons
                    name="send"
                    color="#d7feff"
                    size={30}
                  />
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </Root>
  );
};

export default ChooseAccount;

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
    marginTop: windowHeightWithHeader(1.5),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
  },
  descText2: {
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
  },
  descText3: {
    marginTop: windowHeightWithHeader(4),
    color: "#41c3e0",
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
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
  titleContainer2: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(6),
  },
});
