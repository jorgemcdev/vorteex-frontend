// Import Actions Types
import { templates as t } from '../../constants';

// Create
export const templatesNewRequest = data => ({
  type: t.TEMPLATES_NEW_REQUEST,
  payload: data
});
export const templatesNewSuccess = data => ({
  type: t.TEMPLATES_NEW_SUCCESS,
  payload: data
});
export const templatesNewFailure = () => ({
  type: t.TEMPLATES_NEW_FAILURE
});

// Read
export const templatesRequest = () => ({
  type: t.TEMPLATES_REQUEST
});
export const templatesSuccess = data => ({
  type: t.TEMPLATES_SUCCESS,
  payload: data
});
export const templatesFailure = () => ({
  type: t.TEMPLATES_FAILURE
});

// Update
export const templatesUpdateRequest = data => ({
  type: t.TEMPLATES_UPDATE_REQUEST,
  payload: data
});
export const templatesUpdateSuccess = data => ({
  type: t.TEMPLATES_UPDATE_SUCCESS,
  payload: data
});
export const templatesUpdateFailure = () => ({
  type: t.TEMPLATES_UPDATE_FAILURE
});

// Delete
export const templatesDelRequest = id => ({
  type: t.TEMPLATES_DEL_REQUEST,
  payload: id
});
export const templatesDelSuccess = id => ({
  type: t.TEMPLATES_DEL_SUCCESS,
  payload: id
});
export const templatesDelFailure = () => ({
  type: t.TEMPLATES_DEL_FAILURE
});

// Reset
export const templatesReset = () => ({
  type: t.TEMPLATES_RESET
});
