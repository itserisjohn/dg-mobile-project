import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, Image } from "react-native";
import logo from "../assets/images/icon.png";
import materialTheme from "../constants/Theme";
import { HeaderHeight } from "../constants/utils";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("window");
import { windowHeight } from "../utils/utils";

import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
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
          height: windowHeight(8),
          alignItems: "center",
          paddingLeft: wp("5%"),
          paddingRight: wp("5"),
        }}
      >
        <View style={styles.search}>
          <MaterialCommunityIcons
            name="magnify"
            color="#4c4c4c"
            size={24}
            style={{
              marginLeft: 2,
            }}
          />
          <TextInput
            placeholder="Search Care..."
            placeholderTextColor="#c1c1c1"
            style={styles.searchInput}
            autoCapitalize="none"
          />
        </View>
      </View>
      <ScrollView style={{ paddingLeft: wp("5%"), paddingRight: wp("5") }}>
        <View
          style={{
            height: windowHeight(10),
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.bookBtn,
              {
                backgroundColor: "#c175ff",
                borderColor: "#c175ff",
                borderWidth: 1,
                marginTop: windowHeight(1),
              },
            ]}
          >
            <Text
              style={[
                styles.bookText,
                {
                  color: "#f9e0ff",
                  fontFamily: "Poppins_600SemiBold",
                },
              ]}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: windowHeight(5) }}>
          <View style={styles.checkboxContainer}>
            <View style={styles.squareLeft}>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate("SignUpCareProvider")}
                  style={{
                    color: "#4c4c4c",
                    marginTop: windowHeight(1.8),
                    textAlign: "right",
                    fontSize: 18,
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  Care Services
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.squareRight}>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate("ForgotUsernamePassword")}
                  style={{
                    color: "#b880f5",
                    marginTop: windowHeight(2.2),
                    textAlign: "right",
                    fontSize: 12,
                    fontFamily: "Poppins_400Regular",
                    marginRight: 10,
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ height: windowHeight(27) }}>
          <View style={[styles.servicesContainer]}>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: 70,
                  height: 60,
                  padding: 12,
                  paddingLeft: 14,
                }}
              >
                <MaterialCommunityIcons
                  name="human"
                  color="#ffffff"
                  size={36}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.description, { marginTop: 10 }]}>Care</Text>
              <Text style={styles.description}>Service 1</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: 70,
                  height: 60,
                  padding: 12,
                  paddingLeft: 14,
                }}
              >
                <MaterialCommunityIcons
                  name="human-wheelchair"
                  color="#ffffff"
                  size={36}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.description, { marginTop: 10 }]}>Care</Text>
              <Text style={styles.description}>Service 2</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: 70,
                  height: 60,
                  padding: 12,
                  paddingLeft: 14,
                }}
              >
                <MaterialCommunityIcons
                  name="bed"
                  color="#ffffff"
                  size={36}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.description, { marginTop: 10 }]}>Care</Text>
              <Text style={styles.description}>Service 3</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: 70,
                  height: 60,
                  padding: 12,
                  paddingLeft: 14,
                }}
              >
                <MaterialCommunityIcons
                  name="hand-heart"
                  color="#ffffff"
                  size={36}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.description, { marginTop: 10 }]}>Care</Text>
              <Text style={styles.description}>Service 4</Text>
            </View>
          </View>
          <View style={styles.servicesContainer}>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: 70,
                  height: 60,
                  padding: 12,
                  paddingLeft: 14,
                }}
              >
                <MaterialCommunityIcons
                  name="human"
                  color="#ffffff"
                  size={36}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.description, { marginTop: 10 }]}>Care</Text>
              <Text style={styles.description}>Service 5</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: 70,
                  height: 60,
                  padding: 12,
                  paddingLeft: 14,
                }}
              >
                <MaterialCommunityIcons
                  name="human-wheelchair"
                  color="#ffffff"
                  size={36}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.description, { marginTop: 10 }]}>Care</Text>
              <Text style={styles.description}>Service 6</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: 70,
                  height: 60,
                  padding: 12,
                  paddingLeft: 14,
                }}
              >
                <MaterialCommunityIcons
                  name="bed"
                  color="#ffffff"
                  size={36}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.description, { marginTop: 10 }]}>Care</Text>
              <Text style={styles.description}>Service 7</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: 70,
                  height: 60,
                  padding: 12,
                  paddingLeft: 14,
                }}
              >
                <MaterialCommunityIcons
                  name="hand-heart"
                  color="#ffffff"
                  size={36}
                  style={{
                    marginLeft: 2,
                  }}
                />
              </TouchableOpacity>
              <Text style={[styles.description, { marginTop: 10 }]}>Care</Text>
              <Text style={styles.description}>Service 8</Text>
            </View>
          </View>
        </View>
        <View style={{ height: windowHeight(6) }}>
          <View style={styles.checkboxContainer}>
            <View style={styles.squareLeft}>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate("SignUpCareProvider")}
                  style={{
                    color: "#4c4c4c",
                    marginTop: windowHeight(1.8),
                    textAlign: "right",
                    fontSize: 18,
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  Nearby Care Specialists
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.squareRight}>
              <TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate("ForgotUsernamePassword")}
                  style={{
                    color: "#b880f5",
                    marginTop: windowHeight(2.2),
                    textAlign: "right",
                    fontSize: 12,
                    fontFamily: "Poppins_400Regular",
                    marginRight: 10,
                  }}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            height: windowHeight(9),
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.bookBtn,
              {
                backgroundColor: "#ffffff",
                borderColor: "#ffffff",
                borderWidth: 1,
                marginTop: windowHeight(1),
              },
            ]}
          ></TouchableOpacity>
        </View>
        <View
          style={{
            height: windowHeight(9),
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.bookBtn,
              {
                backgroundColor: "#ffffff",
                borderColor: "#ffffff",
                borderWidth: 1,
                marginTop: windowHeight(1),
              },
            ]}
          ></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#fbfbfb",
  },
  search: {
    flexDirection: "row",
    marginTop: windowHeight(1),
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  searchInput: {
    textAlign: "center",
    flex: 1,
    marginLeft: -25,
    color: "#7933f3",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  bookBtn: {
    width: "100%",
    height: 65,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bookText: {
    fontSize: 22,
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
    height: windowHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    marginTop: windowHeight(1.8),
  },
  headerText: {
    position: "absolute",
    top: windowHeight(2.5),
    color: "#4B4C4C",
    fontFamily: "Poppins_700Bold",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
  },
  nextBtn: {
    width: "100%",
    height: windowHeight(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#87c9e4",
    borderColor: "#87c9e4",
    borderWidth: 1,
    marginTop: windowHeight(1.8),
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxContainer2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: Platform.OS === "ios" ? 35 : 25,
  },
  squareLeft: {
    flex: 1,
    alignItems: "flex-start",
  },
  squareRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  square1: {
    flex: Platform.OS === "ios" ? 1 : 0.7,
    alignItems: "center",
  },
  square2: {
    flex: Platform.OS === "ios" ? 2 : 2.3,
    alignItems: "flex-start",
  },
  servicesContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  service: {
    flex: 1,
    alignItems: "center",
  },
  description: {
    fontSize: 12,
    color: "#4c4c4c",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
});
