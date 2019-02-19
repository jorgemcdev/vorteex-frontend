import { rooms as t } from '../../constants';

const initialState = {
  isLoading: false,
  items: []
};
const rooms = (state = initialState, action) => {
  switch (action.type) {
    // CREATE
    case t.ROOMS_NEW_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: [action.payload]
      };
    case t.ROOMS_NEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [action.payload]
      };
    case t.ROOMS_NEW_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    // READ
    case t.ROOMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: []
      };
    case t.ROOMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };
    case t.ROOMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        items: []
      };

    // UPDATE
    case t.ROOMS_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.ROOMS_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.map(item => (
          (item.id !== action.payload.id) ? item : { ...item, ...action.payload }))
        ]
      };
    case t.ROOMS_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    // DELETE
    case t.ROOMS_DEL_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.ROOMS_DEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.filter(item => item.id !== action.payload)]
      };
    case t.ROOMS_DEL_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    // RESETS
    case t.ROOMS_RESET:
      return {
        ...state,
        isLoading: false,
        items: []
      };
    default:
      return state;
  }
};

export default rooms;
