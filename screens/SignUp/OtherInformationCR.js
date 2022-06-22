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

const OtherInformation = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(true);
  const [isEnabled3, setIsEnabled3] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

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
          onPress={() => navigation.navigate("CareRecipientInfoScreen")}
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
            marginTop: hp("1%"),
            marginBottom: Platform.OS === "ios" ? hp("5%") : hp("3%"),
            paddingLeft: wp("6%"),
            paddingRight: wp("6%"),
            alignItems: "center",
          }}
        >
          <Text
            size={22}
            color="#4B4C4C"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Care Recipient Other Information
          </Text>
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
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={styles.square2}>
            <Text
              size={16}
              color={"#4B4C4C"}
              style={{
                textAlign: "left",
                paddingTop: Platform.OS === "ios" ? 0 : 10,
                fontFamily: "Poppins_400Regular",
              }}
            >
              Do you have any food or medication allergy?
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
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
          <View style={styles.square2}>
            <Text
              size={16}
              color={"#4B4C4C"}
              style={{
                textAlign: "left",
                paddingTop: Platform.OS === "ios" ? 0 : 10,
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
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
          <View style={styles.square2}>
            <Text
              size={16}
              color={"#4B4C4C"}
              style={{
                textAlign: "left",
                paddingTop: Platform.OS === "ios" ? 0 : 10,
                fontFamily: "Poppins_400Regular",
              }}
            >
              Do you have any advance directive?
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
            uniqueKey="id"
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
                paddingTop: hp("15%"),
                paddingBottom: hp("15%"),
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
            onPress={() => navigation.navigate("CareRecipientInfoScreen")}
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
            onPress={() => navigation.navigate("OtherInformationCR2Screen")}
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
