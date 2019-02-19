// Core
import auth from './core/auth';

// App
import instances from './app/instances';
import templates from './app/templates';
import rooms from './app/rooms';

const api = {
  // Core
  auth,
  // App
  instances,
  templates,
  rooms
};

export default api;
