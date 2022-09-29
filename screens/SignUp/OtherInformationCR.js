import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
  ImageBackground,
  ActivityIndicator,
  Switch,
  TextInput,
  ScrollView,
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
import { windowHeightWithHeader } from "../../utils/utils";
import materialTheme from "../../constants/Theme";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import languages from "../../utils/languages.json";
import { MaterialIcons } from "@expo/vector-icons";
import { saveOtherInfo } from "../../services/account";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const OtherInformation = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({
    other_infoid: 0,
    otherinfo_accountid: 1,
    have_allergies: true,
    have_pets: true,
    have_advance_directive: true,
    weight: 60,
    advance_directive: "test",
    spoken_languages: "English",
  });
  const [crID, setCrID] = React.useState(56);

  useEffect(() => {
    if (route) {
      if (route.params) {
        if (route.params.cr_id) setCrID(route.params.cr_id);
      }
    }
  }, [route]);

  useEffect(() => {
    if (crID) {
      console.log(crID);
    }
  }, [crID]);

  const [selectedItems, setSlectedItems] = useState([]);

  const onSelectedItemsChange = (selected) => {
    setSlectedItems(selected);
    handleChange("spoken_languages", selected.join());
  };

  function handleChange(dataType, value) {
    let newState = [];
    newState.push(data);
    let otherInfo = newState.map((item, i) => {
      if (i == 0) {
        item.otherinfo_accountid = crID;
        return { ...item, [dataType]: value };
      }
      return item;
    });
    setData(otherInfo[0]);
  }

  async function onSubmit() {
    setIsLoading(true);
    const creditCard = await saveOtherInfo(data);
    if (creditCard) {
      setTimeout(function () {
        setIsLoading(false);
        navigation.navigate("OtherInformationCR2Screen", {
          cr_id: crID,
        });
      }, 1000);
    } else {
      setIsLoading(false);
    }
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
            onPress={() => navigation.navigate("CheckListScreen")}
          >
            <Icon
              size={22}
              name="arrow-left"
              family="feather"
              color={"#DCDCDC"}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            height: windowHeightWithHeader(75),
            paddingBottom: windowHeightWithHeader(2),
            flex: 1,
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
            <Text style={styles.titleContainer}>Family Member</Text>
            <Text style={styles.titleContainer2}>Other Information</Text>
          </View>
          <View
            View
            style={{
              width: wp(100),
            }}
          >
            <Text
              style={styles.descText}
              size={windowHeightWithHeader(1.8)}
            ></Text>
            <View style={styles.checkboxContainer2}>
              <View style={styles.square1}>
                <Switch
                  style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                  ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
                  thumbColor={
                    Platform.OS === "android"
                      ? materialTheme.COLORS.SWITCH_OFF
                      : null
                  }
                  trackColor={{
                    false: materialTheme.COLORS.SWITCH_OFF,
                    true: "#87c9e4",
                  }}
                  onValueChange={(e) => handleChange("have_allergies", e)}
                  value={data.have_allergies}
                />
              </View>
              <View style={styles.square2}>
                <Text
                  size={14}
                  color={"#4B4C4C"}
                  style={{
                    textAlign: "left",
                    paddingTop: Platform.OS === "ios" ? 0 : 10,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  Do you have any food or
                </Text>
                <Text
                  size={14}
                  color={"#4B4C4C"}
                  style={{
                    textAlign: "left",
                    paddingTop: Platform.OS === "ios" ? 0 : 10,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  medication allergy?
                </Text>
              </View>
            </View>
            <View style={styles.checkboxContainer2}>
              <View style={styles.square1}>
                <Switch
                  style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                  ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
                  thumbColor={
                    Platform.OS === "android"
                      ? materialTheme.COLORS.SWITCH_OFF
                      : null
                  }
                  trackColor={{
                    false: materialTheme.COLORS.SWITCH_OFF,
                    true: "#87c9e4",
                  }}
                  onValueChange={(e) => handleChange("have_pets", e)}
                  value={data.have_pets}
                />
              </View>
              <View style={styles.square2}>
                <Text
                  size={14}
                  color={"#4B4C4C"}
                  style={{
                    textAlign: "left",
                    paddingTop: Platform.OS === "ios" ? 5 : 15,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  Do you have any pets?
                </Text>
              </View>
            </View>
            <View style={styles.checkboxContainer2}>
              <View style={styles.square1}>
                <Switch
                  style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                  ios_backgroundColor={materialTheme.COLORS.SWITCH_OFF}
                  thumbColor={
                    Platform.OS === "android"
                      ? materialTheme.COLORS.SWITCH_OFF
                      : null
                  }
                  trackColor={{
                    false: materialTheme.COLORS.SWITCH_OFF,
                    true: "#87c9e4",
                  }}
                  onValueChange={(e) =>
                    handleChange("have_advance_directive", e)
                  }
                  value={data.have_advance_directive}
                />
              </View>
              <View style={styles.square2}>
                <Text
                  size={14}
                  color={"#4B4C4C"}
                  style={{
                    textAlign: "left",
                    paddingTop: Platform.OS === "ios" ? 0 : 10,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  Do you have any advance
                </Text>
                <Text
                  size={14}
                  color={"#4B4C4C"}
                  style={{
                    textAlign: "left",
                    paddingTop: Platform.OS === "ios" ? 0 : 10,
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  directive?
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingLeft: wp("6%"),
                paddingRight: wp("6%"),
              }}
            >
              <Text size={16} color={"#4B4C4C"} style={{ textAlign: "left" }}>
                What is your height?
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "flex-start",
                paddingLeft: wp("6%"),
                paddingRight: wp("6%"),
              }}
            >
              <View style={{ flex: 0.8, alignItems: "flex-start" }}>
                <TextInput
                  keyboardType="numeric"
                  style={{
                    fontSize: 20,
                    width: "90%",
                    paddingTop: 20,
                    borderBottomColor: "#000000",
                    borderBottomWidth: 2,
                    textAlign: "center",
                  }}
                />
              </View>
              <View style={{ flex: 0.2, alignItems: "flex-start" }}>
                <Text
                  size={20}
                  color={"#4B4C4C"}
                  style={{ textAlign: "left", paddingTop: 22 }}
                >
                  ft
                </Text>
              </View>
              <View style={{ flex: 0.2, alignItems: "flex-start" }}></View>
              <View style={{ flex: 0.8, alignItems: "flex-start" }}>
                <TextInput
                  keyboardType="numeric"
                  style={{
                    fontSize: 20,
                    width: "90%",
                    paddingTop: 20,
                    borderBottomColor: "#000000",
                    borderBottomWidth: 2,
                    textAlign: "center",
                  }}
                />
              </View>
              <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Text
                  size={20}
                  color={"#4B4C4C"}
                  style={{ textAlign: "left", paddingTop: 22 }}
                >
                  in
                </Text>
              </View>
            </View>
            <View
              marginTop={30}
              marginBottom={15}
              style={{
                paddingLeft: wp("6%"),
                paddingRight: wp("6%"),
              }}
            >
              <Text size={16} color={"#4B4C4C"} style={{ textAlign: "left" }}>
                Langauges Spoken:
              </Text>
            </View>
            <View
              style={{
                paddingLeft: wp("6%"),
                paddingRight: wp("6%"),
              }}
            >
              <SectionedMultiSelect
                items={languages}
                IconRenderer={MaterialIcons}
                uniqueKey="name"
                subKey="children"
                selectText="Choose languages"
                searchPlaceholderText="Search languages..."
                showDropDowns={false}
                readOnlyHeadings={true}
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                styles={{
                  container: {
                    backgroundColor: "#ffffff",
                  },
                  subItemText: {
                    fontSize: 17,
                  },
                  modalWrapper: {
                    paddingTop: windowHeightWithHeader(15),
                    paddingBottom: windowHeightWithHeader(15),
                  },
                  selectToggle: {
                    backgroundColor: "#ffffff",
                    borderWidth: 2,
                    borderColor: "#b2b3b6",
                    borderRadius: 8,
                    padding: 10,
                  },
                  chipsWrapper: {
                    marginTop: 10,
                    marginBottom: 10,
                  },
                  chipContainer: {
                    backgroundColor: "#87c9e4",
                    borderRadius: 8,
                    borderColor: "#87c9e4",
                  },
                  chipIcon: {
                    color: "#ffffff",
                  },
                  chipText: {
                    fontSize: 16,
                    color: "#ffffff",
                  },
                  button: { backgroundColor: "#87c9e4" },
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: windowHeightWithHeader(20),
            paddingTop: windowHeightWithHeader(3),
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
                Save
              </Text>
              {isLoading ? (
                <ActivityIndicator size="large" color="#ffffff" />
              ) : null}
              <Text style={styles.iconSign}>
                <MaterialCommunityIcons name="send" color="#d7feff" size={30} />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OtherInformation;

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
    marginTop: windowHeightWithHeader(5),
    marginBottom: windowHeightWithHeader(3),
    fontSize: windowHeightWithHeader(3),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
    paddingRight: windowHeightWithHeader(3.5),
    paddingLeft: wp(8),
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
    fontSize: windowHeightWithHeader(4),
    marginTop: windowHeightWithHeader(1.2),
    position: "relative",
  },
  titleContainer2: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(4),
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
