import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  ImageBackground,
  Platform,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { LinearGradient } from "expo-linear-gradient";

import { Icon } from "../components";
import { Images, materialTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ProfilePhoto from "../assets/images/test-prof-photo.jpg";

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

export default class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <StatusBar barStyle="dark-content" />
        <Block>
          <ImageBackground
            source={ProfilePhoto}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}
          >
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text
                  color="white"
                  size={28}
                  style={{ paddingBottom: 8, fontFamily: "Poppins_400Regular" }}
                >
                  Nicole Diaz, LPN
                </Text>
                <Block row space="between">
                  <Block row>
                    <Text color="white" size={16} muted style={styles.seller}>
                      Nurse
                    </Text>
                    <Text
                      size={16}
                      color={materialTheme.COLORS.WARNING}
                      style={{ fontFamily: "Poppins_400Regular" }}
                    >
                      4.8{" "}
                      <Icon name="shape-star" family="GalioExtra" size={14} />
                    </Text>
                  </Block>
                  <Block>
                    <Text
                      color={theme.COLORS.MUTED}
                      size={16}
                      style={{ fontFamily: "Poppins_400Regular" }}
                    >
                      <Icon
                        name="map-marker"
                        family="font-awesome"
                        color={theme.COLORS.MUTED}
                        size={16}
                      />
                      {` `} Los Angeles, CA
                    </Text>
                  </Block>
                </Block>
              </Block>
              <LinearGradient
                colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
                style={styles.gradient}
              />
            </Block>
          </ImageBackground>
        </Block>
        <Block style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block row space="between" style={{ padding: theme.SIZES.BASE }}>
              <Block middle>
                <Text
                  size={12}
                  style={{ marginBottom: 8, fontFamily: "Poppins_700Bold" }}
                >
                  36
                </Text>
                <Text
                  color="#979797"
                  size={12}
                  style={{ fontFamily: "Poppins_300Light" }}
                >
                  Test
                </Text>
              </Block>
              <Block middle>
                <Text
                  size={12}
                  style={{ marginBottom: 8, fontFamily: "Poppins_700Bold" }}
                >
                  5
                </Text>
                <Text
                  color="#979797"
                  size={12}
                  style={{ fontFamily: "Poppins_300Light" }}
                >
                  Test
                </Text>
              </Block>
              <Block middle>
                <Text
                  size={12}
                  style={{ marginBottom: 8, fontFamily: "Poppins_700Bold" }}
                >
                  2
                </Text>
                <Text
                  color="#979797"
                  size={12}
                  style={{ fontFamily: "Poppins_300Light" }}
                >
                  Messages
                </Text>
              </Block>
            </Block>
            {/* <Block
              row
              space="between"
              style={{ paddingVertical: 16, alignItems: "baseline" }}
            >
              <Text size={16}>Recently viewed</Text>
              <Text
                size={12}
                color={theme.COLORS.PRIMARY}
                onPress={() => this.props.navigation.navigate("Home")}
              >
                View All
              </Text>
            </Block>
            <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
              <Block row space="between" style={{ flexWrap: "wrap" }}>
                {Images.Viewed.map((img, imgIndex) => (
                  <Image
                    source={{ uri: img }}
                    key={`viewed-${img}`}
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                ))}
              </Block>
            </Block> */}
          </ScrollView>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    // marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom:
    //   Platform.OS === "ios" ? -HeaderHeight * 3.5 : -HeaderHeight * 2.1,
    height: hp("100%"),
    flex: 1,
  },
  profileImage: {
    width: "auto",
    height: "auto",
  },
  profileContainer: {
    width: width,
    height: hp("45%"),
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: "flex-end",
    position: "relative",
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: wp("6%"),
    zIndex: 2,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
    fontFamily: "Poppins_400Regular",
  },
  options: {
    height: hp("55%"),
    position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -wp("4%"),
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: "30%",
    position: "absolute",
  },
});
