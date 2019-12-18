import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
  log: logReducer // we are calling logs from state
});
