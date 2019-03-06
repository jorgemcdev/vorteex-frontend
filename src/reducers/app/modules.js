import { modules as t } from '../../constants';

const initialState = {
  isLoading: false,
  items: []
};
const modules = (state = initialState, action) => {
  switch (action.type) {

    case t.MODULES_NEW_REQUEST:
      return { ...state, isLoading: true, items: [action.payload] };

    case t.MODULES_NEW_SUCCESS:
      return { ...state, isLoading: false, items: [action.payload] };

    case t.MODULES_NEW_FAILURE:
      return { ...state, isLoading: false };

    case t.MODULES_REQUEST:
      return { ...state, isLoading: true, items: [] };

    case t.MODULES_SUCCESS:
      return { ...state, isLoading: false, items: action.payload };

    case t.MODULES_FAILURE:
      return { ...state, isLoading: false, items: [] };

    case t.MODULES_UPDATE_REQUEST:
      return { ...state, isLoading: true };

    case t.MODULES_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [...state.items.map(
          item => ( (item.id !== action.payload.id) ? item : { ...item, ...action.payload })
        )]
      };

    case t.MODULES_UPDATE_FAILURE:
      return { ...state, isLoading: false };

    case t.MODULES_DEL_REQUEST:
      return { ...state, isLoading: true };

    case t.MODULES_DEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: [ ...state.items.filter(
          item => item.id !== action.payload
        )]
      };

    case t.MODULES_DEL_FAILURE:
      return { ...state, isLoading: false };

    case t.MODULES_RESET:
      return { ...state, isLoading: false, items: [] };
    
    default:
      return state;
  }
};

export default modules;
