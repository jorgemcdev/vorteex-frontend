import { connect } from 'react-redux';

// Actions
import {
  // Item
  instancesUpdateRequest,
  // Related Data
  modulesRequest,
  roomsRequest,
  // Messages
  deleteMessage
} from '../../../actions/index';

// Components
import View from './View';

const mapStateToProps = (state, ownProps) => ({
  // Item
  item: state.instances.items.filter(el => el.id === Number(ownProps.match.params.id))[0],
  isLoading: state.instances.isLoading,
  // Related Data
  modulesList: state.modules.items,
  roomsList: state.rooms.items,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // Item Functions
  editItem: data => dispatch(instancesUpdateRequest(data)),
  // Related Data Functions
  listModules: () => dispatch(modulesRequest()),
  listRooms: () => dispatch(roomsRequest()),
  // Messages
  delMessage: id => dispatch(deleteMessage(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
