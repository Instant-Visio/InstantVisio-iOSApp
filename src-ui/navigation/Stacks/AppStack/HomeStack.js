import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// transition for screens
import transitionConfig from './../../../global/utils/NavAnimTransition';
// header for screens
import {Header} from '../../../global/components/Socles';

// screens
import {HomePage} from './../../../global/components/screens';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomePage,
    }
  },
  {
    cardStyle: {
      backgroundColor: '#F8F9FE',
    },
    transitionConfig,
    headerMode: 'none'    
  },
);

export default createAppContainer(HomeStack);
