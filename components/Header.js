import React from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  View,
} from "react-native";
import { Button, Block, NavBar, Input, Text, theme } from "galio-framework";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "./Icon";
import materialTheme from "../constants/Theme";
import { HeaderHeight } from "../constants/utils";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);
import { windowHeight } from "../utils/utils";

const ChatButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button]}>
    <MaterialCommunityIcons name="bell-outline" color="#8734f7" size={32} />
    <Block middle style={styles.notify}></Block>
  </TouchableOpacity>
);

const ScheduledButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button]}>
    <MaterialCommunityIcons
      name="calendar-multiselect"
      color="#8734f7"
      size={32}
      style={{ marginTop: 1 }}
    />
  </TouchableOpacity>
);

const PendingButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button]}>
    <MaterialCommunityIcons
      name="calendar-clock"
      color="#4B4C4C"
      size={windowHeight(2.62)}
    />
    <Block middle style={styles.notify}>
      <Text color="#ffffff" size={12}>
        6
      </Text>
    </Block>
  </TouchableOpacity>
);

const OnDemandButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button]}>
    <MaterialCommunityIcons
      name="alert-decagram"
      color={materialTheme.COLORS.LABEL}
      size={windowHeight(2.62)}
    />
    <Block middle style={styles.notify}>
      <Text color="#ffffff" size={12}>
        8
      </Text>
    </Block>
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  renderLeft = () => {
    const { white, title, navigation } = this.props;

    return [
      <ScheduledButton key="scheduled" isWhite={white} />,
      <ChatButton key="chat" isWhite={white} />,
    ];
  };

  renderRight2 = () => {
    const { white, title, navigation } = this.props;

    return [
      <ScheduledButton key="scheduled" isWhite={white} />,
      <ChatButton key="chat" isWhite={white} />,
    ];
  };

  renderRight = () => {
    const { white, title, navigation } = this.props;

    return (
      <View style={styles.checkboxContainer}>
        <View style={styles.square1}></View>
        <View style={styles.square2}>
          <TouchableOpacity style={[styles.button]}>
            <MaterialCommunityIcons
              name="calendar-multiselect"
              color="#8734f7"
              size={windowHeight(3.4)}
              style={{ marginTop: 1 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.square2}>
          <TouchableOpacity style={[styles.button]}>
            <MaterialCommunityIcons
              name="bell-outline"
              color="#8734f7"
              size={windowHeight(3.4)}
            />
            <Block middle style={styles.notify}></Block>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        onFocus={() => navigation.navigate("Pro")}
        iconContent={
          <Icon
            size={16}
            color={theme.COLORS.MUTED}
            name="magnifying-glass"
            family="entypo"
          />
        }
      />
    );
  };

  renderTabs = () => {
    const { navigation, tabTitleLeft, tabTitleRight } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button
          shadowless
          style={[styles.tab, styles.divider]}
          onPress={() => navigation.navigate("Pro")}
        >
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>
              {tabTitleLeft || "Test Text"}
            </Text>
          </Block>
        </Button>
        <Button
          shadowless
          style={styles.tab}
          onPress={() => navigation.navigate("Pro")}
        >
          <Block row middle>
            <Icon
              size={16}
              name="camera-18"
              family="GalioExtra"
              style={{ paddingRight: 8 }}
            />
            <Text size={16} style={styles.tabTitle}>
              {tabTitleRight || "Test Text"}
            </Text>
          </Block>
        </Button>
      </Block>
    );
  };

  renderHeader = () => {
    const { search, tabs } = this.props;
    if (search || tabs) {
      return <Block center></Block>;
    }
    return null;
  };

  render() {
    const { back, title, white, transparent, navigation } = this.props;
    // const { routeName } = navigation.state;
    const noShadow = [
      "Search",
      "Categories",
      "Deals",
      "Pro",
      "Profile",
    ].includes(title);
    const headerStyles = [
      !noShadow ? null : null,
      { backgroundColor: "#fbfbfb" },
      { marginTop: Platform.OS === "android" ? -(HeaderHeight / 2.5) : 0 },
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={back}
          title={""}
          style={styles.navbar}
          right={this.renderRight()}
          rightStyle={{
            alignItems: "flex-end",
          }}
          leftStyle={{ paddingTop: 2 }}
          leftIconName={back ? "chevron-left" : "navicon"}
          leftIconColor="#8734f7"
          leftIconSize={windowHeight(3.4)}
          titleStyle={[
            styles.title,
            { color: theme.COLORS[white ? "WHITE" : "ICON"] },
          ]}
          onLeftPress={this.handleLeftPress}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  button: {
    height: windowHeight(5),
    width: windowHeight(5),
    position: "relative",
    marginBottom: -2,
    marginRight: 5,
  },
  title: {
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 2,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4.5 : theme.SIZES.BASE * 1.5,
    zIndex: 5,
    marginRight: -3,
    backgroundColor: "#fbfbfb",
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: "#ae78f9",
    borderRadius: 9,
    height: theme.SIZES.BASE * 0.8,
    width: theme.SIZES.BASE * 0.8,
    position: "absolute",
    top: 0,
    right: 5,
    paddingLeft: 1,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
  header: {
    backgroundColor: "#fbfbfb",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("80%"),
    paddingTop: 15,
  },
  square1: {
    flex: 4,
    alignItems: "flex-start",
  },
  square2: {
    flex: 1,
    alignItems: "flex-end",
  },
});
