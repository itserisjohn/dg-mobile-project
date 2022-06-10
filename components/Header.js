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
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("Pro")}
  >
    <Icon
      family="GalioExtra"
      size={hp("4.5%")}
      name="chat-33"
      color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
    />
    <Block middle style={styles.notify}>
      <Text color="#ffffff" size={12}>
        3
      </Text>
    </Block>
  </TouchableOpacity>
);

const ScheduledButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("Pro")}
  >
    <MaterialCommunityIcons
      name="calendar-check"
      color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
      size={hp("4.5%")}
    />
    <Block middle style={styles.notify}>
      <Text color="#ffffff" size={12}>
        5
      </Text>
    </Block>
  </TouchableOpacity>
);

const PendingButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("Pro")}
  >
    <MaterialCommunityIcons
      name="calendar-clock"
      color={theme.COLORS[isWhite ? "WHITE" : "ICON"]}
      size={hp("4.5%")}
    />
    <Block middle style={styles.notify}>
      <Text color="#ffffff" size={12}>
        6
      </Text>
    </Block>
  </TouchableOpacity>
);

const OnDemandButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("Pro")}
  >
    <MaterialCommunityIcons
      name="alert-decagram-outline"
      color="#ff0000"
      size={hp("4.5%")}
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
      <OnDemandButton key="ondemand" navigation={navigation} isWhite={white} />,
      <PendingButton key="pending" navigation={navigation} isWhite={white} />,
      <ScheduledButton
        key="scheduled"
        navigation={navigation}
        isWhite={white}
      />,
      <ChatButton key="chat" navigation={navigation} isWhite={white} />,
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
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: "rgba(0,0,0,0)" } : null,
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
          leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
          leftIconSize={32}
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
    padding: 12,
    position: "relative",
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
    paddingRight: 75,
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
    top: 8,
    right: 6,
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
