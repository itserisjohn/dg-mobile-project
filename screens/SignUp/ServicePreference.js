import React, { useState } from "react";
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

const CareProvider2 = ({ navigation }) => {
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
                height: windowHeightWithHeader(78),
                paddingLeft: wp(8),
                paddingRight: wp(8),
                paddingTop: windowHeightWithHeader(1),
                paddingBottom: windowHeightWithHeader(3),
              }}
            >
              <Text style={styles.titleContainer}>Care Plan:</Text>
              <Text style={styles.titleContainer2}>Service Needs</Text>
              <KeyboardAwareScrollView
                keyboardShouldPersistTaps={"always"}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                enableOnAndroid={true}
                extraScrollHeight={Platform.OS === "ios" ? 0 : 100}
              >
                <View style={{ paddingTop: windowHeightWithHeader(3) }}>
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
                      <Text style={styles.description}>
                        Getting dressed or grooming
                      </Text>
                    </View>
                    <View style={styles.square1}>
                      <Text style={styles.description}>
                        Getting out of chair/bed
                      </Text>
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
                      <Text style={styles.description}>
                        Compression Stocking
                      </Text>
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
                      <Text style={styles.description}>
                        Medication Management
                      </Text>
                    </View>
                    <View style={styles.square1}>
                      <Text style={styles.description}>Medical Treatment</Text>
                    </View>
                    <View style={styles.square1}>
                      <Text style={styles.description}>
                        Diabetes Management
                      </Text>
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
                      <Text style={styles.description}>
                        Communication Impairment
                      </Text>
                    </View>
                    <View style={styles.square1}></View>
                  </View>
                </View>
              </KeyboardAwareScrollView>
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
  imageBackground: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  titleContainer: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(4),
    marginTop: windowHeightWithHeader(1.2),
    position: "relative",
  },
  titleContainer2: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(4),
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
  },
});
