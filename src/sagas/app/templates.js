import { call, put, takeEvery } from 'redux-saga/effects';

// Import Constants
import { templates as t } from '../../constants';

// Import Action Creators
import {
  // Instances
  templatesSuccess, templatesFailure,
  // Messages
  addMessage
} from '../../actions';

// API
import api from '../../api';
const e = api.endpoints

function* templatesList(action) {
  try {
    // Api Call
    const result = yield call(api.request(e.TEMPLATES, 'GET'), action.payload);
    // Save Data to Store
    yield put(templatesSuccess(result.data));
  } catch (error) {
    yield put(templatesFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Watcher Sagas
const templates = [
  takeEvery(t.TEMPLATES_REQUEST, templatesList)
];

export default templates;
