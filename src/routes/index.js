import React from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router-dom';
import PropTypes from 'prop-types';

// History
import history from '../history';

// Load Possivel Routes
import routesPublic from './routesPublic';
import routesAdmin from './routesAdmin';

const ActiveRoutes = ({ isAuthenticated }) => {
  let myActiveRoutes;
  if (isAuthenticated === true) {
    myActiveRoutes = routesAdmin;
  } else {
    myActiveRoutes = routesPublic;
  }
  return (
    <Router history={history}>
      {myActiveRoutes}
    </Router>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

ActiveRoutes.defaultProps = {
  isAuthenticated: false
};

ActiveRoutes.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default connect(
  mapStateToProps,
  null
)(ActiveRoutes);
