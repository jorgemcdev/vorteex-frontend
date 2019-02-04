// Import Actions Types
import { auth as t } from '../../constants';

// Login
export const loginRequest = data => ({
  type: t.LOGIN_REQUEST,
  payload: data
});
export const loginSuccess = data => ({
  type: t.LOGIN_SUCCESS,
  payload: data
});
export const loginFailure = error => ({
  type: t.LOGIN_FAILURE,
  payload: error
});

// Logout
export const logoutRequest = () => ({
  type: t.LOGOUT_REQUEST
});
export const logoutSuccess = () => ({
  type: t.LOGOUT_SUCCESS
});
export const logoutFailure = error => ({
  type: t.LOGOUT_FAILURE,
  payload: error
});

// Verify Token
export const tokenRequest = () => ({
  type: t.TOKEN_REQUEST
});
export const tokenSuccess = () => ({
  type: t.TOKEN_SUCCESS
});
export const tokenFailure = error => ({
  type: t.TOKEN_FAILURE,
  payload: error
});

// Reset
export const authReset = () => ({
  type: t.AUTH_RESET
});
