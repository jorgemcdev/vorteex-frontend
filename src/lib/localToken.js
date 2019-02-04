import { LOCAL_TOKEN_ID } from '../config';

export const setLocalToken = (access, refresh) => {
  try {
    localStorage.setItem(LOCAL_TOKEN_ID, access);
    localStorage.setItem(`${LOCAL_TOKEN_ID}_refresh`, refresh);
    return true;
  } catch (e) {
    return false;
  }
};

export const unsetLocalToken = () => {
  try {
    localStorage.removeItem(LOCAL_TOKEN_ID);
    localStorage.removeItem(`${LOCAL_TOKEN_ID}_refresh`);
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
