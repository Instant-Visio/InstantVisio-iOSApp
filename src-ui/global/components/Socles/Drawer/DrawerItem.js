import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, theme , Icon} from "./../../Socles";
import {i18nString} from './../../../../global/i18n';

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case i18nString("MenuHome"):
        return (
          <Icon
            name="home"
            family="ArgonExtra"
            size={30}
            color={focused ? "white" : theme.COLORS.WARNING}
          />
        );
      case i18nString("MenuML"):
        return (
          <Icon
            name="legal"
            family="font-awesome"
            size={30}
            color={focused ? "white" : theme.COLORS.WARNING}
          />
        );
      case i18nString("MenuDP"):
        return (
          <Icon
            name="database"
            family="foundation"
            size={30}
            color={focused ? "white" : theme.COLORS.WARNING}
          />
        );
      case i18nString("MenuUS"):
        return (
          <Icon
            name="info-with-circle"
            family="entypo"
            size={30}
            color={focused ? "white" : theme.COLORS.WARNING}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { focused, title } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <Block flex row style={containerStyles}>
        <Block middle flex={0.13} style={{ marginRight: 5 }}>
          {this.renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text
            size={17}
            bold={focused ? true : false}
            color={focused ? "white" : "rgba(0,0,0,0.5)"}
          >
            {title}
          </Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14
  },
  activeStyle: {
    backgroundColor: theme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;