import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Text } from "galio-framework";
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
import { getCreditCardList } from "../../services/account";
import { getGlobal } from "../../utils/store";

const PaymentInfo = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [accountId, setAccountId] = React.useState(0);

  const getData = async () => {
    const id = await getGlobal("account_id");
    if (id) {
      setAccountId(Number(id));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (accountId) getCreditCardListData();
  }, [accountId]);

  const getCreditCardListData = async () => {
    setIsLoading(true);
    const progressData = getCreditCardList(accountId);
    const result = await progressData;
    if (result) {
      setData(result);
      setIsLoading(false);
    }
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
        style={styles.image}
      >
        <View
          style={{
            height: windowHeightWithHeader(10),
          }}
        >
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("PaymentInfoScreen")}
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
          <ScrollView
            View
            style={{
              paddingTop: windowHeightWithHeader(3),
            }}
          >
            {data.map((item, index) => (
              <View style={styles.checkboxContainer2} key={index}>
                <View style={styles.square}>
                  <Text
                    size={22}
                    color={"#4B4C4C"}
                    style={{
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    {index + 1}.
                  </Text>
                </View>
                <View style={styles.square2}>
                  <Text
                    size={22}
                    color={"#4B4C4C"}
                    style={{
                      fontFamily: "Poppins_400Regular",
                    }}
                  >
                    Card ***
                    {item.account_card_payment.cardNumber.substr(
                      item.account_card_payment.cardNumber.length - 4
                    )}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            height: windowHeightWithHeader(10),
            paddingLeft: wp("8%"),
            paddingRight: wp("8%"),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("AddCreditCardScreen")}
          >
            <View style={styles.nextBtn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#d7feff",
                    fontFamily: "Poppins_700Bold",
                    fontSize: 26,
                    textAlign: "center",
                  },
                ]}
              >
                Add Card
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PaymentInfo;

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
  nextBtn: {
    height: windowHeightWithHeader(10),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#41c3e0",
    borderColor: "#41c3e0",
    borderWidth: 1,
    width: wp("85%"),
    textAlign: "center",
  },
  iconSign: {
    alignItems: "flex-end",
    position: "absolute",
    paddingLeft: wp("72%"),
  },
  textSign: {
    textAlign: "center",
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
    alignItems: "flex-start",
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
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
    flex: 1,
    height: windowHeightWithHeader(7),
    alignItems: "center",
  },
  square2: {
    flex: 5,
    height: windowHeightWithHeader(7),
  },
});
