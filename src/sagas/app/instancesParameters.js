import { call, put, takeEvery } from 'redux-saga/effects';

// Import Constants
import { instancesParameters as t } from '../../constants';

// Import Action Creators
import {
  // Instances
  instancesParametersSuccess, instancesParametersFailure,
  instancesParametersNewFailure, instancesParametersNewSuccess,
  instancesParametersDelSuccess, instancesParametersDelFailure,
  // Messages
  addMessage
} from '../../actions';

// API
import api from '../../api';

const e = api.endpoints;

function* listItem(action) {
  try {
    // Api Call
    const result = yield call(api.request.get, e.INSTANCES_PARAMETERS, action.payload);
    // Save Data to Store
    yield put(instancesParametersSuccess(result.data));
  } catch (error) {
    yield put(instancesParametersFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* listInstanceItem(action) {
  try {
    // Api Call
    const result = yield call(api.request.get, e.INSTANCES_PARAMETERS, null, `instance=${action.payload}`);

    // Save Data to Store
    yield put(instancesParametersSuccess(result.data));
  } catch (error) {
    yield put(instancesParametersFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* newItem(action) {
  try {
    // Api Call
    const result = yield call(api.request.post, e.INSTANCES_PARAMETERS, action.payload);
    // Save Data to Store
    yield put(instancesParametersNewSuccess(result.data));
  } catch (error) {
    yield put(instancesParametersNewFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* delItem(action) {
  try {
    // Api Call
    yield call(api.request.del, e.INSTANCES_PARAMETERS, action.payload);
    // Save Data to Store
    yield put(instancesParametersDelSuccess(action.payload));
  } catch (error) {
    yield put(instancesParametersDelFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Watcher Sagas
const instances = [
  takeEvery(t.INSTANCES_PARAMETERS_REQUEST, listItem),
  takeEvery(t.INSTANCES_PARAMETERS_REQUEST_BY_INSTANCE, listInstanceItem),
  takeEvery(t.INSTANCES_PARAMETERS_NEW_REQUEST, newItem),
  takeEvery(t.INSTANCES_PARAMETERS_DEL_REQUEST, delItem)
];

export default instances;
