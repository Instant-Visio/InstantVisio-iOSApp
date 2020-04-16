import React from "react";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import DrawerItem from './../../../global/components/Socles/Drawer/DrawerItem';
import Menu from './../../../global/components/Socles/Drawer/Menu';
// transition for screens
import transitionConfig from './../../../global/utils/NavAnimTransition';
import {i18nString} from './../../../global/i18n';

// screens
import {MentionLegal,DonneesPersonnelles,AboutUS} from './../../../global/components/screens';
import {HomeStack} from './../../Stacks';

const MentionLegalStack = createStackNavigator({
    MentionLegal: {
      screen: MentionLegal
    }
  },{
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    headerMode: 'none',
    transitionConfig
});

const DonneesPersonnellesStack = createStackNavigator({
    DonneesPersonnelles: {
      screen: DonneesPersonnelles
    }
  },{
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    headerMode: 'none',
    transitionConfig
});

const AboutUSStack = createStackNavigator({
    AboutUS: {
      screen: AboutUS
    }
  },{
    cardStyle: {
      backgroundColor: "#F8F9FE"
    },
    headerMode: 'none',
    transitionConfig
});

// divideru se baga ca si cum ar fi un ecrna dar nu-i nimic duh
const AppStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title={i18nString("MenuHome")} />
        )
      })
    },
    MentionLegal: {
      screen: MentionLegalStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title={i18nString("MenuML")} />
        )
      })
    },
    DonneesPersonnelles: {
      screen: DonneesPersonnellesStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title={i18nString("MenuDP")} />
        )
      })
    },
    AboutUS: {
      screen: AboutUSStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} title={i18nString("MenuUS")} />
        )
      })
    }
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
