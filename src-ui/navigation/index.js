import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import { HomeStack, SplashStack } from './Stacks/index';

const RootNavigator = createSwitchNavigator(
  {
    InstantVisio: HomeStack,
    SplashScreen: SplashStack
  },
  {
    initialRouteName: 'SplashScreen'
  },
);

export default createAppContainer(RootNavigator);
