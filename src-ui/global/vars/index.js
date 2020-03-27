import { Dimensions, Platform } from 'react-native';

export default {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',

  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,

  widthUnit: Dimensions.get('window').width / 100,
  heightUnit: Dimensions.get('window').height / 100,

  RobotoBold: 'fa-regular-400',
  RobotoMed: 'VINCHAND',
  FFF:'FFF_Tusj',
  RobotoReg: 'Roboto-Regular',
  RobotoLight: 'Roboto-Light',

  
  defaultHitSlop: { 
    top: 20, bottom: 20, right: 20, left: 20
  },

  mainColor: '#ffffff',

  backgroundColor: {
    activeColor: '#000000',
    inactiveColor: '#ffffff',
  },

  textInputColor: {
  activeColor: '#ffffff',
  inactiveColor: '#000000',

  backgroundColorHeader: 'blue'
},

  //Input Label + Placeholder
  colorGrey:'#878787',

};
