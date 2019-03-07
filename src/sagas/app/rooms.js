import { call, put, takeEvery } from 'redux-saga/effects';

// Import Constants
import { rooms as t } from '../../constants';

// Import Action Creators
import {
  // Instances
  roomsSuccess, roomsFailure,
  // Messages
  addMessage
} from '../../actions';

// API
import api from '../../api';
const e = api.endpoints

function* list(action) {
  try {
    // Api Call
    const result = yield call(api.request.get, e.ROOMS, action.payload);
    // Save Data to Store
    yield put(roomsSuccess(result.data));
  } catch (error) {
    yield put(roomsFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Watcher Sagas
const rooms = [
  takeEvery(t.ROOMS_REQUEST, list)
];

export default rooms;
