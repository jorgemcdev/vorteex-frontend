import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import View from './View';

import {
  instancesParametersRequest,
  deleteMessage
} from '../../../actions/index';

const mapStateToProps = state => ({
  instancesParametersList: state.instanceParameters.items,
  isLoading: state.modules.isLoading,
  messages: state.message
});

const mapDispatchToProps = dispatch => ({
  listInstancesParameters: () => dispatch(instancesParametersRequest()),
  delMessage: id => dispatch(deleteMessage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(View));
