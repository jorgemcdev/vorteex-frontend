// Import Actions Types
import { rooms as t } from '../../constants';

// Create
export const roomsNewRequest = data => ({
  type: t.ROOMS_NEW_REQUEST,
  payload: data
});
export const roomsNewSuccess = data => ({
  type: t.ROOMS_NEW_SUCCESS,
  payload: data
});
export const roomsNewFailure = () => ({
  type: t.ROOMS_NEW_FAILURE
});

// Read
export const roomsRequest = () => ({
  type: t.ROOMS_REQUEST
});
export const roomsSuccess = data => ({
  type: t.ROOMS_SUCCESS,
  payload: data
});
export const roomsFailure = () => ({
  type: t.ROOMS_FAILURE
});

// Update
export const roomsUpdateRequest = data => ({
  type: t.ROOMS_UPDATE_REQUEST,
  payload: data
});
export const roomsUpdateSuccess = data => ({
  type: t.ROOMS_UPDATE_SUCCESS,
  payload: data
});
export const roomsUpdateFailure = () => ({
  type: t.ROOMS_UPDATE_FAILURE
});

// Delete
export const roomsDelRequest = id => ({
  type: t.ROOMS_DEL_REQUEST,
  payload: id
});
export const roomsDelSuccess = id => ({
  type: t.ROOMS_DEL_SUCCESS,
  payload: id
});
export const roomsDelFailure = () => ({
  type: t.ROOMS_DEL_FAILURE
});

// Reset
export const roomsReset = () => ({
  type: t.ROOMS_RESET
});
