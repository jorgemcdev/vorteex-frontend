// Import Actions Types
import { instancesParameters as t } from '../../constants';

// Create
export const instancesParametersNewRequest = data => ({
  type: t.INSTANCES_PARAMETERS_NEW_REQUEST,
  payload: data
});

export const instancesParametersNewSuccess = data => ({
  type: t.INSTANCES_PARAMETERS_NEW_SUCCESS,
  payload: data
});

export const instancesParametersNewFailure = () => ({
  type: t.INSTANCES_PARAMETERS_NEW_FAILURE
});

// Read
export const instancesParametersRequest = () => ({
  type: t.INSTANCES_PARAMETERS_REQUEST
});

export const instancesParametersRequestByInstance = id => ({
  type: t.INSTANCES_PARAMETERS_REQUEST_BY_INSTANCE,
  payload: id
});

export const instancesParametersSuccess = data => ({
  type: t.INSTANCES_PARAMETERS_SUCCESS,
  payload: data
});

export const instancesParametersFailure = () => ({
  type: t.INSTANCES_PARAMETERS_FAILURE
});

// Select Parameters
export const instancesParametersSelect = id => ({
  type: t.INSTANCES_PARAMETERS_SELECT,
  payload: id
});

export const instancesParametersSelectReset = () => ({
  type: t.INSTANCES_PARAMETERS_SELECT_RESET
});

// Update
export const instancesParametersUpdateRequest = data => ({
  type: t.INSTANCES_PARAMETERS_UPDATE_REQUEST,
  payload: data
});
export const instancesParametersUpdateSuccess = data => ({
  type: t.INSTANCES_PARAMETERS_UPDATE_SUCCESS,
  payload: data
});
export const instancesParametersUpdateFailure = () => ({
  type: t.INSTANCES_PARAMETERS_UPDATE_FAILURE
});

// Delete
export const instancesParametersDelRequest = id => ({
  type: t.INSTANCES_PARAMETERS_DEL_REQUEST,
  payload: id
});
export const instancesParametersDelSuccess = id => ({
  type: t.INSTANCES_PARAMETERS_DEL_SUCCESS,
  payload: id
});
export const instancesParametersDelFailure = () => ({
  type: t.INSTANCES_PARAMETERS_DEL_FAILURE
});

// Reset
export const instancesParametersReset = () => ({
  type: t.INSTANCES_PARAMETERS_RESET
});
