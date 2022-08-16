import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Text,
  LogBox,
  ActivityIndicator,
} from "react-native";
import { View } from "react-native";
import Icon from "../../components/Icon";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import BGImage from "../../assets/images/bg_Create-Account.png";
import { windowHeightWithHeader } from "../../utils/utils";
import { CreditCardInput } from "react-native-credit-card-fullpage-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import materialTheme from "../../constants/Theme";
import { saveCreditCard } from "../../services/account";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getGlobal } from "../../utils/store";

const AddCreditCard = ({ navigation }) => {
  LogBox.ignoreAllLogs();
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState({
    CardNumber: "",
    Cvv: "",
    ExpiryDate: "",
    Country: "",
    BilingAddress: "",
    Zip: "",
  });

  const [accountId, setAccountId] = React.useState("");

  const getData = async () => {
    const id = await getGlobal("account_id");
    if (id) {
      setAccountId(id);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let creditInput = React.createRef();
  let numberInput = React.createRef();
  let expiryInput = React.createRef();
  let cvvInput = React.createRef();

  const onChange = (form) => {};

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // useEffect(() => {
  //   console.log(creditInput);
  // }, []);

  function handleChange(dataType, value) {
    // For Credit Card Image in the Screen
    if (dataType == "CardNumber") {
      creditInput.current.setValues({ number: value });
      creditInput.current._onFocus("number");
      setTimeout(function () {
        numberInput.current.focus();
      }, 1);
    }
    if (dataType == "ExpiryDate") {
      creditInput.current.setValues({ expiry: value });
      creditInput.current._onFocus("expiry");
      setTimeout(function () {
        expiryInput.current.focus();
      }, 1);
    }
    if (dataType == "Cvv") {
      creditInput.current.setValues({ cvc: value });
      creditInput.current._onFocus("cvc");
      setTimeout(function () {
        cvvInput.current.focus();
      }, 1);
    }

    let newState = [];
    newState.push(data);
    let account = newState.map((item, i) => {
      if (i == 0) {
        return { ...item, [dataType]: value };
      }
      return item;
    });

    setTimeout(function () {
      setData(account[0]);
    }, 2);
  }

  async function onSubmit() {
    setIsLoading(true);
    const payload = {
      account_payment: {
        AccountId: Number(accountId),
        PaymentType: "Card",
      },
      account_card_payment: data,
    };
    const creditCard = await saveCreditCard(payload);
    if (creditCard) {
      setTimeout(function () {
        setIsLoading(false);
        navigation.navigate("AddCreditCardListScreen");
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
            onPress={() => navigation.navigate("AddCreditCardListScreen")}
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
            paddingLeft: wp("8%"),
            paddingRight: wp("8%"),
            paddingTop: windowHeightWithHeader(1),
            paddingBottom: windowHeightWithHeader(3),
          }}
        >
          <Text style={styles.titleContainer}>Add</Text>
          <Text style={styles.titleContainer2}>Credit Card</Text>
          <View
            View
            style={{
              paddingTop: windowHeightWithHeader(2),
              paddingBottom: windowHeightWithHeader(18),
              height: windowHeightWithHeader(0),
            }}
          >
            <SafeAreaView>
              <KeyboardAvoidingView
                style={styles.avoider}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
              >
                <CreditCardInput
                  cardFontFamily="Poppins_400Regular"
                  ref={creditInput}
                  onChange={onChange}
                  cardScale={0.7}
                />
              </KeyboardAvoidingView>
            </SafeAreaView>
          </View>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps={"always"}
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            enableOnAndroid={true}
            extraScrollHeight={Platform.OS === "ios" ? -100 : 100}
          >
            <View
              View
              style={{
                height: windowHeightWithHeader(55),
              }}
            >
              <View>
                <Text style={styles.text} color={materialTheme.COLORS.BLACK}>
                  Card Number{" "}
                  <Text style={{ color: "red", justifyContent: "center" }}>
                    *
                  </Text>
                </Text>
                <TextInput
                  maxLength={16}
                  ref={numberInput}
                  style={styles.input}
                  placeholder="1234 5678 1234 5678"
                  placeholderTextColor="#c2c1c1"
                  onChangeText={(e) => handleChange("CardNumber", e)}
                ></TextInput>
                <View style={styles.checkboxContainer}>
                  <View style={[styles.square, { paddingRight: 10 }]}>
                    <Text
                      style={styles.text}
                      color={materialTheme.COLORS.BLACK}
                    >
                      Exp. Date{" "}
                      <Text style={{ color: "red", justifyContent: "center" }}>
                        *
                      </Text>
                    </Text>
                    <TextInput
                      ref={expiryInput}
                      style={styles.input}
                      placeholder="MM/YY"
                      placeholderTextColor="#c2c1c1"
                      width="100%"
                      onChangeText={(e) => handleChange("ExpiryDate", e)}
                    ></TextInput>
                  </View>
                  <View style={[styles.square, { paddingLeft: 10 }]}>
                    <Text
                      style={styles.text}
                      color={materialTheme.COLORS.BLACK}
                    >
                      CVV{" "}
                      <Text style={{ color: "red", justifyContent: "center" }}>
                        *
                      </Text>
                    </Text>
                    <TextInput
                      maxLength={3}
                      ref={cvvInput}
                      style={styles.input}
                      placeholder="123"
                      placeholderTextColor="#c2c1c1"
                      width="100%"
                      onChangeText={(e) => handleChange("Cvv", e)}
                    ></TextInput>
                  </View>
                </View>
                <Text style={styles.text} color={materialTheme.COLORS.BLACK}>
                  Country{" "}
                  <Text style={{ color: "red", justifyContent: "center" }}>
                    *
                  </Text>
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Country"
                  placeholderTextColor="#c2c1c1"
                  onChangeText={(e) => handleChange("Country", e)}
                ></TextInput>
                <Text style={styles.text} color={materialTheme.COLORS.BLACK}>
                  Billing Address{" "}
                  <Text style={{ color: "red", justifyContent: "center" }}>
                    *
                  </Text>
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Billing Address"
                  placeholderTextColor="#c2c1c1"
                  onChangeText={(e) => handleChange("BilingAddress", e)}
                ></TextInput>
                <Text style={styles.text} color={materialTheme.COLORS.BLACK}>
                  Zip Code{" "}
                  <Text style={{ color: "red", justifyContent: "center" }}>
                    *
                  </Text>
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Zip Code"
                  placeholderTextColor="#c2c1c1"
                  onChangeText={(e) => handleChange("Zip", e)}
                ></TextInput>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View
          style={{
            height: windowHeightWithHeader(10),
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

export default AddCreditCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
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
    marginTop: windowHeightWithHeader(1.5),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
  },
  descText2: {
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_600SemiBold",
  },
  descText3: {
    marginTop: windowHeightWithHeader(4),
    color: "#41c3e0",
    textAlign: "center",
    fontFamily: "Poppins_600SemiBold",
  },
  titleContainer: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(6),
    marginTop: windowHeightWithHeader(1.2),
    position: "relative",
  },
  titleContainer2: {
    fontFamily: "Poppins_600SemiBold",
    color: "#46b5d0",
    fontSize: windowHeightWithHeader(6),
  },
  checkboxContainer: {
    alignItems: "center",
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: windowHeightWithHeader(10),
  },
  paymentImage: {
    maxWidth: windowHeightWithHeader(25),
    height: windowHeightWithHeader(10),
  },
  paymentImage2: {
    maxWidth: windowHeightWithHeader(8),
    height: windowHeightWithHeader(8),
    marginLeft: windowHeightWithHeader(3),
  },
  square: {
    flex: 2,
    height: windowHeightWithHeader(12),
    alignItems: "center",
  },
  backBtn2: {
    height: windowHeightWithHeader(6),
    justifyContent: "center",
    borderRadius: 12,
    borderColor: "#87c9e4",
    borderWidth: 1,
    width: wp("85%"),
    marginBottom: windowHeightWithHeader(1),
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
    paddingLeft: wp("72%"),
  },
  textSign: {
    position: "absolute",
    paddingLeft: windowHeightWithHeader(4),
  },
  input: {
    fontSize: windowHeightWithHeader(1.2),
    marginTop: windowHeightWithHeader(0.5),
    marginBottom: windowHeightWithHeader(1),
    backgroundColor: "#ffffff",
    borderRadius: 4,
    padding: 8,
    fontFamily: "Poppins_400Regular",
    borderColor: materialTheme.COLORS.BLACK,
    borderWidth: Platform.OS === "ios" ? 0.5 : 1.5,
  },
  text: {
    fontSize: windowHeightWithHeader(1.2),
    fontFamily: "Poppins_400Regular",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    flex: 1,
    alignItems: "flex-start",
  },
});
