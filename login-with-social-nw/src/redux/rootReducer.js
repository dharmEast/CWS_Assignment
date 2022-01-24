import { combineReducers } from 'redux';
import userDetailReducer from './userReducer';

export default combineReducers({
  userDetails: userDetailReducer,
});
