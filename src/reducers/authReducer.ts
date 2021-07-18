import {
  AuthDispatchTypes,
  AUTH_SUCCESS,
  AUTH_CHANGE,
  AUTH_FAIL,
  AUTH_LOADING
} from '../actions/AuthActionTypes';

interface DefaultStateI {
  loading: boolean,
  loggedIn: boolean,
  userId?: string,
  error?: Error
}

const defaultState: DefaultStateI = {
  loading: false,
  loggedIn: false
}

export default (state: DefaultStateI = defaultState, action: AuthDispatchTypes): DefaultStateI => {
  switch(action.type){
    case AUTH_LOADING:
      return { ...state ,loading: true };
    case AUTH_SUCCESS:
      return {
        ...state ,
        loading: false,
        loggedIn: true,
        userId: action.payload
      };
    case AUTH_CHANGE:
      return {
        ...state,
        loading: false,
        loggedIn: action.payload.loggedIn,
        userId: action.payload.userId
      }
    case AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
