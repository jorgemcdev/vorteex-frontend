import React from 'react';

const Dashboard = React.lazy(() => import('../../components/dashboard/Dashboard'));
const Graphs = React.lazy(() => import('../../components/graphs/Graphs'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    id: 1, path: '/', exact: true, name: 'Dashboard', component: Dashboard
  },
  {
    id: 2, path: '/graphs', exact: true, name: 'Graphs', component: Graphs
  },
];

export default routes;
