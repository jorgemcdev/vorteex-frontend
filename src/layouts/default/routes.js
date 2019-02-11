import React from 'react';

const Dashboard = React.lazy(() => import('../../components/dashboard/Dashboard'));
const Instances = React.lazy(() => import('../../components/instances'));
const Templates = React.lazy(() => import('../../components/templates'));
const TemplatesGroups = React.lazy(() => import('../../components/templates-groups'));
const Modules = React.lazy(() => import('../../components/modules'));
const Rooms = React.lazy(() => import('../../components/rooms'));

const Page404 = React.lazy(() => import('../../components/shared/Pages/Page404'));
const Page500 = React.lazy(() => import('../../components/shared/Pages/Page500'));

const routes = [
  {
    id: 0, path: '/', exact: true, name: 'Dashboard', component: Dashboard
  },
  {
    id: 1, path: '/instances', exact: true, name: 'Instances', component: Instances
  },
  {
    id: 2, path: '/templates', exact: true, name: 'Templates', component: Templates
  },
  {
    id: 3, path: '/templates-groups', exact: true, name: 'Templates Groups', component: TemplatesGroups
  },
  {
    id: 4, path: '/modules', exact: true, name: 'Modules', component: Modules
  },
  {
    id: 5, path: '/rooms', exact: true, name: 'Rooms', component: Rooms
  },
  {
    id: 98, path: '/500', exact: true, name: '500', component: Page500,
  },
  {
    id: 99, path: '/*', exact: true, name: '404', component: Page404,
  }
];

export default routes;
