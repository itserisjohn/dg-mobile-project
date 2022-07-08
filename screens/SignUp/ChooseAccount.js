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
      {/* <Button
        style={styles.backBtn}
        color="transparent"
        onPress={() => navigation.navigate("Login")}
      >
        <Icon
          size={hp("5%")}
          name="chevron-left"
          family="feather"
          color={"#ffffff"}
          style={styles.backBtn}
        />
      </Button> */}
      <View style={{ height: hp("100%") }}>
        <View style={{ alignItems: "center" }}>
          <Text size={hp("2.5%")} style={styles.headerText}>
            Create an Account
          </Text>
        </View>
        <View style={{ padding: hp("8%") }}>
          <Text style={styles.titleText} size={hp("3.2%")}>
            Congratulations!
          </Text>
          <Text style={styles.descText} size={hp("2.8%")}>
            Your account has been successfully created.
          </Text>
          {/* <Text style={styles.descText2} size={hp("1.9%")}>
            Choose type of account
          </Text> */}
          {/* <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              marginTop: hp("1%"),
              backgroundColor: "#ffffff",
              borderColor: "#ffffff",
              color: "#87c9e4",
            }}
            placeholder="Type of Account"
            placeholderStyle={{ color: "#87c9e4" }}
            arrowIconContainerStyle={{ color: "#87c9e4" }}
            labelStyle={"#87c9e4"}
          /> */}
          {/* <SelectDropdown
            data={items}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={"Type of Account"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#87c9e4"}
                  size={14}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          /> */}
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CheckListScreen")}
              style={styles.nextBtn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    fontSize: 16,
                    color: "#87c9e4",
                    fontFamily: "Poppins_400Regular",
                    paddingVertical,
                  },
                ]}
              >
                Proceed
              </Text>
            </TouchableOpacity>
            {/* <Text
              style={{
                fontSize: 16,
                color: "#ffffff",
                marginTop: 16,
                fontFamily: "Poppins_400Regular",
                textDecorationLine: "underline",
              }}
              onPress={() => navigation.navigate("App")}
            >
              Decide Later
            </Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChooseAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87c9e4",
  },
  backBtn: {
    alignItems: "flex-start",
    position: "absolute",
    marginLeft: 0,
    top: 0,
    borderColor: "transparent",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 2.5 : 6,
  },
  headerText: {
    position: "absolute",
    top: hp("2.5%"),
    color: "#ffffff",
    fontFamily: "Poppins_600SemiBold",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
  },
  titleText: {
    marginTop: hp("20%"),
    color: "#ffffff",
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
  },
  descText: {
    marginTop: hp("3%"),
    color: "#ffffff",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },
  descText2: {
    marginTop: hp("5%"),
    color: "#ffffff",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
  },
  nextBtn: {
    width: "50%",
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 1,
    marginTop: hp("10%"),
  },
  // DROPDOWN
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width: "100%", backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "20%",
  },

  dropdown1BtnStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#87c9e4",
    marginTop: 3,
  },
  dropdown1BtnTxtStyle: {
    color: "#87c9e4",
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    paddingVertical: 9,
  },
  dropdown1DropdownStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: -7,
  },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: {
    color: "#87c9e4",
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    paddingVertical: 9,
  },

  dropdown2BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#87c9e4",
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#87c9e4",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {
    backgroundColor: "#87c9e4",
    borderBottomColor: "#C5C5C5",
  },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
  },

  dropdown3BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#87c9e4",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3BtnTxt: {
    color: "#87c9e4",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: { backgroundColor: "slategray" },
  dropdown3RowStyle: {
    backgroundColor: "slategray",
    borderBottomColor: "#87c9e4",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    color: "#F1F1F1",
    textAlign: "center",
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    marginHorizontal: 12,
  },

  dropdown4BtnStyle: {
    width: "50%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#87c9e4",
  },
  dropdown4BtnTxtStyle: { color: "#87c9e4", textAlign: "left" },
  dropdown4DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown4RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown4RowTxtStyle: { color: "#87c9e4", textAlign: "left" },
});
