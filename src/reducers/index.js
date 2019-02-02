import { combineReducers } from 'redux';

// Core
import auth from './core/auth';
import message from './core/message';
import modal from './core/modal';

export default combineReducers({
  // Core
  auth,
  message,
  modal
});
