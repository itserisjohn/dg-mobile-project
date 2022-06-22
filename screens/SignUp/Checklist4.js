import React from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Button, Text } from "galio-framework";
import { View, Image } from "react-native";
const { height } = Dimensions.get("screen");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Checkbox } from "galio-framework";
import Icon from "../../components/Icon";
import { HeaderHeight } from "../../constants/utils";
import * as Animatable from "react-native-animatable";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CheckList4 = ({ navigation }) => {
  const [accepted, setAccepted] = React.useState(false);
  const [accepted1, setAccepted1] = React.useState(true);

  const valueChanged = () => {
    setAccepted(true);
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.backBtn}
        color="transparent"
        onPress={() => navigation.navigate("ServicePreferenceScreen")}
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
          Account Registration
        </Text>
      </View>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: hp("70%"),
          marginTop: hp("20%"),
          paddingTop: hp("5%"),
          paddingLeft: wp("20%"),
          paddingRight: wp("20%"),
        }}
      >
        <View style={styles.checkboxContainer}>
          <Checkbox
            label=""
            color="#87c9e4"
            initialValue={true}
            disabled
            checkboxStyle={{
              width: hp("4%"),
              height: hp("4%"),
              borderColor: "#87c9e4",
            }}
            iconSize={hp("3%")}
          />
          <Text
            size={hp("2.5%")}
            color="#4B4C4C"
            style={{ marginLeft: 15, fontFamily: "Poppins_400Regular" }}
          >
            Create an Account
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            label=""
            color="#87c9e4"
            initialValue={true}
            disabled
            checkboxStyle={{
              width: hp("4%"),
              height: hp("4%"),
              borderColor: "#87c9e4",
            }}
            iconSize={hp("3%")}
          />
          <Text
            size={hp("2.5%")}
            color="#4B4C4C"
            style={{ marginLeft: 15, fontFamily: "Poppins_400Regular" }}
          >
            Payment Information
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            label=""
            color="#87c9e4"
            initialValue={true}
            disabled
            checkboxStyle={{
              width: hp("4%"),
              height: hp("4%"),
              borderColor: "#87c9e4",
            }}
            iconSize={hp("3%")}
          />
          <Text
            size={hp("2.5%")}
            color="#4B4C4C"
            style={{ marginLeft: 15, fontFamily: "Poppins_400Regular" }}
          >
            Other Information
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            label=""
            color="#87c9e4"
            initialValue={true}
            disabled
            checkboxStyle={{
              width: hp("4%"),
              height: hp("4%"),
              borderColor: "#87c9e4",
            }}
            iconSize={hp("3%")}
          />
          <Text
            size={hp("2.5%")}
            color="#4B4C4C"
            style={{ marginLeft: 15, fontFamily: "Poppins_400Regular" }}
          >
            Service Preference
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Animatable.View animation="bounceIn">
            <MaterialCommunityIcons
              name="check-circle"
              size={60}
              color="#87c9e4"
            />
          </Animatable.View>
          <Text
            size={hp("2.5%")}
            color="#4B4C4C"
            style={{
              marginTop: 15,
              marginLeft: 15,
              fontFamily: "Poppins_400Regular",
              textAlign: "center",
            }}
          >
            You're all set!
          </Text>
        </View>
        <View style={{ marginTop: hp("5%") }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("App")}
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
              Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckList4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
  },
  titleContainer: {
    textAlign: "center",
    color: "#4B4C4C",
    fontSize: hp("3%"),
    marginBottom: hp("2.2%"),
  },
  textContainer: {
    marginBottom: hp("2.2%"),
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
  disabledBtn: {
    width: "100%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#9de3f7",
    borderColor: "#9de3f7",
    borderWidth: 1,
    marginTop: hp("1.8%"),
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: hp("4%"),
  },
});
