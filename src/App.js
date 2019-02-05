import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import './App.scss';

// History
import history from './history';

// Lib
import requireAuth from './lib/requireAuth';

// Layouts
import Public from './layouts/public/PublicLayout';
import Default from './layouts/default/DefaultLayout';

const ActiveRoutes = ({ isAuthenticated }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={isAuthenticated ? requireAuth(Default) : Public} />
    </Switch>
  </Router>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

ActiveRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  null
)(ActiveRoutes);
