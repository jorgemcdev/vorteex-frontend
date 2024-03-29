import { all } from 'redux-saga/effects';

// Core
import auth from './core/auth';

// App
import graphs from './app/graphs';
import instances from './app/instances';
import instancesParameters from './app/instancesParameters';
import templates from './app/templates';
import modules from './app/modules';
import rooms from './app/rooms';

export default function* rootSaga() {
  yield all([
    // Core
    ...auth,
    // App
    ...graphs,
    ...instances,
    ...instancesParameters,
    ...templates,
    ...modules,
    ...rooms
  ]);
}
