import { graphs as t } from '../../constants';

const initialState = {
  isLoading: false,
  nodes: [],
  edges: []
};
const graphs = (state = initialState, action) => {
  switch (action.type) {
    // READ
    case t.GRAPHS_REQUEST:
      return {
        ...state,
        isLoading: true,
        nodes: [],
        edges: []
      };
    case t.GRAPHS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        nodes: action.payload.nodes,
        edges: action.payload.edges
      };
    case t.GRAPHS_FAILURE:
      return {
        ...state,
        isLoading: false,
        nodes: [],
        edges: []
      };

    // RESETS
    case t.GRAPHS_RESET:
      return {
        ...state,
        isLoading: false,
        nodes: [],
        edges: []
      };
    default:
      return state;
  }
};

export default graphs;
