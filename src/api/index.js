import auth from './core/auth';

import instances from './app/instances';
import templates from './app/templates';
import modules from './app/modules';
import rooms from './app/rooms';

const api = {
  auth,
  instances,
  templates,
  modules,
  rooms
};

export default api;
