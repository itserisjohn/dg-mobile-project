import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
  View,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { Text } from "galio-framework";
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
import {
  getLegalWaiver,
  getLegalWaiverProvider,
} from "../../services/legalwaiver";
const { width, height } = Dimensions.get("window");
import { windowHeightWithHeader } from "../../utils/utils";
import BGImage from "../../assets/images/bg_Create-Account.png";

const LegalWaiver = ({ route, navigation }) => {
  const [accepted, setAccepted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
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
    setIsLoading(true);
    const progressData = getLegalWaiver();
    const result = await progressData;
    if (result) {
      setData(result);
      setIsLoading(false);
    }
  };

  const getLegalWaiverProviderData = async () => {
    setIsLoading(true);
    const progressData = getLegalWaiverProvider();
    const result = await progressData;
    if (result) {
      setData(result);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (route) {
      if (route.params.legalWaiver === "account") {
        getLegalWaiverData();
      } else {
        getLegalWaiverProviderData();
      }
    }
  }, [route]);

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
            onPress={() => navigation.navigate("CreateAccountScreen")}
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
          <Text style={styles.titleContainer}>Terms &</Text>
          <Text style={styles.titleContainer2}>Conditions</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={[
                styles.textContainer,
                {
                  color: "#4B4C4C",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                  marginTop: windowHeightWithHeader(3),
                },
              ]}
            >
              {data.waiver_details}
            </Text>
            {isLoading ? (
              <ActivityIndicator
                size="large"
                style={{ marginTop: windowHeightWithHeader(10) }}
                color="#0000ff"
              />
            ) : null}
            {/* <Text
              style={[
                styles.textContainer,
                {
                  color: "#4B4C4C",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                },
              ]}
            >
              We impress people with our strengths but we connect with people
              through our weaknesses. We are faith filled, big-thingking,
              bet-the-farm risk takers. We will never insult God with safe
              thinking and safe living. People need to be insturcted. We believe
              the local church is the hope of the world.
            </Text>
            <Text
              style={[
                styles.textContainer,
                {
                  color: "#4B4C4C",
                  fontFamily: "Poppins_400Regular",
                  fontSize: 13,
                },
              ]}
            >
              Trust the process. What you fear the most reveals where you trust
              God the least. We can do infinitely more together than we can
              apart. We want to be known for what we are for. not for what we
              are against. if we live with intergrity, nothing else matters. You
              don't have to have the faith to finish.
            </Text> */}
          </ScrollView>
        </View>
        <View
          style={{
            height: windowHeightWithHeader(10),
            alignItems: "center",
            alignContent: "center",
            width: wp("100%"),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("CareProvider1Screen")}
          >
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
                Accept
              </Text>
              <Text style={styles.iconSign}>
                <Icon
                  size={30}
                  name="chevron-right"
                  family="feather"
                  color={"#d7feff"}
                />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LegalWaiver;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#f2f4f5",
  },
  image: {
    height: height,
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
  textContainer: {
    marginBottom: windowHeightWithHeader(2),
    fontFamily: "Poppins_400Regular",
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
    marginTop: Platform.OS == "ios" ? 44 : 22,
  },
  nextBtn: {
    height: windowHeightWithHeader(10),
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#41c3e0",
    borderColor: "#41c3e0",
    borderWidth: 1,
    width: wp("85%"),
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
});
