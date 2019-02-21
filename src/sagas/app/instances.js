import { call, put, takeEvery } from 'redux-saga/effects';

// Import Constants
import { instances as t } from '../../constants';

// Import Action Creators
import {
  // Instances
  instancesSuccess, instancesFailure,
  instancesNewFailure, instancesNewSuccess,
  instancesDelSuccess, instancesDelFailure,
  // Messages
  addMessage
} from '../../actions';

// API
import api from '../../api';

function* listItem(action) {
  try {
    // Api Call
    const result = yield call(api.instances.getInstances, action.payload);
    // Save Data to Store
    yield put(instancesSuccess(result.data));
  } catch (error) {
    yield put(instancesFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* newItem(action) {
  try {
    // Api Call
    const result = yield call(api.instances.postInstances, action.payload);
    // Save Data to Store
    yield put(instancesNewSuccess(result.data));
  } catch (error) {
    yield put(instancesNewFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* delItem(action) {
  try {
    // Api Call
    yield call(api.instances.delInstances, action.payload);
    // Save Data to Store
    yield put(instancesDelSuccess(action.payload));
  } catch (error) {
    yield put(instancesDelFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Watcher Sagas
const instances = [
  takeEvery(t.INSTANCES_REQUEST, listItem),
  takeEvery(t.INSTANCES_NEW_REQUEST, newItem),
  takeEvery(t.INSTANCES_DEL_REQUEST, delItem)
];

export default instances;
