import { Animated, Dimensions, Easing, Image, Platform } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Header, Icon } from "../components";
import { Images, materialTheme } from "../constants/";
import { windowHeight } from "../utils/utils";
import ComponentsScreen from "../screens/Components";
import CustomDrawerContent from "./Menu";
import HomeScreen from "../screens/Home";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/Login";
import ProScreen from "../screens/Pro";
import ProfileScreen from "../screens/Profile";
import React from "react";
import SettingsScreen from "../screens/Settings";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CareProvider1Screen from "../screens/SignUp/CareProvider1";
import CareProvider2Screen from "../screens/SignUp/CareProvider2";
import CareProvider3Screen from "../screens/SignUp/CareProvider3";
import CareProvider4Screen from "../screens/SignUp/CareProvider4";
import ReviewAccountScreen from "../screens/SignUp/ReviewAccount";
import CreateAccountScreen from "../screens/SignUp/CreateAccount";
import ChecklistEmptyScreen from "../screens/SignUp/ChecklistEmpty";
import LegalWaiverScreen from "../screens/SignUp/LegalWaiver";
import ChooseAccountScreen from "../screens/SignUp/ChooseAccount";
import CheckListScreen from "../screens/SignUp/Checklist";
import PaymentInfoScreen from "../screens/SignUp/PaymentInfo";
import AddCreditCardScreen from "../screens/SignUp/AddCreditCard";
import CheckList2Screen from "../screens/SignUp/Checklist2";
import OtherInformationScreen from "../screens/SignUp/OtherInformation";
import AddCareRecipientScreen from "../screens/SignUp/AddCareRecipient";
import CareRecipientInfoScreen from "../screens/SignUp/CareRecipientInfo";
import OtherInformationCRScreen from "../screens/SignUp/OtherInformationCR";
import OtherInformationCR2Screen from "../screens/SignUp/OtherInformationCR2";
import CheckList3Screen from "../screens/SignUp/Checklist3";
import ServicePreferenceScreen from "../screens/SignUp/ServicePreference";
import Checklist4Screen from "../screens/SignUp/Checklist4";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ForgotUsernamePasswordScreen from "../screens/ForgotUsernamePassword/ForgotUsernamePassword";
import ForgotUsernameScreen from "../screens/ForgotUsernamePassword/ForgotUsername";
import ForgotUsernameCodeScreen from "../screens/ForgotUsernamePassword/ForgotUsernameCode";
import ForgotUsernameSentScreen from "../screens/ForgotUsernamePassword/ForgotUsernameSent";
import ForgotPasswordScreen from "../screens/ForgotUsernamePassword/ForgotPassword";
import ForgotPasswordCodeScreen from "../screens/ForgotUsernamePassword/ForgotPasswordCode";
import ForgotPasswordResetScreen from "../screens/ForgotUsernamePassword/ForgotPasswordReset";
import ForgotPasswordUpdatedScreen from "../screens/ForgotUsernamePassword/ForgotPasswordUpdated";

const { width } = Dimensions.get("screen");

const HomeStack = createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

function HomeStackScreen(props) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        mode: "card",
        headerShown: "screen",
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              search
              tabs
              title="HomeScreen"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

function TabMenus(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#87c9e4",
        tabBarInactiveTintColor: "#4B4C4C",
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          marginBottom: -10,
          fontWeight: "700",
        },
        tabBarStyle: {
          height: windowHeight(9),
          // position: 'absolute',
          backgroundColor: "#e5c9ff",
          // borderRadius: 50,
          // bottom: 20,
          // marginHorizontal: 16
        },
      }}
    >
      <Tab.Screen
        name=" "
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                size={windowHeight(4)}
                color="#8432ee"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="  "
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "calendar" : "calendar-outline"}
                size={windowHeight(4)}
                color="#8432ee"
                style={{ marginTop: focused ? 3 : 0 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="   "
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "account-circle" : "account-circle-outline"}
                size={windowHeight(4)}
                color="#8432ee"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
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
        backgroundColor: "#ffffff",
        width: width * 0.8,
      }}
      screenOptions={{
        headerShown: false,
        activeTintColor: "#ffffff",
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
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen
        name="HomeScreen"
        component={TabMenus}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="shop"
              family="GalioExtra"
              color={focused ? "#ffffff" : materialTheme.COLORS.MUTED}
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
              color={focused ? "#ffffff" : materialTheme.COLORS.MUTED}
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
      initialRouteName="Onboarding"
      screenOptions={{
        mode: "card",
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="ForgotUsernamePassword"
        component={ForgotUsernamePasswordScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotUsername"
        component={ForgotUsernameScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotUsernameCode"
        component={ForgotUsernameCodeScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotUsernameSent"
        component={ForgotUsernameSentScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordCode"
        component={ForgotPasswordCodeScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordReset"
        component={ForgotPasswordResetScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordUpdated"
        component={ForgotPasswordUpdatedScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        option={{
          headerTransparent: true,
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
      initialRouteName="CreateAccountScreen"
      screenOptions={{
        mode: "card",
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
        option={{
          headerTransparent: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="LegalWaiverScreen"
        component={LegalWaiverScreen}
        option={{
          headerTransparent: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="ChecklistEmptyScreen"
        component={ChecklistEmptyScreen}
        option={{
          headerTransparent: false,
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="CareProvider1Screen"
        component={CareProvider1Screen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="CareProvider2Screen"
        component={CareProvider2Screen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="CareProvider3Screen"
        component={CareProvider3Screen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="CareProvider4Screen"
        component={CareProvider4Screen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="ReviewAccountScreen"
        component={ReviewAccountScreen}
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
        name="AddCareRecipientScreen"
        component={AddCareRecipientScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="CareRecipientInfoScreen"
        component={CareRecipientInfoScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="OtherInformationCRScreen"
        component={OtherInformationCRScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="OtherInformationCR2Screen"
        component={OtherInformationCR2Screen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="CheckList3Screen"
        component={CheckList3Screen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="ServicePreferenceScreen"
        component={ServicePreferenceScreen}
        option={{
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="Checklist4Screen"
        component={Checklist4Screen}
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
