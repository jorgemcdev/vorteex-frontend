import { connect } from 'react-redux';

import {
  // InstancesParameters
  instancesParametersRequestByInstance, instancesParametersNewRequest, instancesParametersDelRequest,
  instancesParametersSelect,
  // Messages
  deleteMessage,
  // Modal
  modalOpen,
  instancesParametersReset,

} from '../../../actions/index';

// Component
import View from './View';

const mapStateToProps = state => ({
  isLoading: state.instancesParameters.isLoading,
  items: state.instancesParameters.items,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // InstancesParameters
  listItems: id => dispatch(instancesParametersRequestByInstance(id)),
  selectItem: id => dispatch(instancesParametersSelect(id)),
  newItem: data => dispatch(instancesParametersNewRequest(data)),
  deleteItem: id => dispatch(instancesParametersDelRequest(id)),
  resetItems: () => dispatch(instancesParametersReset()),
  // Messages
  delMessage: id => dispatch(deleteMessage(id)),
  // Modal
  modalOpen: data => dispatch(modalOpen(data))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
