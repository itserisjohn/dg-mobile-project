import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const windowHeight = (percent: Number) => {
  return (percent / 100) * height;
};
