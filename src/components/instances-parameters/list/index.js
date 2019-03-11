import { connect } from 'react-redux';

import {
  // InstancesParameters
  instancesParametersByInstanceRequest, instancesParametersNewRequest, instancesParametersDelRequest,
  instancesParametersSelect,
  // Messages
  deleteMessage,
  // Modal
  modalOpen,
  instancesParametersReset,

} from '../../../actions/index';

// Component
import View from './View';

const mapStateToProps = (state, ownProps) => ({
  isLoading: state.instancesParameters.isLoading,
  items: state.instancesParameters.items,
  instanceId: ownProps.match.params.id,
  // Messages
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  // InstancesParameters
  listItems: id => dispatch(instancesParametersByInstanceRequest(id)),
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
