import { Animated, Dimensions, Easing } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Header, Icon } from "../components";
import { Images, materialTheme } from "../constants/";

import ComponentsScreen from "../screens/Components";
import CustomDrawerContent from "./Menu";
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import ProScreen from "../screens/Pro";
import ProfileScreen from "../screens/Profile";
import React from "react";
import SettingsScreen from "../screens/Settings";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpCareProviderScreen from "../screens/SignUp/CareProvider";
import LegalWaiverScreen from "../screens/SignUp/LegalWaiver";
import ChooseAccountScreen from "../screens/SignUp/ChooseAccount";
import CheckListScreen from "../screens/SignUp/Checklist";
import PaymentInfoScreen from "../screens/SignUp/PaymentInfo";
import AddCreditCardScreen from "../screens/SignUp/AddCreditCard";
import CheckList2Screen from "../screens/SignUp/Checklist2";
import OtherInformationScreen from "../screens/SignUp/OtherInformation";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: Images.Profile,
  name: "Nicole Diaz, LPN",
  type: "Nurse",
  plan: "Pro",
  rating: 4.8,
};

function ProfileStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Profile"
              scene={scene}
              navigation={navigation}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Settings" scene={scene} navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              tabs
              title="Home"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      screenOptions={{
        headerShown: false,
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="shop"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="circle-10"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="gears"
              family="font-awesome"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: -3 }}
            />
          ),
        }}
      />
      <Drawer.Screen name="Sign In" component={LoginStack} />
      <Drawer.Screen name="Sign Up" component={LoginStack} />
    </Drawer.Navigator>
  );
}

export default function LoginStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="SignUpCareProvider"
        component={SignUpCareProviderStack}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}

function SignUpCareProviderStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="LegalWaiverScreen"
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="LegalWaiverScreen"
        component={LegalWaiverScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="SignUpCareProviderScreen"
        component={SignUpCareProviderScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="ChooseAccountScreen"
        component={ChooseAccountScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="CheckListScreen"
        component={CheckListScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="PaymentInfoScreen"
        component={PaymentInfoScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="AddCreditCardScreen"
        component={AddCreditCardScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="CheckList2Screen"
        component={CheckList2Screen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="OtherInformationScreen"
        component={OtherInformationScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="Back Login"
        component={LoginStack}
        option={{
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
