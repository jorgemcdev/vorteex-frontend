import { LOCAL_TOKEN_ID } from '../config';

// Lib Helper for Header Token
import setAuthorizationToken from './setAuthorizationToken';

export const setLocalToken = (token) => {
  try {
    localStorage.setItem(LOCAL_TOKEN_ID, token);
    setAuthorizationToken(token);
    return true;
  } catch (e) {
    return false;
  }
};

export const unsetLocalToken = () => {
  try {
    localStorage.removeItem(LOCAL_TOKEN_ID);
    setAuthorizationToken(false);
    return true;
  } catch (e) {
    return false;
  }
};

export const getLocalToken = () => {
  try {
    const token = localStorage.getItem(LOCAL_TOKEN_ID);
    return token;
  } catch (e) {
    return false;
  }
};
