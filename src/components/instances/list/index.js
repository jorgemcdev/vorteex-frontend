import { connect } from 'react-redux';

// Import Action Creators
import { instancesRequest, modalOpen } from '../../../actions/index';

// Component
import View from './View';

const mapStateToProps = state => ({
  isLoading: state.instances.isLoading,
  items: state.instances.items,
});

const mapDispatchToProps = dispatch => ({
  listItems: () => dispatch(instancesRequest()),
  modalOpen: data => dispatch(modalOpen(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
