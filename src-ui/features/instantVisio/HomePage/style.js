import { StyleSheet } from 'react-native';
import vars from '../../../global/vars';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row'
  },
  bgWhite: {
    backgroundColor: 'white'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  padding: {
    paddingVertical: vars.widthUnit * 3,
    paddingHorizontal: vars.widthUnit * 4,
  },
  text5: {
    fontFamily: vars.RobotoMed,
    fontSize:vars.widthUnit * 5.5,
    color:'white'
  },
  text: {
    fontFamily: vars.RobotoMed,
    fontSize:vars.widthUnit * 8
  },
  ApiModalLoader: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
  }
});
