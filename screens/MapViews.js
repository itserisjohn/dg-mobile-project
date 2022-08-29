import * as React from "react";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../environment";

const MapViews = () => {
  // const { width, height } = Dimensions.get("window");
  const [pin, setPin] = React.useState({
    latitude: 37.7846321,
    longitude: -122.4313039,
  });
  const [region, setRegion] = React.useState({
    latitude: 37.7846321,
    longitude: -122.4313039,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      
    })();
  }, []);

  // const ASPECT_RATIO = width / height;
  // const LATITUDE_DELTA = 0.02;
  // const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
  // const INITIAL_POSITION = {
  //   latitude: 40.76711,
  //   longitude: -73.979704,
  //   latitudeDelta: LATITUDE_DELTA,
  //   longitudeDelta: LONGITUDE_DELTA,
  // };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.7846321,
          longitude: -122.4313039,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          console.log("onUserLocationChange", e.nativeEvent.coordinate);

          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          pinColor="yellow"
        />
        <Marker
          coordinate={pin}
          draggable={true}
          pinColor="red"
          onDragStart={(e) => {
            console.log("Drag Start", e.nativeEvent.coordinate);
          }}
          onDragEnd={(e) => {
            console.log("Drag End", e.nativeEvent.coordinate);

            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
        >
          <Callout>
            <Text>This is a Callout</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={300} />
      </MapView>

      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          style={{ textInput: styles.input }}
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesSearchQuery={{
            rankby: "distance",
          }}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
          }}
          query={{
            key: GOOGLE_API_KEY,
            language: "en",
            components: "country:us",
            types: "establishment",
            radius: 3000,
            locations: `${region.latitude}, ${region.longitude}`,
          }}
        />
      </View>
    </View>
  );
};

export default MapViews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  inputLocation: {
    borderBottomColor: "#888",
    borderWidth: 1,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  input: {
    borderBottomColor: "#888",
    borderWidth: 1,
  },
});
