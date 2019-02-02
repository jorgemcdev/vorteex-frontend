import { message as t } from '../../constants';

export const addMessage = (type, title, message) => ({
  type: t.ADD_MESSAGE,
  payload: { type, title, message }
});
export const deleteMessage = id => ({
  type: t.DELETE_MESSAGE,
  id
});
export const resetMessages = () => ({
  type: t.RESET_MESSAGES
});
