import { all } from 'redux-saga/effects';

// Core
import auth from './core/auth';

// App
import instances from './app/instances';

export default function* rootSaga() {
  yield all([
    // Core
    ...auth,
    // App
    ...instances
  ]);
}
