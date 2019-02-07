import React from 'react';

const Dashboard = React.lazy(() => import('../../components/dashboard/Dashboard'));
const Bots = React.lazy(() => import('../../components/bots/Bots'));
const Rooms = React.lazy(() => import('../../components/rooms/Rooms'));
const Graphs = React.lazy(() => import('../../components/graphs/Graphs'));
const Templates = React.lazy(() => import('../../components/templates/Templates'));
const RoomsAssociation = React.lazy(() => import('../../components/rooms-association/RoomsAssociation'));

const Page404 = React.lazy(() => import('../../components/shared/Pages/Page404'));
const Page500 = React.lazy(() => import('../../components/shared/Pages/Page500'));

const routes = [
  {
    id: 0, path: '/', exact: true, name: 'Dashboard', component: Dashboard
  },
  {
    id: 1, path: '/bots', exact: true, name: 'Bots', component: Bots
  },
  {
    id: 2, path: '/rooms', exact: true, name: 'Rooms', component: Rooms
  },
  {
    id: 3, path: '/graphs', exact: true, name: 'Graphs', component: Graphs
  },
  {
    id: 4, path: '/templates', exact: true, name: 'Templates', component: Templates
  },
  {
    id: 5, path: '/rooms-association', exact: true, name: 'Rooms Associations', component: RoomsAssociation
  },
  {
    id: 98, path: '/500', exact: true, name: '500', component: Page500,
  },
  {
    id: 99, path: '/*', exact: true, name: '404', component: Page404,
  }
];

export default routes;
