import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Libs
import asyncComponent from '../lib/asyncComponent';

// Layout
import Layout from '../layouts/Page';

// Components
const LoginPage = asyncComponent(() => import('../components/auth/Login'));
const RegisterPage = asyncComponent(() => import('../components/auth/Register'));
const NotFound = asyncComponent(() => import('../components/shared/404/NotFound'));

// Routes
const routesPublic = (
  <React.Fragment>
    <Layout>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </React.Fragment>
);

export default routesPublic;
