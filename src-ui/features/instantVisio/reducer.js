import { fromJS } from 'immutable';

// types to use
import { EXAMPLE_TYPE } from './types';

const INITIAL_STATE = fromJS({
  exampleObject: {
    status: ''
  }
});

// update state
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_TYPE:
      return state.withMutations(s => {
        s.setIn(['exampleObject', 'status'], 'status');
      });
    default:
      return state;
  }
};
