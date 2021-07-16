import {
  AuthDispatchTypes,
  AUTH_SUCCESS,
  AUTH_CHANGE,
  AUTH_FAIL,
  AUTH_LOADING
} from '../actions/AuthActions/AuthActionTypes';

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
      console.log('AUTH_LOADING', action);
      return { ...state ,loading: true };
    case AUTH_SUCCESS:
      console.log('AUTH_SUCCESS', action);
      return { ...state ,loading: false, loggedIn: true };
    case AUTH_CHANGE:
      console.log('AUTH_CHANGE', action);
      return {
        ...state,
        loading: false,
        loggedIn: action.payload.loggedIn,
        userId: action.payload.userId
      }
    case AUTH_FAIL:
      console.log('AUTH_FAIL', action);
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
