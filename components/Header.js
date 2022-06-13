import React from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
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

const ChatButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button]}>
    <Icon
      family="GalioExtra"
      size={hp("2.62%")}
      name="chat-33"
      color="#ffffff"
    />
    <Block middle style={styles.notify}>
      <Text color="#ffffff" size={12}>
        3
      </Text>
    </Block>
  </TouchableOpacity>
);

const ScheduledButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button]}>
    <MaterialCommunityIcons
      name="calendar-check"
      color="#ffffff"
      size={hp("2.62%")}
    />
    <Block middle style={styles.notify}>
      <Text color="#ffffff" size={12}>
        5
      </Text>
    </Block>
  </TouchableOpacity>
);

const PendingButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button]}>
    <MaterialCommunityIcons
      name="calendar-clock"
      color="#ffffff"
      size={hp("2.62%")}
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
      size={hp("2.62%")}
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

  renderRight = () => {
    const { white, title, navigation } = this.props;

    return [
      <OnDemandButton key="ondemand" isWhite={white} />,
      <PendingButton key="pending" isWhite={white} />,
      <ScheduledButton key="scheduled" isWhite={white} />,
      <ChatButton key="chat" isWhite={white} />,
    ];
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
      !transparent ? { backgroundColor: "rgba(0,0,0,0)" } : null,
      { marginTop: Platform.OS === "android" ? -(HeaderHeight / 2.5) : 0 },
    ];

    return (
      <Block style={headerStyles}>
        <NavBar
          back={back}
          title={""}
          style={styles.navbar}
          transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: "flex-end" }}
          leftStyle={{ flex: 0.3, paddingTop: 2 }}
          leftIconName={back ? "chevron-left" : "navicon"}
          leftIconColor="#ffffff"
          leftIconSize={hp("3.4%")}
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
    backgroundColor: "rgba(152, 224, 253, 0.5)",
    height: hp("4.5%"),
    width: hp("4.5%"),
    borderRadius: hp("2.25%"),
    padding: hp("1%"),
    position: "relative",
    marginBottom: 8,
    marginRight: wp("3%"),
  },
  title: {
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
  },
  navbar: {
    backgroundColor: "#87c9e4",
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 2,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4.5 : theme.SIZES.BASE * 1.5,
    zIndex: 5,
    paddingRight: hp("8sdf%"),
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
    backgroundColor: materialTheme.COLORS.LABEL,
    borderRadius: 9,
    height: theme.SIZES.BASE * 1.1,
    width: theme.SIZES.BASE * 1.1,
    position: "absolute",
    top: 0,
    right: 0,
    paddingLeft: 1,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
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
});
