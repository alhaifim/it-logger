import { combineReducers } from 'redux';
import logReducer from './logReducer';
import techReducer from './techReducer';
export default combineReducers({
  log: logReducer, // we are calling logs from state
  tech: techReducer
});
