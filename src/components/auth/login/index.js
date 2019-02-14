import { connect } from 'react-redux';

// Actions
import { loginRequest, authReset } from '../../../actions/index';

// Component
import View from './View';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  errors: state.auth.errors
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginRequest(data)),
  reset: () => dispatch(authReset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);
