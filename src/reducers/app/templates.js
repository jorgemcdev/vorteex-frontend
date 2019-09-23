import { templates as t } from '../../constants';

const initialState = {
  isLoading: false,
  items: []
};
const templates = (state = initialState, action) => {
  switch (action.type) {
    // CREATE
    case t.TEMPLATES_NEW_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: [action.payload]
      };
    case t.TEMPLATES_NEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [action.payload]
      };
    case t.TEMPLATES_NEW_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    // READ
    case t.TEMPLATES_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: []
      };
    case t.TEMPLATES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };
    case t.TEMPLATES_FAILURE:
      return {
        ...state,
        isLoading: false,
        items: []
      };

    // UPDATE
    case t.TEMPLATES_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.TEMPLATES_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.map(item => (
          (item.id !== action.payload.id) ? item : { ...item, ...action.payload }))
        ]
      };
    case t.TEMPLATES_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    // DELETE
    case t.TEMPLATES_DEL_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.TEMPLATES_DEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.filter(item => item.id !== action.payload)]
      };
    case t.TEMPLATES_DEL_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    // RESETS
    case t.TEMPLATES_RESET:
      return {
        ...state,
        isLoading: false,
        items: []
      };
    default:
      return state;
  }
};

export default templates;
