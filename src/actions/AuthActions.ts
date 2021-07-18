import { Dispatch } from 'redux';
import { auth as firebaseAuth } from '../firebase';
import {
  AuthDispatchTypes,
  AUTH_LOADING,
  AUTH_SUCCESS,
  AUTH_CHANGE,
  AUTH_FAIL
} from './AuthActionTypes';

export const auth = (email: string, password: string) => async ( dispatch: Dispatch<AuthDispatchTypes> ) => {
  try {
    dispatch({
      type: AUTH_LOADING
    })
    const res = await firebaseAuth.signInWithEmailAndPassword(email, password);

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.user.uid
    })
  } catch(e) {
    dispatch({
      type: AUTH_FAIL,
      payload: e
    })
  }
};

export const authChange = () => (dispatch: Dispatch<AuthDispatchTypes> ) => {
  try {
    dispatch({
      type: AUTH_LOADING
    })

    const res = firebaseAuth.onAuthStateChanged((firebaseUser) => {
      const auth = firebaseUser ?
      { loggedIn: true, userId: firebaseUser.uid } :
      { loggedIn: false }
      dispatch({
        type: AUTH_CHANGE,
        payload: auth
      })
    });

  } catch(e) {
    dispatch({
      type: AUTH_FAIL,
      payload: e
    })
  }
};

export const clearError = () => (dispatch: Dispatch<AuthDispatchTypes> ) => {
  dispatch({
    type: AUTH_FAIL,
    payload: undefined
  })
};
