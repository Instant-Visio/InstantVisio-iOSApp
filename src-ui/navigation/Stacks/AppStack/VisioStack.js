import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// transition for screens
import transitionConfig from './../../../global/utils/NavAnimTransition';

// screens
import {VisioPage} from './../../../global/components/screens';

const VisioStack = createStackNavigator(
  {
    Visio: {
      screen: VisioPage,
    }
  },
  {
    cardStyle: {
      backgroundColor: '#F8F9FE',
    },
    transitionConfig,
    headerMode: 'none',
    initialRouteName: 'Visio'    
  }
);

export default createAppContainer(VisioStack);
