import { combineReducers } from 'redux';

import auth from './core/auth';
import message from './core/message';
import modal from './core/modal';

import graphs from './app/graphs';
import instances from './app/instances';
import instancesParameters from './app/instancesParameters';
import modules from './app/modules';
import templates from './app/templates';
import rooms from './app/rooms';

export default combineReducers({
  auth,
  message,
  modal,
  graphs,
  instances,
  instancesParameters,
  modules,
  templates,
  rooms
});
