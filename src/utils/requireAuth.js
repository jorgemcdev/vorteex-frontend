import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { tokenRequest } from '../actions';

export default (ComposedComponent) => {
  class Authenticate extends Component {
    componentWillMount() {
      const { verifyToken } = this.props;
      verifyToken();
    }

    render() {
      const { isAuthenticated } = this.props;
      return (
        isAuthenticated && <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    verifyToken: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  const mapDispatchToProps = dispatch => ({
    verifyToken: () => dispatch(tokenRequest())
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticate);
};
