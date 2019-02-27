import { call, put, takeEvery } from 'redux-saga/effects';

// Import Constants
import { graphs as t } from '../../constants';

// Import Action Creators
import {
  // Graphs / Instances
  graphsSuccess, graphsFailure,
  graphsDropStore, graphsDropFailure,
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

function* dropItem(action) {
  try {
    const {
      id, x, y, nodeId, group
    } = action.payload;

    // optimistic Update
    yield put(graphsDropStore({ id, x, y }));

    // Update xy Positions: Rooms or Instances
    if (group === 'Rooms') {
      yield call(api.rooms.patchRooms, nodeId, { position_x: x, position_y: y });
    } else {
      yield call(api.instances.patchInstances, nodeId, { position_x: x, position_y: y });
    }
  } catch (error) {
    yield put(graphsDropFailure());
    yield put(addMessage('warning', 'Warn', `${error}`));
  }
}

// Watcher Sagas
const instances = [
  takeEvery(t.GRAPHS_REQUEST, listItem),
  takeEvery(t.GRAPHS_DROP_REQUEST, dropItem),
];

export default instances;
