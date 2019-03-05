import { connect } from 'react-redux';

import {
  // Instances
  instancesUpdateRequest, instancesSelectReset,
  // Message
  deleteMessage
} from '../../../actions/index';

import View from './View';

const mapStateToProps = state => ({
  // Instances
  item: state.instances.selected[0],
  isLoading: state.instances.isLoading,
  // Templates
  templatesList: state.templates.items,
  // Rooms
  roomsList: state.rooms.items,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // Instances
  editItem: data => dispatch(instancesUpdateRequest(data)),
  resetSelected: () => dispatch(instancesSelectReset()),
  // Messages
  delMessage: id => dispatch(deleteMessage(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
