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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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
          onPress={() => navigation.navigate("CheckListScreen")}
        >
          <Icon
            size={hp("5%")}
            name="chevron-left"
            family="feather"
            color={"#87c9e4"}
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
          }}
        >
          <Text size={22} color="#4B4C4C">
            Add Care Recipient/s
          </Text>
        </View>
        <View style={{ paddingLeft: wp("6%"), paddingRight: wp("6%") }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#ffffff",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.12,
              shadowRadius: 60,
            }}
          >
            <Button
              style={{
                backgroundColor: "#ffffff",
                width: "100%",
              }}
            >
              <Block row middle>
                <MaterialCommunityIcons name="plus" size={28} color="#b1b1b1" />
              </Block>
            </Button>
          </TouchableOpacity>
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
            onPress={() => navigation.navigate("OtherInformationScreen")}
            style={styles.nextBtn}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#ffffff",
                },
              ]}
            >
              Skip
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
    color: "#87c9e4",
    fontWeight: "bold",
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
