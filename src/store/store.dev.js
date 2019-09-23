/* eslint no-undef: 0 */
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// import load/save localstorage
import { loadState, saveState } from '../utils/persistState';

// import Reducers
import reducers from '../reducers';

// Import Sagas
import rootSagas from '../sagas';

// Import Constants
import { LOGOUT_SUCCESS, TOKEN_FAILURE } from '../constants/core/auth';

// Load State from local storage
const persistedState = loadState();

// Create logger middleware
const loggerMiddleware = createLogger();

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Compose Middleware
const enhancers = compose(
  applyMiddleware(
    loggerMiddleware,
    sagaMiddleware,
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

// Clear State after Logout / Token Error
const rootReducers = (state, action) => {
  if (action.type === LOGOUT_SUCCESS || action.type === TOKEN_FAILURE) {
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

// Create Store
const store = createStore(
  rootReducers,
  persistedState,
  enhancers,
);

// Run Sagas
sagaMiddleware.run(rootSagas);

// Store Subscrive
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
