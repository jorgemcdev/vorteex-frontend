import { call, put, takeEvery } from 'redux-saga/effects';

// Import Constants
import { instancesParameters as t } from '../../constants';

// Import Action Creators
import {
  // Instances
  instancesParamSuccess, instancesParamFailure,
  instancesParamNewFailure, instancesParamNewSuccess,
  instancesParamDelSuccess, instancesParamDelFailure,
  // Messages
  addMessage
} from '../../actions';

// API
import api from '../../api';

function* listItem(action) {
  try {
    // Api Call
    const result = yield call(api.instancesParameters.getInstancesParam, action.payload);
    // Save Data to Store
    yield put(instancesParamSuccess(result.data));
  } catch (error) {
    yield put(instancesParamFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* newItem(action) {
  try {
    // Api Call
    const result = yield call(api.instancesParameters.postInstances, action.payload);
    // Save Data to Store
    yield put(instancesParamNewSuccess(result.data));
  } catch (error) {
    yield put(instancesParamNewFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* delItem(action) {
  try {
    // Api Call
    yield call(api.instancesParameters.delInstances, action.payload);
    // Save Data to Store
    yield put(instancesParamDelSuccess(action.payload));
  } catch (error) {
    yield put(instancesParamDelFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Watcher Sagas
const instances = [
  takeEvery(t.INSTANCES_PARAM_REQUEST, listItem),
  takeEvery(t.INSTANCES_PARAM_NEW_REQUEST, newItem),
  takeEvery(t.INSTANCES_PARAM_DEL_REQUEST, delItem)
];

export default instances;
