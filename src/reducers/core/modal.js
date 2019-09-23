import { modal as t } from '../../constants';

const initialState = {
  isOpen: false,
  data: {
    type: '',
    title: '',
    id: null,
    text: '',
    items: [],
    actionLabel: '',
    action: null,
    className: ''
  }
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case t.MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        data: {
          type: action.payload.type,
          title: action.payload.title,
          id: action.payload.id,
          text: action.payload.text,
          items: action.payload.items,
          actionLabel: action.payload.actionLabel,
          action: action.payload.action,
          className: action.payload.className
        }
      };
    case t.MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        data: initialState
      };
    default:
      return state;
  }
};

export default modal;
