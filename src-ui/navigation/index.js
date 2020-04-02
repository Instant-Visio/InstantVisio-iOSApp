import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import { HomeStack, SplashStack, DrawerStack } from './Stacks/index';

const RootNavigator = createSwitchNavigator(
  {
    InstantVisio: DrawerStack,
    SplashScreen: SplashStack
  },
  {
    initialRouteName: 'SplashScreen'
  },
);

export default createAppContainer(RootNavigator);
