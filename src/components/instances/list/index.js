import { connect } from 'react-redux';

import {
  // Instances
  instancesRequest, instancesNewRequest, instancesDelRequest,
  // Messages
  deleteMessage,
  // Modal
  modalOpen,
  instancesReset,

} from '../../../actions/index';

// Component
import View from './View';

const mapStateToProps = state => ({
  isLoading: state.instances.isLoading,
  items: state.instances.items,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // Instances
  listItems: () => dispatch(instancesRequest()),
  newItem: data => dispatch(instancesNewRequest(data)),
  deleteItem: id => dispatch(instancesDelRequest(id)),
  resetItems: () => dispatch(instancesReset()),
  // Messages
  delMessage: id => dispatch(deleteMessage(id)),
  // Modal
  modalOpen: data => dispatch(modalOpen(data))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
