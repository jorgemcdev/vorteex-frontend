import { instancesParameters as t } from '../../constants';

const initialState = {
  isLoading: false,
  items: []
};
const instancesParameters = (state = initialState, action) => {
  switch (action.type) {
    // CREATE
    case t.INSTANCES_PARAMETERS_NEW_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: [action.payload]
      };
    case t.INSTANCES_PARAMETERS_NEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [action.payload]
      };
    case t.INSTANCES_PARAMETERS_NEW_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    // READ
    case t.INSTANCES_PARAMETERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        items: []
      };

    case t.INSTANCES_PARAMETERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };

    case t.INSTANCES_PARAMETERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        items: []
      };

    case t.INSTANCES_PARAMETERS_BY_INSTANCE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        items: []
      };
    }

    case t.INSTANCES_PARAMETERS_BY_INSTANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload
      };

    case t.INSTANCES_PARAMETERS_BY_INSTANCE_FAILURE:
      return {
        ...state,
        isLoading: false,
        items: []
      };

    // SELECTED
    case t.INSTANCES_PARAMETERS_SELECT:
      return {
        ...state,
        selected: [...state.items.filter(el => el.id === action.payload)]
      };

    case t.INSTANCES_PARAMETERS_SELECT_RESET:
      return {
        ...state,
        selected: []
      };

    // UPDATE
    case t.INSTANCES_PARAMETERS_UPDATE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.INSTANCES_PARAMETERS_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.map(item => (
          (item.id !== action.payload.id) ? item : { ...item, ...action.payload }))
        ]
      };
    case t.INSTANCES_PARAMETERS_UPDATE_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    // DELETE
    case t.INSTANCES_PARAMETERS_DEL_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.INSTANCES_PARAMETERS_DEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.filter(item => item.id !== action.payload)]
      };
    case t.INSTANCES_PARAMETERS_DEL_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    // RESETS
    case t.INSTANCES_PARAMETERS_RESET:
      return {
        ...state,
        isLoading: false,
        items: []
      };
    default:
      return state;
  }
};

export default instancesParameters;
