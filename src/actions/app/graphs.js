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

// Reset
export const graphsReset = () => ({
  type: t.GRAPHS_RESET
});
