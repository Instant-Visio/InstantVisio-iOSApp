import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunkMiddleware from 'redux-thunk';
import ApiMiddleware from './middlewares/MiddleWareAPI';
import { /*logger, crashReporter,*/ promiseMiddleware } from './middlewares/MiddleWare';

// import combineReducer here
import reducers from './combineReducer';

let middlewares = [ReduxThunkMiddleware, ApiMiddleware, promiseMiddleware];

if (process.env.NODE_ENV !== 'production' && process.env.TEST !== true) {
  middlewares = [...middlewares/*, logger, crashReporter */];
}

/* eslint-disable no-underscore-dangle, function-paren-newline */
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
  :
  compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
  // add other store enhancers if any
);
/* eslint-enable */

export default createStore(
  reducers, 
  enhancer
);
