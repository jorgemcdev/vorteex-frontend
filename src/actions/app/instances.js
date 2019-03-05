// Import Actions Types
import { instances as t } from '../../constants';

// Create
export const instancesNewRequest = data => ({
  type: t.INSTANCES_NEW_REQUEST,
  payload: data
});
export const instancesNewSuccess = data => ({
  type: t.INSTANCES_NEW_SUCCESS,
  payload: data
});
export const instancesNewFailure = () => ({
  type: t.INSTANCES_NEW_FAILURE
});

// Read
export const instancesRequest = data => ({
  type: t.INSTANCES_REQUEST,
  payload: data
});
export const instancesSuccess = data => ({
  type: t.INSTANCES_SUCCESS,
  payload: data
});
export const instancesFailure = () => ({
  type: t.INSTANCES_FAILURE
});

// Select Instance
export const instancesSelect = id => ({
  type: t.INSTANCES_SELECT,
  payload: id
});

export const instancesSelectReset = () => ({
  type: t.INSTANCES_SELECT_RESET
});

// Update
export const instancesUpdateRequest = data => ({
  type: t.INSTANCES_UPDATE_REQUEST,
  payload: data
});
export const instancesUpdateSuccess = data => ({
  type: t.INSTANCES_UPDATE_SUCCESS,
  payload: data
});
export const instancesUpdateFailure = () => ({
  type: t.INSTANCES_UPDATE_FAILURE
});

// Delete
export const instancesDelRequest = id => ({
  type: t.INSTANCES_DEL_REQUEST,
  payload: id
});
export const instancesDelSuccess = id => ({
  type: t.INSTANCES_DEL_SUCCESS,
  payload: id
});
export const instancesDelFailure = () => ({
  type: t.INSTANCES_DEL_FAILURE
});

// Reset
export const instancesReset = () => ({
  type: t.INSTANCES_RESET
});
