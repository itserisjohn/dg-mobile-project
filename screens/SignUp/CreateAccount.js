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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CreateAccount = ({ navigation }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [items, setItems] = React.useState([
    "Care Customer",
    "Care Specialist",
  ]);

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
          onPress={() => navigation.navigate("Login")}
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
          height: hp("32%"),
          paddingLeft: wp("8%"),
          paddingRight: wp("8%"),
          paddingTop: hp("1%"),
        }}
      >
        <Text style={styles.titleContainer}>Create</Text>
        <Text style={styles.titleContainer2}>Account</Text>
      </View>

      <View
        style={{
          height: hp("50%"),
          alignItems: "center",
          alignContent: "center",

          width: wp("100%"),
        
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("LegalWaiverScreen")}
          style={styles.nextBtn}
        >
          <Text
            style={[
              styles.textAccHeart,
              {
                color: "#ffffff",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 22,
                marginLeft: 20,
                paddingBottom: 25,
              },
            ]}
          >
            Care
          </Text>
          <Text
            style={[
              styles.textAccHeart,
              {
                color: "#ffffff",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 22,
                marginLeft: 20,
                marginTop: 20,
                paddingTop: 30,
              },
            ]}
          >
            Customer
          </Text>
          <Text style={styles.iconAccHeart}>
            <MaterialCommunityIcons
              name="account-heart-outline"
              color="#782ddb"
              size={50}
              style={{
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            />
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: hp("50%"),
            alignItems: "center",
            alignContent: "center",
            width: wp("100%"),
            paddingTop: hp("2.5%"),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("LegalWaiverScreen")}
            style={styles.nextBtn2}
          >
            <Text style={styles.iconDoctor}>
              <MaterialCommunityIcons
                name="doctor"
                color="#782ddb"
                size={50}
                style={{
                  marginLeft: 2,
                }}
              />
            </Text>
            <Text
              style={[
                styles.textDoctor,
                {
                  color: "#782ddb",
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 23,
                  marginLeft: 20,
                  paddingBottom: 25,
                },
              ]}
            >
              Care
            </Text>
            <Text
              style={[
                styles.textDoctor,
                {
                  color: "#782ddb",
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 23,
                  marginLeft: 20,
                  marginTop: 20,
                  paddingTop: 30,
                },
              ]}
            >
              Specialist
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;

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
    marginTop: Platform.OS == "ios" ? 55 : 0,
  },
  
  nextBtn: {
    height: hp("12%"),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#b880f5",
    borderColor: "#b880f5",
    borderWidth: 1,
    width: wp("85%"),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    
  },
  nextBtn2: {
    width: wp("85%"),
    height: hp("12%"),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10, 
  },
  
  titleContainer: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: 54,
    marginTop: 14,
    position: "relative",
  },
  titleContainer2: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: 54,
  },
  iconAccHeart: {
    height: hp("8%"),
    width: hp("9%"),
    alignItems: "flex-start",
    paddingLeft: 7,
    paddingTop: 5,
    marginLeft: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: Platform.OS == "ios" ? 55 : 0,
  },
  textAccHeart: {
    position: "absolute",
    paddingLeft: hp("10%"),
  },
  iconDoctor: {
    height: hp("8%"),
    width: hp("9%"),
    alignItems: "flex-start",
    paddingLeft: 7,
    paddingTop: 5,
    marginLeft: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: Platform.OS == "ios" ? 55 : 0,
  },
  textDoctor: {
    position: "absolute",
    paddingLeft: hp("10%"),
  },
});

