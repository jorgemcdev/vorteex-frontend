import { call, put, takeEvery } from 'redux-saga/effects';

// Import Constants
import { instances as t } from '../../constants';

// Import Action Creators
import {
  // Instances
  instancesSuccess, instancesFailure,
  // Messages
  addMessage
} from '../../actions';

// API
import api from '../../api';

function* instancesList(action) {
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

// Watcher Sagas
const instances = [
  takeEvery(t.INSTANCES_REQUEST, instancesList)
];

export default instances;
