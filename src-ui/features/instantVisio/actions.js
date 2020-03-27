// env Config if needed
import Config from '../../global/config'

// types to use
import { EXAMPLE_TYPE } from './types';

// actions to use
export const exampleAction = () => {
  const resp = {
    type: EXAMPLE_TYPE,
    payload: 'test',
  };
  return resp;
};
