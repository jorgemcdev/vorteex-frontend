import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { tokenRequest } from '../actions';

export default (ComposedComponent) => {
  class Authenticate extends Component {
    componentWillMount() {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.tokenRequest();
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
    tokenRequest: PropTypes.func.isRequired,
  };

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });

  const mapDispatchToProps = {
    tokenRequest
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Authenticate);
};
