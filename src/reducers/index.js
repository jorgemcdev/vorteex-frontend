import { combineReducers } from 'redux';

// Core
import auth from './core/auth';
import message from './core/message';
import modal from './core/modal';

// App
import instances from './app/instances';

export default combineReducers({
  // Core
  auth,
  message,
  modal,
  // App
  instances
});
