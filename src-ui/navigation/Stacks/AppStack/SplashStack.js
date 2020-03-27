import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// transition for screens
import transitionConfig from './../../../global/utils/NavAnimTransition';
// header for screens
import {Header} from '../../../global/components/Socles';

// screens
import {SplashScreen} from './../../../global/components/screens';

const SplashStack = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    }
  },
  {
    cardStyle: {
      backgroundColor: '#F8F9FE',
    },
    headerMode: 'none'
  },
);

export default createAppContainer(SplashStack);
