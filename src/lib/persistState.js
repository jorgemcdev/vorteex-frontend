import { LOCAL_STATE_ID } from '../config';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STATE_ID);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(LOCAL_STATE_ID, serializedState);
    return true;
  } catch (err) {
    return undefined;
  }
};
