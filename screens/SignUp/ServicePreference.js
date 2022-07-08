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

const OtherInformation = ({ navigation }) => {
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

  const [selectedItems, setSlectedItems] = useState([]);

  const onSelectedItemsChange = (selected) => {
    setSlectedItems(selected);
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
          onPress={() => navigation.navigate("CheckList3Screen")}
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
          paddingLeft: wp("2%"),
          paddingRight: wp("6%"),
        }}
      >
        <View
          style={{
            marginBottom: hp("1%"),
            paddingLeft: wp("6%"),
            paddingRight: wp("6%"),
          }}
        >
          <Text
            size={22}
            color="#4B4C4C"
            style={{ fontFamily: "Poppins_400Regular", textAlign: "center" }}
          >
            Care Plan: Service Needs
          </Text>
        </View>
        <View style={styles.checkboxContainer1}>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch}>
              <Image
                source={isEnabled1 ? Image1C : Image1}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch2}>
              <Image
                source={isEnabled2 ? Image2C : Image2}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch3}>
              <Image
                source={isEnabled3 ? Image3C : Image3}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}>
            <Text style={styles.description}>Bathing</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Getting dressed or grooming</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Getting out of chair/bed</Text>
          </View>
        </View>
        <View style={styles.checkboxContainer1}>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch4}>
              <Image
                source={isEnabled4 ? Image4C : Image4}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch5}>
              <Image
                source={isEnabled5 ? Image5C : Image5}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch6}>
              <Image
                source={isEnabled6 ? Image6C : Image6}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}>
            <Text style={styles.description}>Compression Stocking</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Bowel and Bladder</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Meal Service</Text>
          </View>
        </View>
        <View style={styles.checkboxContainer1}>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch7}>
              <Image
                source={isEnabled7 ? Image7C : Image7}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch8}>
              <Image
                source={isEnabled8 ? Image8C : Image8}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch9}>
              <Image
                source={isEnabled9 ? Image9C : Image9}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}>
            <Text style={styles.description}>Medication Management</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Medical Treatment</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Diabetes Management</Text>
          </View>
        </View>
        <View style={styles.checkboxContainer1}>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch10}>
              <Image
                source={isEnabled10 ? Image10C : Image10}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch11}>
              <Image
                source={isEnabled11 ? Image11C : Image11}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch12}>
              <Image
                source={isEnabled12 ? Image9C : Image12}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}>
            <Text style={styles.description}>Housekeeping</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Pet Service</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Grocery</Text>
          </View>
        </View>
        <View style={styles.checkboxContainer1}>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch13}>
              <Image
                source={isEnabled13 ? Image13C : Image13}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}>
            <TouchableOpacity onPress={toggleSwitch14}>
              <Image
                source={isEnabled14 ? Image14C : Image14}
                resizeMode="contain"
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.square1}></View>
        </View>
        <View style={styles.checkboxContainer2}>
          <View style={styles.square1}>
            <Text style={styles.description}>Need a Ride</Text>
          </View>
          <View style={styles.square1}>
            <Text style={styles.description}>Communication Impairment</Text>
          </View>
          <View style={styles.square1}></View>
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
            onPress={() => navigation.navigate("CheckList3Screen")}
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
            onPress={() => navigation.navigate("Checklist4Screen")}
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
              Next
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
  checkboxContainer1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%"),
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%"),
    marginBottom: hp("0.2%"),
  },
  square1: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    height: hp("9.5%"),
    width: wp("14%"),
  },
  description: {
    fontSize: 12,
    color: "#4B4C4C",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
});
