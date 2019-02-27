// Import Actions Types
import { instancesParameters as t } from '../../constants';

// Create
export const instancesParamNewRequest = data => ({
  type: t.INSTANCES_PARAM_NEW_REQUEST,
  payload: data
});
export const instancesParamNewSuccess = data => ({
  type: t.INSTANCES_PARAM_NEW_SUCCESS,
  payload: data
});
export const instancesParamNewFailure = () => ({
  type: t.INSTANCES_PARAM_NEW_FAILURE
});

// Read
export const instancesParamRequest = () => ({
  type: t.INSTANCES_PARAM_REQUEST
});
export const instancesParamSuccess = data => ({
  type: t.INSTANCES_PARAM_SUCCESS,
  payload: data
});
export const instancesParamFailure = () => ({
  type: t.INSTANCES_PARAM_FAILURE
});

// Update
export const instancesParamUpdateRequest = data => ({
  type: t.INSTANCES_PARAM_UPDATE_REQUEST,
  payload: data
});
export const instancesParamUpdateSuccess = data => ({
  type: t.INSTANCES_PARAM_UPDATE_SUCCESS,
  payload: data
});
export const instancesParamUpdateFailure = () => ({
  type: t.INSTANCES_PARAM_UPDATE_FAILURE
});

// Delete
export const instancesParamDelRequest = id => ({
  type: t.INSTANCES_PARAM_DEL_REQUEST,
  payload: id
});
export const instancesParamDelSuccess = id => ({
  type: t.INSTANCES_PARAM_DEL_SUCCESS,
  payload: id
});
export const instancesParamDelFailure = () => ({
  type: t.INSTANCES_PARAM_DEL_FAILURE
});

// Reset
export const instancesParamReset = () => ({
  type: t.INSTANCES_PARAM_RESET
});
