import React, { useEffect } from "react";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import * as Animatable from "react-native-animatable";
import {
  windowHeight,
  windowHeightFull,
  windowHeightWithHeader,
} from "../utils/utils";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import Icon from "../components/Icon";

const MapViews = ({ route, navigation }) => {
  const { width, height } = Dimensions.get("window");
  const [pin, setPin] = React.useState({
    latitude: 0,
    longitude: 0,
  });
  const [region, setRegion] = React.useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [userInfo, setUserInfo] = React.useState({});
  const [accountInfo, setAccountInfo] = React.useState({});
  const [address, setAddress] = React.useState({});
  const [currentAddress, setCurrentAddress] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const confirmLocation = () => {
    {
      currentAddress;
    }
    navigation.navigate({
      name: "CareProvider3Screen",
      params: {
        account_info: accountInfo,
        user_info: userInfo,
        address: address,
        currentAddress: currentAddress,
      },
    });
  };

  const getLocation = async () => {
    setIsLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync();

    const place = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    if (place) {
      setIsLoading(false);
      setCurrentAddress(place);
    }

    const ASPECT_RATIO = width / height;
    const LATITUDE_DELTA = 0.02;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    setPin({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  useEffect(() => {
    if (route) {
      if (route.params?.user_info) {
        setUserInfo(route.params.user_info);
      }
      if (route.params?.account_info) {
        setAccountInfo(route.params.account_info);
      }
      if (route.params?.address) {
        setAddress(route.params.address);
      }
    }
  }, [route]);

  React.useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          height: windowHeightWithHeader(20),
        }}
      >
        {isLoading ? (
          <ActivityIndicator
            size="large"
            style={{ marginTop: windowHeightWithHeader(45) }}
            color="#0000ff"
          />
        ) : (
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={region}
            initialRegion={{
              latitude: region.latitude,
              longitude: region.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            onUserLocationChange={(e) => {
              setPin({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
          >
            <Marker coordinate={pin} draggable={true} pinColor="red">
              <Callout></Callout>
            </Marker>
            <Circle center={pin} radius={1300} />
          </MapView>
        )}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() =>
            navigation.navigate("CareProvider3Screen", {
              account_info: accountInfo,
              user_info: userInfo,
              address: address,
            })
          }
        >
          <Icon
            size={22}
            name="arrow-left"
            family="feather"
            color={"#DCDCDC"}
          />
        </TouchableOpacity>
      </View>
      {isLoading ? null : (
        <Animatable.View animation="fadeInUpBig">
          <View style={styles.action}>
            <View style={styles.purpleShape}></View>
            <Icon
              size={33}
              name="location-on"
              family="materialicons"
              color={"#6B24AA"}
              style={styles.LocationIcon}
            />
            <View style={styles.fadeUp}>
              <Text style={styles.locText}>Is this your location?</Text>

              <Text style={styles.locText2}>
                Your current location will be diplayed on the map
              </Text>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={confirmLocation}
                style={[
                  styles.signIn,
                  {
                    backgroundColor: "#782ddb",
                    borderColor: "#782ddb",
                    borderWidth: 1,
                    marginTop: windowHeight(-2),
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      position: "absolute",
                      color: "#ffffff",
                      fontFamily: "Poppins_600SemiBold",
                      paddingLeft: windowHeightWithHeader(1.5),
                    },
                  ]}
                >
                  Confirm Location
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      )}
    </View>
  );
};

export default MapViews;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    backgroundColor: "#9CC0F9",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginRight: 40,
  },
  backBtn: {
    position: "absolute",
    alignItems: "flex-start",
    width: 55,
    height: 53,
    marginLeft: wp("3.5%"),
    padding: 15,
    borderRadius: 12,
    backgroundColor: "#6B24AA",
    borderColor: "#6B24AA",
    marginTop: Platform.OS == "ios" ? 44 : 22,
  },
  action: {
    flexDirection: "row",
    marginTop: windowHeight(50),
    padding: 0,
    borderRadius: 20,
    backgroundColor: "#ffffff",
    height: windowHeightFull(35),
    width: "100%",
    marginRight: wp("10%"),
  },
  purpleShape: {
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#6B24AA",
    backgroundColor: "#6B24AA",
    borderRadius: 20,
    marginTop: 8,
    paddingTop: 6,
    paddingBottom: 1,
    marginLeft: wp("35%"),
    width: windowHeightFull(14),
    height: 1,
  },
  fadeUp: {
    justifyContent: "center",
    alignItems: "center",
    width: windowHeightWithHeader(41.7),
    paddingRight: wp(25),
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 40,

    height: windowHeightFull(20),
  },
  button: {
    alignItems: "center",
    marginTop: windowHeight(1),
  },
  locText: {
    position: "relative",
    marginTop: windowHeightWithHeader(5),
    marginBottom: windowHeightWithHeader(1),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    fontSize: windowHeight(1.8),
    paddingRight: windowHeightWithHeader(7),
    fontFamily: "Poppins_700Bold",
  },
  locText2: {
    marginBottom: windowHeightWithHeader(10),
    color: "#4B4C4C",
    textAlign: "left",
    fontFamily: "Poppins_400Regular",
    fontSize: windowHeight(1.5),
    paddingRight: windowHeightWithHeader(2),
    padding: 0,
    marginRight: 21,
  },
  LocationIcon: {
    paddingTop: 30,
    paddingLeft: 25,
    marginLeft: 30,
    marginBottom: windowHeightWithHeader(20),
    marginTop: 50,

    // borderWidth: 1,
    // borderColor: "red",
  },
  button: {
    position: "absolute",
    width: 40,
    alignItems: "center",
    marginBottom: windowHeight(15),
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: wp("47%"),
    marginLeft: windowHeightFull(15),
    padding: 15,
  },
  signIn: {
    width: "100%",
    height: windowHeight(1),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 6,
    paddingTop: 25,
    paddingBottom: 25,
    marginLeft: wp("26.5%"),
    width: windowHeightFull(43),
    height: 5,
  },
  textSign: {
    fontSize: 20,
  },
});
