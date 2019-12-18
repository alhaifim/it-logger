import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../actions/types';

// we do not have a state file like we did with contest, we define the intial state here
const initialState = {
  // this is our initial state for logs
  logs: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  // import it to index.js
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
