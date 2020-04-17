import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import { HomeStack, SplashStack, DrawerStack,VisioStack } from './Stacks/index';

const RootNavigator = createSwitchNavigator(
  {
    InstantVisio: DrawerStack,
    SplashScreen: SplashStack,
    VisioScreen: VisioStack
  },
  {
    initialRouteName: 'SplashScreen'
  },
);

export default createAppContainer(RootNavigator);
