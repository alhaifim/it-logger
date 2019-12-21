import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR
} from './types';

//Get techs from server
export const getTechs = () => async dispatch => {
    // we need to get an async call
    // this is why we are using redux thunk
    try {
      SetLoading();
  
      const res = await fetch('/techs');
      const data = await res.json();
  
      dispatch({
        type: GET_TECHS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: TECHS_ERROR,
        payload: err.response.statusText
      });
    }
  };
//Set loading to true

export const SetLoading = () => {
    return {
      type: SET_LOADING
    };
  };
  