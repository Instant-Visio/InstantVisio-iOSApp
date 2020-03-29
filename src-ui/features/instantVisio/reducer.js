import { fromJS } from 'immutable';

import {
  ON_CHANGE
} from './types';

const INITIAL_STATE = fromJS({
  form: {
    Email: '',
    PhoneNumer: '',
    Name : ''
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
