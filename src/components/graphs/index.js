import { connect } from 'react-redux';

import {
  // Instances
  graphsRequest, graphsReset, graphsDropRequest,
  // Messages
  deleteMessage

} from '../../actions';

// Component
import View from './View';

const mapStateToProps = state => ({
  nodes: state.graphs.nodes,
  edges: state.graphs.edges,
  isLoading: state.graphs.isLoading,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // Graphs
  listItems: () => dispatch(graphsRequest()),
  resetItems: () => dispatch(graphsReset()),
  dropGraph: (data) => dispatch(graphsDropRequest(data)),
  // Messages
  delMessage: id => dispatch(deleteMessage(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
