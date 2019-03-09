import { connect } from 'react-redux';
import { instancesUpdateRequest, instancesSelectReset, deleteMessage } from '../../../actions/index';
import View from './View';

const mapStateToProps = state => ({
  item: state.instances.selected[0],
  isLoading: state.instances.isLoading,
  modulesList: state.modules.items,
  roomsList: state.rooms.items,
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  editItem: data => dispatch(instancesUpdateRequest(data)),
  resetSelected: () => dispatch(instancesSelectReset()),
  delMessage: id => dispatch(deleteMessage(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
