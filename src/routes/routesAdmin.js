import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Libs
import asyncComponent from '../lib/asyncComponent';
import requireAuth from '../lib/requireAuth';

// Layout
import Layout from '../components/layouts/Default';

// Components
const Dashboard = asyncComponent(() => import('../components/dashboard/Dashboard'));
const Graphs = asyncComponent(() => import('../components/graphs/Graphs'));
const NotFound = asyncComponent(() => import('../components/shared/404/NotFound'));

// Routes
const routesAdmin = (
  <React.Fragment>
    <Layout>
      <Switch>
        <Route exact path="/" component={requireAuth(Dashboard)} />
        <Route exact path="/graphs" component={requireAuth(Graphs)} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </React.Fragment>
);

export default routesAdmin;
