import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  View,
  ImageBackground,
  Image,
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
import { windowHeightWithHeader, dataURItoBlob } from "../../utils/utils";
import BGImage from "../../assets/images/bg_Create-Account.png";
import materialTheme from "../../constants/Theme";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { saveAccountLogo } from "../../services/account";
const axios = require("axios").default;
import mime from "mime";

const CareProvider4 = ({ route, navigation }) => {
  const [data, setData] = React.useState({});
  const [image, setImage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({});
  const [accountInfo, setAccountInfo] = React.useState({});
  const [address, setAddress] = React.useState({});

  useEffect(() => {
    if (route) {
      if (
        route.params.user_info &&
        route.params.account_info &&
        route.params.address
      ) {
        setUserInfo(route.params.user_info);
        setAccountInfo(route.params.account_info);
        setAddress(route.params.address);
      }
    }
  }, [route]);

  async function saveImage(imageBlob) {
    setIsLoading(true);
    const account = await saveAccountLogo(imageBlob, 11);
    if (account) {
      setIsLoading(false);
      console.log("success");
    }
  }

  const uploadImage = async (imageUri) => {
    const newImageUri = "file:///" + imageUri.split("file:/").join("");

    const formData = new FormData();
    formData.append("account_id", 11);
    formData.append("", {
      uri: newImageUri,
      type: mime.getType(newImageUri),
      name: newImageUri.split("/").pop(),
    });
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      console.log(formData);
      const res = await axios.post(
        `https://asp-noc-dev-win.azurewebsites.net/api/accounts/UploadProfilePhoto`,
        formData,
        config
      );
      if (res) {
        console.log("Ok res");
      }
      console.log("Ok");
    } catch (err) {
      console.log({ err });
    }
  };

  async function imagetoBlob(imageURI) {
    const response = await fetch(imageURI);
    const blob = await response.blob();

    if (!blob.cancelled) {
      uploadImage(blob);
      console.log("test");
      console.log(JSON.stringify(blob));
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
    if (Platform.OS === "ios") {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== "granted") {
        const { newStatus } = await ImagePicker.requestCameraPermissionsAsync();
        if (newStatus !== "granted") {
        } else {
          return false;
        }
      }
    }

    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      // uploadImage(result.uri);
      let localUri = result.uri;
      let filename = localUri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      // Upload the image using the fetch and FormData APIs
      let formData = new FormData();
      // Assume "photo" is the name of the form field the server expects
      formData.append("account_id", 11);
      formData.append("", { uri: localUri, name: filename, type });

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      try {
        console.log(formData);
        const res = await axios.post(
          `https://asp-noc-dev-win.azurewebsites.net/api/accounts/UploadProfilePhoto`,
          formData,
          config
        );
        if (res) {
          console.log(JSON.stringify(res));
        }
        console.log("Ok");
      } catch (err) {
        console.log({ err });
      }
    }
  };

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
            onPress={() =>
              navigation.navigate("CareProvider3Screen", {
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
            paddingTop: windowHeightWithHeader(1),
            paddingBottom: windowHeightWithHeader(3),
          }}
        >
          <Text style={styles.titleContainer}>Profile</Text>
          <Text style={styles.titleContainer2}>Photo</Text>
          <View style={styles.progressContainer}>
            <Text
              size={hp("1.6%")}
              color={materialTheme.COLORS.BLACK}
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              Please make sure your pgoto clearly shows your face
            </Text>
            {image ? (
              <View
                style={{
                  height: windowHeightWithHeader(15),
                  marginTop: windowHeightWithHeader(5),
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{
                    width: windowHeightWithHeader(18),
                    height: windowHeightWithHeader(18),
                    borderWidth: 6,
                    borderRadius: 4,
                    borderColor: "#ffffff",
                  }}
                />
              </View>
            ) : (
              <View
                style={{
                  height: windowHeightWithHeader(15),
                  marginTop: windowHeightWithHeader(5),
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="camera-plus"
                  color="#46b5d0"
                  size={windowHeightWithHeader(12)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </View>
            )}
            <TouchableOpacity
              onPress={takePhoto}
              style={[
                styles.signIn,
                {
                  backgroundColor: "#782ddb",
                  borderColor: "#782ddb",
                  borderWidth: 1,
                  marginTop: windowHeightWithHeader(7),
                },
              ]}
            >
              <Text
                style={[
                  styles.textPhoto,
                  {
                    color: "#f9e0ff",
                    fontFamily: "Poppins_600SemiBold",
                  },
                ]}
              >
                Take Photo
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={pickImage}
              style={[
                styles.signIn,
                {
                  backgroundColor: "#782ddb",
                  borderColor: "#782ddb",
                  borderWidth: 1,
                  marginTop: windowHeightWithHeader(2),
                },
              ]}
            >
              <Text
                style={[
                  styles.textPhoto,
                  {
                    color: "#f9e0ff",
                    fontFamily: "Poppins_600SemiBold",
                  },
                ]}
              >
                Choose from camera roll
              </Text>
            </TouchableOpacity> */}
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
              navigation.navigate("ReviewAccountScreen", {
                account_info: accountInfo,
                user_info: userInfo,
                address: address,
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

export default CareProvider4;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#f2f4f5",
  },
  image: {
    height: height,
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
    paddingTop: hp("2.5%"),
    height: Platform.OS === "ios" ? hp("65%") : hp("65%"),
  },
  input: {
    fontSize: 14,
    marginTop: hp("1.1%"),
    marginBottom: hp("2.2%"),
    backgroundColor: "white",
    borderRadius: 4,
    padding: 14,
    fontFamily: "Poppins_400Regular",
    borderColor: materialTheme.COLORS.BLACK,
    borderWidth: 0.5,
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
  signIn: {
    width: "100%",
    height: windowHeightWithHeader(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textPhoto: {
    fontSize: windowHeightWithHeader(2),
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
});
