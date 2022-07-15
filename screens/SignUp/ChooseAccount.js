import React from "react";
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Button, Text } from "galio-framework";
import { View } from "react-native";
import Icon from "../../components/Icon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SelectDropdown from "react-native-select-dropdown";
import { HeaderHeight } from "../../constants/utils";
const { width } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const ChooseAccount = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState(["As a User", "As a Care Provider"]);

  let paddingVertical = 7;

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
      <View
        style={{
          height: hp("12%"),
        }}
      >
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("SignUpCareProviderScreen")}
        >
          <Icon
            size={22}
            name="arrow-left"
            family="feather"
            color={"#DCDCDC"}
          />
        </TouchableOpacity>
        <View
          style={{
            height: hp("15%"),
            paddingLeft: wp("8%"),
            paddingRight: wp("8%"),
            paddingTop: hp("1%"),
          }}
        >
          <Text style={styles.titleContainer}>Success!</Text>
        </View>

        <View
          View
          style={{
            height: hp("30%"),
            alignItems: "center",
            alignContent: "center",
            width: wp("100%"),
          }}
        >
          <Icon size={200} name="heart" family="foundation" color={"#6B24AA"} />
        </View>
        <View
          View
          style={{
            height: hp("32%"),
            alignItems: "center",
            alignContent: "center",
            width: wp("100%"),
          }}
        >
          <Text style={styles.descText} size={hp("2%")}>
            Congratulations!
          </Text>
          <Text style={styles.descText2} size={hp("2%")}>
            Your account has been successfully created.
          </Text>
          <Text style={styles.descText3} size={hp("2%")}>
            Proceed to get fully verified.
          </Text>
        </View>

        <View
          style={{
            height: hp("15%"),
            alignItems: "center",
            alignContent: "center",
            width: wp("100%"),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckListScreen")}
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
              Proceed
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
    </View>
  );
};

export default ChooseAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
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
    marginTop: Platform.OS == "ios" ? 55 : 22,
  },
  descText: {
    marginTop: hp("2.5%"),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    paddingRight: hp("25%"),
  },
  descText2: {
    marginTop: hp("2.5%"),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    paddingLeft: hp("3.5%"),
    paddingRight: hp("22%"),
  },
  descText3: {
    marginTop: hp("2.5%"),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    paddingRight: hp("14.5%"),
  },
  nextBtn: {
    height: hp("10%"),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#41c3e0",
    borderColor: "#41c3e0",
    borderWidth: 1,
    width: wp("85%"),
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
    paddingLeft: wp("72%"),
  },
  textSign: {
    position: "absolute",
    paddingLeft: hp("4%"),
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  titleContainer: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: 54,
    marginTop: 14,
    position: "relative",
  },
});
