import React from "react";
import {
  StyleSheet,
  StatusBar,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { HeaderHeight } from "../constants/utils";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("window");
import { windowHeightWithHeader } from "../utils/utils";
import girlImage from "../assets/images/img_Avatar01.png";
import boyImage from "../assets/images/img_Avatar03.png";

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
          height: windowHeightWithHeader(9),
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
      <View style={{ paddingLeft: wp("5%"), paddingRight: wp("5") }}>
        <View
          style={{
            height: windowHeightWithHeader(10),
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
                marginTop: windowHeightWithHeader(1.5),
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
        <View style={{ height: windowHeightWithHeader(5) }}>
          <View style={styles.checkboxContainer}>
            <View style={styles.squareLeft}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#4c4c4c",
                    marginTop: windowHeightWithHeader(1.8),
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(2),
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
                  style={{
                    color: "#b880f5",
                    marginTop: windowHeightWithHeader(2.2),
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(1.4),
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
            height: windowHeightWithHeader(28),
            marginTop: windowHeightWithHeader(1),
          }}
        >
          <View style={[styles.servicesContainer]}>
            <View style={styles.serviceLeft}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: "100%",
                  height: windowHeightWithHeader(8.5),
                  paddingTop: windowHeightWithHeader(1.3),
                }}
              >
                <MaterialCommunityIcons
                  name="human"
                  color="#ffffff"
                  size={windowHeightWithHeader(5.5)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.description,
                  { marginTop: windowHeightWithHeader(1) },
                ]}
              >
                Care
              </Text>
              <Text style={styles.description}>Service 1</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: "100%",
                  height: windowHeightWithHeader(8.5),
                  paddingTop: windowHeightWithHeader(1.3),
                }}
              >
                <MaterialCommunityIcons
                  name="human-wheelchair"
                  color="#ffffff"
                  size={windowHeightWithHeader(5.5)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.description,
                  { marginTop: windowHeightWithHeader(1) },
                ]}
              >
                Care
              </Text>
              <Text style={styles.description}>Service 2</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: "100%",
                  height: windowHeightWithHeader(8.5),
                  paddingTop: windowHeightWithHeader(1.3),
                }}
              >
                <MaterialCommunityIcons
                  name="bed"
                  color="#ffffff"
                  size={windowHeightWithHeader(5.5)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.description,
                  { marginTop: windowHeightWithHeader(1) },
                ]}
              >
                Care
              </Text>
              <Text style={styles.description}>Service 3</Text>
            </View>
            <View style={styles.serviceRight}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: "100%",
                  height: windowHeightWithHeader(8.5),
                  paddingTop: windowHeightWithHeader(1.3),
                }}
              >
                <MaterialCommunityIcons
                  name="hand-heart"
                  color="#ffffff"
                  size={windowHeightWithHeader(5.5)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.description,
                  { marginTop: windowHeightWithHeader(1) },
                ]}
              >
                Care
              </Text>
              <Text style={styles.description}>Service 4</Text>
            </View>
          </View>
          <View style={styles.servicesContainer}>
            <View style={styles.serviceLeft}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: "100%",
                  height: windowHeightWithHeader(8.5),
                  paddingTop: windowHeightWithHeader(1.3),
                }}
              >
                <MaterialCommunityIcons
                  name="human"
                  color="#ffffff"
                  size={windowHeightWithHeader(5.5)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.description,
                  { marginTop: windowHeightWithHeader(1) },
                ]}
              >
                Care
              </Text>
              <Text style={styles.description}>Service 5</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: "100%",
                  height: windowHeightWithHeader(8.5),
                  paddingTop: windowHeightWithHeader(1.3),
                }}
              >
                <MaterialCommunityIcons
                  name="human-wheelchair"
                  color="#ffffff"
                  size={windowHeightWithHeader(5.5)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.description,
                  { marginTop: windowHeightWithHeader(1) },
                ]}
              >
                Care
              </Text>
              <Text style={styles.description}>Service 6</Text>
            </View>
            <View style={styles.service}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: "100%",
                  height: windowHeightWithHeader(8.5),
                  paddingTop: windowHeightWithHeader(1.3),
                }}
              >
                <MaterialCommunityIcons
                  name="bed"
                  color="#ffffff"
                  size={windowHeightWithHeader(5.5)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.description,
                  { marginTop: windowHeightWithHeader(1) },
                ]}
              >
                Care
              </Text>
              <Text style={styles.description}>Service 7</Text>
            </View>
            <View style={styles.serviceRight}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#e4caff",
                  borderRadius: 12,
                  width: "100%",
                  height: windowHeightWithHeader(8.5),
                  paddingTop: windowHeightWithHeader(1.3),
                }}
              >
                <MaterialCommunityIcons
                  name="hand-heart"
                  color="#ffffff"
                  size={windowHeightWithHeader(5.5)}
                  style={{
                    textAlign: "center",
                  }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.description,
                  { marginTop: windowHeightWithHeader(1) },
                ]}
              >
                Care
              </Text>
              <Text style={styles.description}>Service 8</Text>
            </View>
          </View>
        </View>
        <View style={{ height: windowHeightWithHeader(6) }}>
          <View style={styles.checkboxContainer}>
            <View style={styles.squareLeft}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "#4c4c4c",
                    marginTop: windowHeightWithHeader(1.8),
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(2),
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
                  style={{
                    color: "#b880f5",
                    marginTop: windowHeightWithHeader(2.2),
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(1.4),
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
      </View>
      <ScrollView
        contentContainerStyle={[
          {
            paddingLeft: wp(5),
            paddingRight: wp(5),
            height: windowHeightWithHeader(30),
          },
        ]}
      >
        <View
          style={{
            height: windowHeightWithHeader(10),
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.listBtn,
              {
                backgroundColor: "#ffffff",
                borderColor: "#ffffff",
                borderWidth: 1,
                marginTop: windowHeightWithHeader(1),
                width: wp(90),
              },
            ]}
          >
            <View style={styles.checkboxContainer}>
              <View style={{ flex: 0.5 }}>
                <Image
                  source={girlImage}
                  style={{}}
                  resizeMode="contain"
                ></Image>
              </View>
              <View style={styles.squareLeft}>
                <Text
                  style={{
                    marginLeft: wp(4),
                    color: "#4c4c4c",
                    textAlign: "left",
                    fontSize: windowHeightWithHeader(1.6),
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  Jessie Clarcson
                </Text>
                <Text
                  style={{
                    marginLeft: wp(4),
                    color: "#4c4c4c",
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(1.5),
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  01 July, 10:00-12:00
                </Text>
              </View>
              <View style={styles.squareRight}>
                <Text
                  style={{
                    color: "#b880f5",
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(1.4),
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color="#b880f5"
                    size={windowHeightWithHeader(1.6)}
                  />{" "}
                  4.7
                </Text>
                <Text
                  style={{
                    color: "#b880f5",
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(1.4),
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker"
                    color="#b880f5"
                    size={windowHeightWithHeader(1.6)}
                  />{" "}
                  1.4km
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: windowHeightWithHeader(10),
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.listBtn,
              {
                backgroundColor: "#ffffff",
                borderColor: "#ffffff",
                borderWidth: 1,
                marginTop: windowHeightWithHeader(2.5),
                width: wp(90),
              },
            ]}
          >
            <View style={styles.checkboxContainer}>
              <View style={{ flex: 0.5 }}>
                <Image
                  source={boyImage}
                  style={{}}
                  resizeMode="contain"
                ></Image>
              </View>
              <View style={styles.squareLeft}>
                <Text
                  style={{
                    marginLeft: wp(4),
                    color: "#4c4c4c",
                    textAlign: "left",
                    fontSize: windowHeightWithHeader(1.6),
                    fontFamily: "Poppins_600SemiBold",
                  }}
                >
                  Jessie Clarcson
                </Text>
                <Text
                  style={{
                    marginLeft: wp(4),
                    color: "#4c4c4c",
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(1.5),
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  01 July, 10:00-12:00
                </Text>
              </View>
              <View style={styles.squareRight}>
                <Text
                  style={{
                    color: "#b880f5",
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(1.4),
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color="#b880f5"
                    size={windowHeightWithHeader(1.6)}
                  />{" "}
                  4.7
                </Text>
                <Text
                  style={{
                    color: "#b880f5",
                    textAlign: "right",
                    fontSize: windowHeightWithHeader(1.4),
                    fontFamily: "Poppins_400Regular",
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker"
                    color="#b880f5"
                    size={windowHeightWithHeader(1.6)}
                  />{" "}
                  1.4km
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
    marginTop: windowHeightWithHeader(2),
    marginBottom: windowHeightWithHeader(1),
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    padding: windowHeightWithHeader(1),
    borderRadius: 30,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 15,
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
    height: windowHeightWithHeader(9),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 10,
    padding: windowHeightWithHeader(2.5),
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  bookText: {
    fontSize: windowHeightWithHeader(2.8),
  },
  listBtn: {
    width: "100%",
    height: windowHeightWithHeader(9),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 10,
    padding: windowHeightWithHeader(1.4),
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
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
    height: windowHeightWithHeader(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    marginTop: windowHeightWithHeader(1.8),
  },
  headerText: {
    position: "absolute",
    top: windowHeightWithHeader(2.5),
    color: "#4B4C4C",
    fontFamily: "Poppins_700Bold",
    marginTop: Platform.OS === "ios" ? HeaderHeight / 1.5 : 0,
  },
  nextBtn: {
    width: "100%",
    height: windowHeightWithHeader(5),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#87c9e4",
    borderColor: "#87c9e4",
    borderWidth: 1,
    marginTop: windowHeightWithHeader(1.8),
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
    flex: 2,
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
  serviceLeft: {
    flex: 1,
    alignItems: "center",
    marginRight: wp(2),
  },
  serviceRight: {
    flex: 1,
    alignItems: "center",
    marginLeft: wp(2),
  },
  service: {
    flex: 1,
    alignItems: "center",
    marginLeft: wp(2),
    marginRight: wp(2),
  },
  description: {
    fontSize: windowHeightWithHeader(1.2),
    color: "#4c4c4c",
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
});
