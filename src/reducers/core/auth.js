import { auth as t } from '../../constants';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
  errors: ''
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case t.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: {},
        errors: ''
      };
    case t.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        errors: ''
      };
    case t.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
        errors: action.payload
      };
    // LOGOUT
    case t.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case t.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
        errors: ''
      };
    case t.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      };
    // TOKEN
    case t.TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        errors: ''
      };
    case t.TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: state.user,
        errors: ''
      };
    case t.TOKEN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
        errors: action.payload
      };

    // Reset
    case t.AUTH_RESET:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: {},
        errors: ''
      };
    default:
      return state;
  }
};

export default auth;
