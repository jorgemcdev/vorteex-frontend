import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import View from './View';

import {
  instancesNewRequest,
  modulesRequest,
  roomsRequest,
  deleteMessage
} from '../../../actions/index';

const mapStateToProps = state => ({
  modulesList: state.modules.items,
  isLoading: state.modules.isLoading,
  roomsList: state.rooms.items,
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  newItem: data => dispatch(instancesNewRequest(data)),
  listModules: () => dispatch(modulesRequest()),
  listRooms: () => dispatch(roomsRequest()),
  delMessage: id => dispatch(deleteMessage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(View));
