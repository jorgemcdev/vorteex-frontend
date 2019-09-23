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

    // DROP NODES
    case t.GRAPHS_DROP_REQUEST:
      return {
        ...state
      };
    case t.GRAPHS_DROP_STORE:
      console.log('NODES:', state.nodes);
      return {
        ...state,
        nodes: [...state.nodes.map(item => (
          (item.id !== action.payload.id)
            ? item
            : { ...item, ...{ x: action.payload.x, y: action.payload.y } }))
        ]
      };
    case t.GRAPHS_DROP_SUCCESS:
      return {
        ...state,
        nodes: action.payload.nodes
      };
    case t.GRAPHS_DROP_FAILURE:
      return {
        ...state,
        nodes: []
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
