import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// History
import history from './history';

// Libs
import asyncComponent from './lib/asyncComponent';

// Layout
import PublicLayout from './layouts/Page';

// Components Public
const LoginPage = asyncComponent(() => import('./components/auth/Login'));
const RegisterPage = asyncComponent(() => import('./components/auth/Register'));
const NotFound = asyncComponent(() => import('./components/shared/404/NotFound'));

// Components
const Dashboard = asyncComponent(() => import('../components/dashboard/Dashboard'));

const Routes = () => (
  <React.Fragment>
    <Router history={history}>
      <PublicLayout>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </PublicLayout>
    </Router>
  </React.Fragment>
);

export default Routes;
