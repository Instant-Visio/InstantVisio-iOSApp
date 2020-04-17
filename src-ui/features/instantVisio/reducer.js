import { fromJS } from 'immutable';

import {
  ON_CHANGE
} from './types';

const INITIAL_STATE = fromJS({
  form: {
    Email: '',
    PhoneNumer: '',
    Name : '',
    countrySelected:{
      name:"France",
      flag:"🇫🇷",
      code:"FR",
      dial_code:"+33"
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
