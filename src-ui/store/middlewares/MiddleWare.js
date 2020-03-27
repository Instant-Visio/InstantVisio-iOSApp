/**
 * Logs all actions and states after they are dispatched.
 */
export const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

/**
 * Crash reports as state is updated and listeners are notified.
 */
export const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.group(action.type);
    console.info('Action', action);
    console.error('Caught an exception!', err);
    console.log('State', store.getState());
    console.groupEnd(action.type);
    throw err;
  }
};

/**
 * promise Middleware
 */
export const promiseMiddleware = store => next => action => {
  
  const { 
    promise, payload, ...rest
  } = action;
  if (promise && payload) {
    const { SUCCESS, FAILURE } = payload;
    promise
      .then(
        result => {
          next({ ...rest, result, type: SUCCESS });
        },
        error => {
          next({ ...rest, error, type: FAILURE });
        }
      );
  }
  return next(action);
};
