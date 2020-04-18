import { fromJS } from 'immutable';
import * as RNLocalize from "react-native-localize";
import data from './../../global/static/data.json';

const locales = RNLocalize.getLocales();
const country= data.find(item=>item.code==locales[0].countryCode);

import {
  ON_CHANGE
} from './types';

const INITIAL_STATE = fromJS({
  form: {
    Email: '',
    PhoneNumer: '',
    Name : '',
    countrySelected:{
      name:country.name,
      flag:country.flag,
      code:country.code,
      dial_code:country.dial_code
   },
    modalVisible:false
  },
  visio: {
    videoCallId:''
  }
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ON_CHANGE:
      return state.withMutations(s => {
        s.setIn(action.keyStore, action.value);
      });


    default:
      return state;
  }
};
