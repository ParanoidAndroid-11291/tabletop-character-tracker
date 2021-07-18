export const AUTH_LOADING = "AUTH_LOADING";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_CHANGE = "AUTH_CHANGE";

type Auth = {
  loggedIn: boolean;
  userId?: string;
}

export interface AuthLoading {
  type: typeof AUTH_LOADING
}

export interface AuthFail {
  type: typeof AUTH_FAIL;
  payload: Error
}

export interface AuthSuccess {
  type: typeof AUTH_SUCCESS
  payload: string;
}

export interface AuthChange {
  type: typeof AUTH_CHANGE,
  payload: Auth;
}

export type AuthDispatchTypes = AuthLoading | AuthFail | AuthSuccess | AuthChange;
