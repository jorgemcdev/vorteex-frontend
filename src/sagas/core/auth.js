import { call, put, takeEvery } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

// History
import history from '../../history';

// Import Constants
import { auth as t } from '../../constants';

// Import Action Creators
import {
  loginSuccess, loginFailure, tokenSuccess, tokenFailure,
  logoutSuccess, logoutFailure
} from '../../actions';

// API
import api from '../../api';

// Lib Helpers
import { setLocalToken, unsetLocalToken, getLocalToken } from '../../lib/localToken';
import setAuthorizationToken from '../../lib/setAuthorizationToken';

function* login(action) {
  try {
    // Get the token
    const result = yield call(api.auth.login, action.payload);
    const { access, refresh } = result.data;
    // Set Local Token
    yield setLocalToken(access, refresh);
    // Set Header Authorization
    yield setAuthorizationToken(access);
    // Success Login
    yield put(loginSuccess(jwtDecode(access)));
    // Redirect To Dashboard
    history.push('/');
  } catch (error) {
    yield put(loginFailure('Something went wrong, Please try again.'));
  }
}

function* logout() {
  try {
    // Unset Local Token
    yield unsetLocalToken();
    // UnSet Header Authorization
    yield setAuthorizationToken(null);
    // Logout
    yield put(logoutSuccess());
    // Redirect To Home
  } catch (error) {
    yield put(logoutFailure('Something went wrong, Please try again.'));
  }
}

function* tokenVerify() {
  try {
    // Get the token from storage
    const token = yield getLocalToken();
    // Set Header Authorization Token
    yield setAuthorizationToken(token);
    // Verify Token
    yield call(api.auth.tokenVerify, token);
    // Sucess
    yield put(tokenSuccess());
  } catch (error) {
    // Unset Local Token
    yield unsetLocalToken();
    // Unset Header Authorization Token
    yield setAuthorizationToken(null);
    // Logout
    yield put(tokenFailure('Something went wrong, Please try again.'));
  }
}

// Watcher Sagas
const auth = [
  takeEvery(t.LOGIN_REQUEST, login),
  takeEvery(t.LOGOUT_REQUEST, logout),
  takeEvery(t.TOKEN_REQUEST, tokenVerify)
];

export default auth;
