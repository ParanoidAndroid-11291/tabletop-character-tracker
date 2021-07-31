import { combineReducers } from 'redux';
import authReducer from './authReducer';
import characterReducer from './characterReducer'
import resourceReducer from './resourceReducer';

export default combineReducers({
  auth: authReducer,
  character: characterReducer,
  resource: resourceReducer
});
