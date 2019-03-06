import { call, put, takeEvery } from 'redux-saga/effects';

import history from '../../history';

import { instances as t } from '../../constants';

import {
  instancesSuccess, instancesFailure,
  instancesNewFailure, instancesNewSuccess,
  instancesDelSuccess, instancesDelFailure,
  templatesRequest,
  roomsRequest,
  addMessage
} from '../../actions';

import api from '../../api';
const e = api.endpoints


function* newItem(action) {
  try {
    const result = yield call(api.request(e.INSTANCES, 'POST'), action.payload);
    yield put(instancesNewSuccess(result.data));
    history.push(`/instances/edit/${result.data.id}`);
  } catch (error) {
    yield put(instancesNewFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* listItem(action) {
  try {
    yield put(roomsRequest());

    const result = yield call(api.request(e.INSTANCES, 'GET'), action.payload);

    yield put(instancesSuccess(result.data));
  } catch (error) {
    yield put(instancesFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* editItem(action) {
  try {
    const result = yield call(api.request(e.INSTANCES, 'PATCH'), action.payload.id, action.payload);
    yield put(instancesNewSuccess(result.data));
    history.push(`/instances/edit/${result.data.id}`);
  } catch (error) {
    yield put(instancesNewFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

function* delItem(action) {
  try {
    yield call(api.request(e.INSTANCES, 'DELETE'), action.payload);
    yield put(instancesDelSuccess(action.payload));
  } catch (error) {
    yield put(instancesDelFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

const instances = [
  takeEvery(t.INSTANCES_NEW_REQUEST, newItem),
  takeEvery(t.INSTANCES_REQUEST, listItem),
  takeEvery(t.INSTANCES_UPDATE_REQUEST, editItem),
  takeEvery(t.INSTANCES_DEL_REQUEST, delItem)
];

export default instances;
