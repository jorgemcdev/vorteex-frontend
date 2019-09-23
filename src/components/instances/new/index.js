import { connect } from 'react-redux';

import View from './View';

import {
  // Item
  instancesNewRequest,
  // Related Data
  templatesRequest,
  modulesRequest,
  roomsRequest,
  // Messages
  deleteMessage
} from '../../../actions/index';

const mapStateToProps = state => ({
  // Item
  isLoading: state.modules.isLoading,
  // Related Data
  templatesList: state.templates.items,
  modulesList: state.modules.items,
  roomsList: state.rooms.items,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // Item Functions
  newItem: data => dispatch(instancesNewRequest(data)),
  // Related Data Functions
  listTemplates: () => dispatch(templatesRequest()),
  listModules: () => dispatch(modulesRequest()),
  listRooms: () => dispatch(roomsRequest()),
  // Messages
  delMessage: id => dispatch(deleteMessage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
