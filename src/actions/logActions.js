// first fetch the logs
import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG } from './types';

// create our actions
//get logs from server
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

//Add new log
export const addLog = log => async dispatch => {
  // we need to get an async call
  // this is why we are using redux thunk
  try {
    SetLoading();

    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data
    });
  }
};

//Delete logs from server
export const deleteLog = (id) => async dispatch => {
    // we need to get an async call
    // this is why we are using redux thunk
    try {
      SetLoading();
  
      await fetch(`/logs/${id}`,{
          method: 'DELETE'
      });

  
      dispatch({
        type: DELETE_LOG,
        payload: id
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
