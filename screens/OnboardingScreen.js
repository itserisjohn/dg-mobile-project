import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import BGImage from "../assets/images/bg_onboarding.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
import { windowHeight } from "../utils/utils";

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/img_onboarding01.png"),
    title: "Effective",
    subtitle:
      "Find the right kind of affordable care you need when you need it most.",
  },
  {
    id: "2",
    image: require("../assets/images/img_onboarding02.png"),
    title: "Practical",
    subtitle:
      "Make a difference and good income by providing dependable, high-level care and service to your neighbors in need.",
  },
  {
    id: "3",
    image: require("../assets/images/img_onboarding03.png"),
    title: "Convenient",
    subtitle:
      "Transparency so both care providers and clients set up successful expectations through direct communication and follow-up.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{
          height: windowHeight(40),
          width,
          resizeMode: "contain",
        }}
      />
      <View style={{ marginTop: windowHeight(1), width: wp("70%") }}>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: windowHeight(20),
          justifyContent: "space-between",
          paddingHorizontal: windowHeight(2),
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: windowHeight(2),
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                },
              ]}
            />
          ))}
        </View>
        {/* Render buttons */}
        <View style={{ marginBottom: windowHeight(3), alignItems: "center" }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: windowHeight(10) }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace("Login")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: windowHeight(3.5),
                    color: "#f9e0ff",
                  }}
                >
                  Let's Get Started
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}></View>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <ImageBackground
        source={BGImage}
        resizeMode="stretch"
        style={styles.image}
      >
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{
            height: windowHeight(80),
            paddingTop: windowHeight(12),
          }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} />}
        />
        <Footer />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    textAlign: "center",
    color: "#4c4c4c",
    fontSize: windowHeight(1.8),
    marginTop: windowHeight(1.5),
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: windowHeight(3),
    fontWeight: "bold",
    marginTop: windowHeight(2),
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: windowHeight(1.5),
    width: windowHeight(1.5),
    backgroundColor: "#b1e6f3",
    marginHorizontal: 12,
    borderRadius: 30,
  },
  btn: {
    flex: 1,
    height: windowHeight(5),
    width: wp("70%"),
    borderRadius: 12,
    backgroundColor: "#782ddb",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
