// Import Actions Types
import { modules as t } from '../../constants';

// Create
export const modulesNewRequest = data => ({
  type: t.MODULES_NEW_REQUEST,
  payload: data
});
export const modulesNewSuccess = data => ({
  type: t.MODULES_NEW_SUCCESS,
  payload: data
});
export const modulesNewFailure = () => ({
  type: t.MODULES_NEW_FAILURE
});

// Read
export const modulesRequest = () => ({
  type: t.MODULES_REQUEST
});
export const modulesSuccess = data => ({
  type: t.MODULES_SUCCESS,
  payload: data
});
export const modulesFailure = () => ({
  type: t.MODULES_FAILURE
});

// Update
export const modulesUpdateRequest = data => ({
  type: t.MODULES_UPDATE_REQUEST,
  payload: data
});
export const modulesUpdateSuccess = data => ({
  type: t.MODULES_UPDATE_SUCCESS,
  payload: data
});
export const modulesUpdateFailure = () => ({
  type: t.MODULES_UPDATE_FAILURE
});

// Delete
export const modulesDelRequest = id => ({
  type: t.MODULES_DEL_REQUEST,
  payload: id
});
export const modulesDelSuccess = id => ({
  type: t.MODULES_DEL_SUCCESS,
  payload: id
});
export const modulesDelFailure = () => ({
  type: t.MODULES_DEL_FAILURE
});

// Reset
export const modulesReset = () => ({
  type: t.MODULES_RESET
});
