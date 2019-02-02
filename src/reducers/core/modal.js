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
    action: null
  },
  className: ''
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case t.MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        data: {
          type: action.payload.data.type,
          title: action.payload.data.title,
          id: action.payload.data.id,
          text: action.payload.data.text,
          items: action.payload.data.items,
          actionLabel: action.payload.data.actionLabel,
          action: action.payload.data.action,
        },
        className: action.payload.className
      };

    // Reset
    case t.MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modal;
