import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  // Instances
  instancesNewRequest,
  // Templates + Rooms
  templatesRequest, roomsRequest,
  // Message
  deleteMessage
} from '../../../actions/index';

import View from './View';

const mapStateToProps = state => ({
  // Templates
  templatesList: state.templates.items,
  isLoading: state.templates.isLoading,
  // Rooms
  roomsList: state.rooms.items,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // Instances
  newItem: data => dispatch(instancesNewRequest(data)),
  // Templates
  listTemplates: () => dispatch(templatesRequest()),
  // Rooms
  listRooms: () => dispatch(roomsRequest()),
  // Messages
  delMessage: id => dispatch(deleteMessage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(View));
