import { getData } from '../../global/utils/LocalStorageIO';
import request from 'superagent';


async function call(meta) {
  const method = meta.API_METHOD ? meta.API_METHOD : 'GET';

  const URL = meta.API_CALL;

  let req = request(method, URL);


  if (meta.API_PAYLOAD) {
    req = req.send(meta.API_PAYLOAD);
  }
  if (meta.API_QUERY) {
    req.query(meta.API_QUERY);
  }
  return req;
}


export default store => next => action => {

  if (action.meta && action.meta.API_CALL) {

    call(action.meta).then(result => {
      result.req.timeout({
        deadline: 50000, // allow 5 minute for the file to finish loading.
      })
        .on('abort', () => {
          console.log('MIDDLEWARE_API:: ===>> The request is aborted');
          next({
            type: action.meta.API_ERRORS[408],
            result: {
              status: 408,
              message: 'request Timeout',
              error: '408 Timeout error',
            },
          });
        })
        .then(res => {
          next({
            type: action.meta.API_SUCCESS,
            result: res.body
          });
          if (action.meta.onSuccess) {
            store.dispatch(action.meta.onSuccess(res.body));
          }
        });
    }).catch(({ status, response }) => {
      if (status) {
        if (action.meta.API_ERRORS && action.meta.API_ERRORS[status]) {
          return next({
            type: action.meta.API_ERRORS[status],
            result: response.body,
          });
        }
        throw response;
      } else {
        next({
          type: action.meta.API_ERRORS[408],
          result: {
            status: 408,
            message: 'request Timeout',
            error: '408 Timeout error',
          },
        });
      }
    });
  }

  return next(action);

};