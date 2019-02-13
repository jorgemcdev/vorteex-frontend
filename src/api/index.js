// Core
import auth from './core/auth';

// App
import instances from './app/instances';
import rooms from './app/rooms';

const api = {
  // Core
  auth,
  // App
  instances,
  rooms
};

export default api;
