import React, { useState } from "react";
import { Platform, StatusBar, Image } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { Images, products, materialTheme } from "./constants/";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./navigation/Screens";
import * as NavigationBar from "expo-navigation-bar";

import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

// cache app images
const assetImages = [Images.Pro, Images.Profile, Images.Avatar, Images.Login];

// cache product images
products.map((product) => assetImages.push(product.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default function App() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  NavigationBar.setVisibilityAsync("hidden");

  let [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
  });

  const loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  const handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  const handleFinishLoading = () => {
    setIsLoadingComplete(true);
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <GalioProvider theme={materialTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  }
}
