import React, { useRef, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  Switch,
  TextInput,
  ScrollView,
} from "react-native";
import { Button, Text } from "galio-framework";
import { View, Image } from "react-native";
const { height } = Dimensions.get("screen");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Checkbox, theme, Block } from "galio-framework";
import Icon from "../../components/Icon";
import { HeaderHeight } from "../../constants/utils";
import Credit from "../../assets/images/payment/credit.png";
import PaymentPaypal from "../../assets/images/payment/paypal.png";
import CashApp from "../../assets/images/payment/cash-app.png";
import materialTheme from "../../constants/Theme";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import languages from "../../utils/languages.json";
import { MaterialIcons } from "@expo/vector-icons";
import BlankPhoto from "../../assets/images/blank.jpg";
import * as ImagePicker from "expo-image-picker";

const OtherInformation = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const [isEnabled3, setIsEnabled3] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
  const [image, setImage] = React.useState(null);

  const [selectedItems, setSlectedItems] = useState([]);

  const onSelectedItemsChange = (selected) => {
    setSlectedItems(selected);
  };

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
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: Platform.OS === "ios" ? hp("11%") : hp("8%"),
        }}
      >
        <Button
          style={styles.backBtn}
          color="transparent"
          onPress={() => navigation.navigate("OtherInformationCRScreen")}
        >
          <Icon
            size={hp("5%")}
            name="chevron-left"
            family="feather"
            color={"#4B4C4C"}
            style={styles.backBtn}
          />
        </Button>
        <View style={{ alignItems: "center" }}>
          <Text size={hp("2.5%")} style={styles.headerText}>
            User Account Holder
          </Text>
        </View>
      </View>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={{
          height: hp("75.5%"),
        }}
      >
        <View
          style={{
            marginTop: hp("15%"),
            marginBottom: Platform.OS === "ios" ? hp("5%") : hp("3%"),
            alignItems: "center",
          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                borderWidth: 6,
                borderRadius: 4,
                borderColor: "#ffffff",
              }}
            />
          ) : (
            <Image
              source={BlankPhoto}
              style={{
                width: 200,
                height: 200,
                borderWidth: 6,
                borderRadius: 4,
                borderColor: "#ffffff",
              }}
            />
          )}
          <View
            style={{
              marginTop: 60,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              size={22}
              color={materialTheme.COLORS.BLACK}
              onPress={takePhoto}
              style={{
                fontFamily: "Poppins_400Regular",
                marginRight: 30,
              }}
            >
              Take Photo
            </Text>
            <Text
              size={22}
              color={materialTheme.COLORS.BLACK}
              onPress={pickImage}
              style={{ marginLeft: 30 }}
            >
              Upload Photo
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#ffffff",
          height: hp("16.5%"),
          paddingLeft: wp("8%"),
          paddingRight: wp("8%"),
        }}
      >
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("OtherInformationCRScreen")}
            style={styles.backBtn2}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#87c9e4",
                  fontFamily: "Poppins_400Regular",
                },
              ]}
            >
              Previous
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckList3Screen")}
            style={styles.nextBtn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#ffffff",
                  fontFamily: "Poppins_400Regular",
                },
              ]}
            >
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OtherInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
  },
  backBtn: {
    alignItems: "flex-start",
    position: "absolute",
    marginLeft: 0,
    top: 0,
    borderColor: "transparent",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 2.5 : 6,
  },
  backBtn2: {
    borderColor: "#87c9e4",
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    marginTop: hp("1.8%"),
  },
  headerText: {
    position: "absolute",
    top: hp("2.5%"),
    color: "#4B4C4C",
    fontFamily: "Poppins_700Bold",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
  },
  nextBtn: {
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#87c9e4",
    borderColor: "#87c9e4",
    borderWidth: 1,
    marginTop: hp("1.8%"),
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Platform.OS === "ios" ? 35 : 25,
  },
  square1: {
    flex: Platform.OS === "ios" ? 1 : 0.7,
    alignItems: "center",
  },
  square2: {
    flex: Platform.OS === "ios" ? 2 : 2.3,
    alignItems: "flex-start",
  },
});
