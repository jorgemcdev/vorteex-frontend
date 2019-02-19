import { all } from 'redux-saga/effects';

// Core
import auth from './core/auth';

// App
import instances from './app/instances';
import templates from './app/templates';
import rooms from './app/rooms';

export default function* rootSaga() {
  yield all([
    // Core
    ...auth,
    // App
    ...instances,
    ...templates,
    ...rooms
  ]);
}
