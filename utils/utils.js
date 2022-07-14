import { Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export const windowHeight = (percent) => {
  return (percent / 100) * height;
};

export const windowHeightWithHeader = (percent) => {
  const stausbarHeight = Platform.OS === "ios" ? 44 : 0;
  return (percent / 100) * (height - stausbarHeight);
};
