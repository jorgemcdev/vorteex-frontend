import { combineReducers } from 'redux';

// Core
import auth from './core/auth';
import message from './core/message';
import modal from './core/modal';

// App
import graphs from './app/graphs';
import instances from './app/instances';
import instancesParameters from './app/instancesParameters';
import templates from './app/templates';
import rooms from './app/rooms';

export default combineReducers({
  // Core
  auth,
  message,
  modal,
  // App
  graphs,
  instances,
  instancesParameters,
  templates,
  rooms
});
