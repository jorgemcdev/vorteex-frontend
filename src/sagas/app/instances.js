import { call, put, takeEvery } from 'redux-saga/effects';

// History
import history from '../../history';

// Import Constants
import { instances as t } from '../../constants';

// Import Action Creators
import {
  // Instances
  instancesSuccess, instancesFailure,
  instancesNewFailure, instancesNewSuccess,
  instancesDelSuccess, instancesDelFailure,
  // Templates
  templatesRequest,
  // rooms
  roomsRequest,
  // Messages
  addMessage
} from '../../actions';

// API
import api from '../../api';

// Create
function* newItem(action) {
  try {
    // Api Call
    const result = yield call(api.instances.postInstances, action.payload);
    // Save Data to Store
    yield put(instancesNewSuccess(result.data));
    // Redirect to Edit Form
    history.push(`/instances/edit/${result.data.id}`);
  } catch (error) {
    yield put(instancesNewFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Read
function* listItem(action) {
  try {
    // Get Templates / Rooms
    yield put(templatesRequest());
    yield put(roomsRequest());
    // Api Call
    const result = yield call(api.instances.getInstances, action.payload);
    // Save Data to Store
    yield put(instancesSuccess(result.data));
  } catch (error) {
    yield put(instancesFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Update
function* editItem(action) {
  try {
    // Api Call
    const result = yield call(api.instances.patchInstances, action.payload.id, action.payload);
    // Save Data to Store
    yield put(instancesNewSuccess(result.data));
    // Redirect to Edit Form
    history.push(`/instances/edit/${result.data.id}`);
  } catch (error) {
    yield put(instancesNewFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Delete
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
  takeEvery(t.INSTANCES_NEW_REQUEST, newItem),
  takeEvery(t.INSTANCES_REQUEST, listItem),
  takeEvery(t.INSTANCES_UPDATE_REQUEST, editItem),
  takeEvery(t.INSTANCES_DEL_REQUEST, delItem)
];

export default instances;
