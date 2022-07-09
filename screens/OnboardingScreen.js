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

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../assets/images/img_onboarding01.png"),
    title: "Effective",
    subtitle:
      "Amet minim moliit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit moliit. Exercitation veniam consequat sunt onstrud amet.",
  },
  {
    id: "2",
    image: require("../assets/images/img_onboarding02.png"),
    title: "Practical",
    subtitle:
      "Amet minim moliit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit moliit. Exercitation veniam consequat sunt onstrud amet.",
  },
  {
    id: "3",
    image: require("../assets/images/img_onboarding03.png"),
    title: "Convenient",
    subtitle:
      "Amet minim moliit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit moliit. Exercitation veniam consequat sunt onstrud amet.",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{
          height: "55%",
          width,
          resizeMode: "contain",
        }}
      />
      <View style={{ marginTop: 45, width: wp("70%") }}>
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
          height: hp("20%"),
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
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
        <View style={{ marginBottom: 30, alignItems: "center" }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 70 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace("Login")}
              >
                <Text
                  style={{ fontWeight: "bold", fontSize: 22, color: "#f9e0ff" }}
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
      <ImageBackground source={BGImage} resizeMode="cover" style={styles.image}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{
            height: hp("80%"),
            paddingTop: hp("12%"),
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
    color: "#4c4c4c",
    fontSize: 15.9,
    marginTop: 15,
    lineHeight: 23,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 15,
    width: 15,
    backgroundColor: "#b1e6f3",
    marginHorizontal: 12,
    borderRadius: 30,
  },
  btn: {
    flex: 1,
    height: 50,
    width: wp("70%"),
    borderRadius: 12,
    backgroundColor: "#782ddb",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OnboardingScreen;
