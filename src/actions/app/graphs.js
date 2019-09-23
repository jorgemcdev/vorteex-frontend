// Import Actions Types
import { graphs as t } from '../../constants';

// Read
export const graphsRequest = () => ({
  type: t.GRAPHS_REQUEST
});
export const graphsSuccess = data => ({
  type: t.GRAPHS_SUCCESS,
  payload: data
});
export const graphsFailure = () => ({
  type: t.GRAPHS_FAILURE
});


// Read
export const graphsDropRequest = data => ({
  type: t.GRAPHS_DROP_REQUEST,
  payload: data
});
export const graphsDropStore = data => ({
  type: t.GRAPHS_DROP_STORE,
  payload: data
});
export const graphsDropSuccess = data => ({
  type: t.GRAPHS_DROP_SUCCESS,
  payload: data
});
export const graphsDropFailure = () => ({
  type: t.GRAPHS_DROP_FAILURE
});

// Reset
export const graphsReset = () => ({
  type: t.GRAPHS_RESET
});
