import { call, put, takeEvery } from 'redux-saga/effects';
import { modules as t } from '../../constants';

import {
  modulesSuccess,
  modulesFailure,
  addMessage
} from '../../actions';

import api from '../../api';

const e = api.endpoints;

function* modulesList(action) {
  try {
    const result = yield call(api.request.get, e.MODULES, action.payload);
    yield put(modulesSuccess(result.data));
  } catch (error) {
    yield put(modulesFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

const modules = [
  takeEvery(t.MODULES_REQUEST, modulesList)
];

export default modules;
