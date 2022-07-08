import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Button, Text } from "galio-framework";
import { View, Image } from "react-native";
import Icon from "../../components/Icon";
const { height } = Dimensions.get("screen");
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { HeaderHeight } from "../../constants/utils";
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { getLegalWaiver } from "../../services/legalwaiver";

const LegalWaiver = ({ navigation }) => {
  const [accepted, setAccepted] = React.useState(false);
  const [data, setData] = React.useState({});

  let paddingVertical = 7;

  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const valueChanged = () => {
    setAccepted(!accepted);
  };

  const getLegalWaiverData = async () => {
    const progressData = getLegalWaiver();
    const result = await progressData;
    if (result) {
      setData(result);
    }
  };

  useEffect(() => {
    getLegalWaiverData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: Platform.OS === "ios" ? hp("11%") : hp("8%"),
        }}
      >
        <Icon
          size={hp("4%")}
          name="arrow-left"
          family="feather"
          color={"#DCDCDC"}
          style={styles.backBtn}
          onPress={() => navigation.navigate("CreateAccountScreen")}
        />
      </View>

      <View
        style={{
          height: hp("55%"),
          padding: hp("3.5%"),
          paddingTop: hp("1%"),
        }}
      >
        <Text style={styles.titleContainer}>Terms &</Text>
        <Text style={styles.titleContainer2}>Conditions</Text>
        <Text
          style={[
            styles.textContainer,
            {
              color: "#4B4C4C",
              fontFamily: "Poppins_400Regular",
              fontSize: hp("1.6%"),
            },
          ]}
        >
          Lorem ipsum is the good of days. We are just getting started. We are
          on the ground floor. Success feeds pride. Pride kills urgency. So
          nothing falls like success. We always bring our best. Nothing is more
          fun than serving God with people you love. We are spiritual
          contributors not spiritual consumers. We give up things we love for
          things we love move. We are all about the capital C Church.
        </Text>
        <Text
          style={[
            styles.textContainer,
            {
              color: "#4B4C4C",
              fontFamily: "Poppins_400Regular",
              fontSize: hp("1.6%"),
            },
          ]}
        >
          We impress people with our strengths but we connect with people
          through our weaknesses. We are faith filled, big-thingking,
          bet-the-farm risk takers. We will never insult God with safe thinking
          and safe living. People need to be insturcted. We believe the local
          church is the hope of the world.
        </Text>
        <Text
          style={[
            styles.textContainer,
            {
              color: "#4B4C4C",
              fontFamily: "Poppins_400Regular",
              fontSize: hp("1.6%"),
            },
          ]}
        >
          Trust the process. What you fear the most reveals where you trust God
          the least. We can do infinitely more together than we can apart. We
          want to be known for what we are for. not for what we are against. if
          we live with intergrity, nothing else matters. You don't have to have
          the faith to finish.
        </Text>
      </View>

      <View
        style={{ marginTop: hp("19%"), height: hp("80%"), padding: hp("3%") }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("AddCareRecipientScreen")}
          style={styles.nextBtn}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: "#ffffff",
                fontFamily: "Poppins_700Bold",
                fontSize: hp("2.8%"),
              },
            ]}
          >
            Accept
          </Text>
          <Text style={styles.iconSign}>
            <Icon
              size={hp("2.8%")}
              name="chevron-right"
              family="feather"
              color={"#ffffff"}
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LegalWaiver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f5",
  },
  titleContainer: {
    height: hp("8%"),
    fontFamily: "Poppins_600SemiBold",
    color: "#2596be",
    fontSize: hp("6%"),
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 6,
    position: "relative",
  },
  titleContainer2: {
    height: hp("12%"),
    fontFamily: "Poppins_600SemiBold",
    color: "#2596be",
    fontSize: hp("6%"),
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 6,
  },
  textContainer: {
    marginBottom: hp("2%"),
    fontFamily: "Poppins_400Regular",
  },
  backBtn: {
    alignItems: "flex-start",
    position: "absolute",
    margin: 15,
    padding: 7,
    borderRadius: 10,
    backgroundColor: "#6B24AA",
    borderColor: "#6B24AA",
    borderWidth: 1,
  },
  nextBtn: {
    height: hp("10%"),
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    backgroundColor: "rgb(37, 150, 190)",
    borderColor: "rgb(37, 150, 190)",
    borderWidth: 1,
    marginTop: hp("2%"),
    padding: hp("2%"),
  },
  iconSign: {
    alignItems: "flex-end",
    position: "absolute",
    paddingLeft: hp("38%"),
  },
  textSign: {
    position: "absolute",
    paddingLeft: hp("4%"),
  },
});
