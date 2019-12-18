// first fetch the logs
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// // create our actions
// export const getLogs = () => {
//     // we need to get an async call
//     // this is why we are using redux thunk
//     return (dispatch)=>{
//        SetLoading();

//        const res = await fetch('/logs');
//        const data = await res.json();

//     dispatch({
//         type: GET_LOGS,
//         payload: data
//     })

//     }

// alternative way

// create our actions
export const getLogs = () => async dispatch => {
  // we need to get an async call
  // this is why we are using redux thunk
  try {
    SetLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};
// SET loading to true
export const SetLoading = () => {
  return {
    type: SET_LOADING
  };
};
