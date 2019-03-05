import { instances as t } from '../../constants';

const initialState = {
  isLoading: false,
  items: [],
  selected: {}
};
const instances = (state = initialState, action) => {
  switch (action.type) {
    // CREATE
    case t.INSTANCES_NEW_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: [action.payload]
      };
    case t.INSTANCES_NEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [action.payload]
      };
    case t.INSTANCES_NEW_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    // READ
    case t.INSTANCES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.INSTANCES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };
    case t.INSTANCES_FAILURE:
      return {
        ...state,
        isLoading: false,
        items: []
      };

    // SELECTED
    case t.INSTANCES_SELECT:
      return {
        ...state,
        selected: [...state.items.filter(el => el.id === action.payload)]
      };
    case t.INSTANCES_SELECT_RESET:
      return {
        ...state,
        selected: []
      };

    // UPDATE
    case t.INSTANCES_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.INSTANCES_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.map(item => (
          (item.id !== action.payload.id) ? item : { ...item, ...action.payload }))
        ]
      };
    case t.INSTANCES_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    // DELETE
    case t.INSTANCES_DEL_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.INSTANCES_DEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.filter(item => item.id !== action.payload)]
      };
    case t.INSTANCES_DEL_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    // RESETS
    case t.INSTANCES_RESET:
      return {
        ...state,
        isLoading: false,
        items: []
      };
    default:
      return state;
  }
};

export default instances;
