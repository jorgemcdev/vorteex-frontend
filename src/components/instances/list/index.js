import { connect } from 'react-redux';

import {
  // Instances
  instancesRequest, instancesNewRequest, instancesDelRequest,
  instancesSelect,
  // Related Data
  templatesRequest, modulesRequest, roomsRequest,
  // Messages
  deleteMessage,
  // Modal
  modalOpen
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
  selectItem: id => dispatch(instancesSelect(id)),
  newItem: data => dispatch(instancesNewRequest(data)),
  deleteItem: id => dispatch(instancesDelRequest(id)),
  // Related Data
  listTemplates: () => dispatch(templatesRequest()),
  listModules: () => dispatch(modulesRequest()),
  listRooms: () => dispatch(roomsRequest()),
  // Messages
  delMessage: id => dispatch(deleteMessage(id)),
  // Modal
  modalOpen: data => dispatch(modalOpen(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
