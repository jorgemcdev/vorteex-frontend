import { all } from 'redux-saga/effects';

// Core
import auth from './core/auth';

export default function* rootSaga() {
  yield all([
    // Core
    ...auth
  ]);
}
