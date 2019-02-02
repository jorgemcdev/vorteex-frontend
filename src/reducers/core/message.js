import shortid from 'shortid';
import { message as t } from '../../constants';

const initialState = [];

const messages = (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_MESSAGE:
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.payload.type,
          title: action.payload.title,
          text: action.payload.message
        }
      ];
    case t.DELETE_MESSAGE:
      return [
        ...state.filter(item => item.id !== action.id),
      ];
    case t.RESET_MESSAGES:
      return [];
    default:
      return state;
  }
};

export default messages;
