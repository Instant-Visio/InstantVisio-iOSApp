import {StyleSheet} from 'react-native';
import vars from './../../../../global/vars';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding: {
    paddingVertical: vars.widthUnit * 3,
    paddingHorizontal: vars.widthUnit * 4,
  },
  text5: {
    fontFamily: vars.RobotoMed,
    fontSize: vars.widthUnit * 5.5,
    color: 'white',
  },
  text: {
    fontFamily: vars.RobotoMed,
    fontSize: vars.widthUnit * 8,
  },

  container: {
    flex: 1,
    backgroundColor: '#a1a1a1',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  input: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#a1a1a1',
  },
  itemStyle: {
    marginBottom: 10,
  },
  iconStyle: {
    color: '#fff',
    fontSize: 28,
    marginLeft: 15,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#a1a1a1',
    padding: 14,
    marginBottom: 10,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textStyle: {
    padding: 5,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  countryStyle: {
    flex: 1,
    backgroundColor: '#a1a1a1',
    borderTopColor: '#211f',
    borderTopWidth: 1,
    padding: 12,
  },
  closeButtonStyle: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#5edef7',
  },
});
