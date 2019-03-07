import { call, put, takeEvery } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

// History
import history from '../../history';

// Import Constants
import { auth as t } from '../../constants';

// Import Action Creators
import {
  loginSuccess, loginFailure,
  tokenSuccess, tokenFailure,
  logoutSuccess, logoutFailure
} from '../../actions';

// API
import api from '../../api';


// Lib Helpers
import { setLocalToken, unsetLocalToken, getLocalToken } from '../../utils/localToken';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

const e = api.endpoints;

function* login(action) {
  try {
    // Get the token

    const loginData = { username: action.payload.username, password: action.payload.password };

    const result = yield call(api.request.post, e.LOGIN, loginData);

    const { access, refresh } = result.data;
    // Set Local Token and Header Authorization
    yield setLocalToken(access, refresh);
    yield setAuthorizationToken(access);
    // Success Login
    const decodedToken = jwtDecode(access);
    yield put(loginSuccess({ user_id: decodedToken.user_id, username: action.payload.username }));
    // Redirect To Dashboard
    history.push('/');
  } catch (error) {
    yield put(loginFailure('Something went wrong, Please try again.', error.response));
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
    history.push('/');
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
    yield call(api.request.post, e.VERIFY, { token });
    // Sucess
    yield put(tokenSuccess());
  } catch (error) {
    // Unset Local Token
    yield unsetLocalToken();
    // Unset Header Authorization Token
    yield setAuthorizationToken(null);
    // Logout
    yield put(tokenFailure('Your Session Expired, Please try again.'));
    // Redirect To Home
    history.push('/');
  }
}

// Watcher Sagas
const auth = [
  takeEvery(t.LOGIN_REQUEST, login),
  takeEvery(t.LOGOUT_REQUEST, logout),
  takeEvery(t.TOKEN_REQUEST, tokenVerify)
];

export default auth;
