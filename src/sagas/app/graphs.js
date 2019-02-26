import { call, put, takeEvery } from 'redux-saga/effects';

// Import Constants
import { graphs as t } from '../../constants';

// Import Action Creators
import {
  // Instances
  graphsSuccess, graphsFailure,
  // Messages
  addMessage
} from '../../actions';

// API
import api from '../../api';

// Utils
import DataParser from '../../utils/graphsDataParser';

function* listItem(action) {
  try {
    // Api Call
    const result = yield call(api.instances.getInstances, action.payload);
    // Parse Data
    const g = new DataParser();
    const parsedData = yield g.parseData(result.data);
    // Save Data to Store
    yield put(graphsSuccess(parsedData));
  } catch (error) {
    yield put(graphsFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Watcher Sagas
const instances = [
  takeEvery(t.GRAPHS_REQUEST, listItem),
];

export default instances;
