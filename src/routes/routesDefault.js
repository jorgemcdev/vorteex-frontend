import React from 'react';

const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));

// Instances
const Instances = React.lazy(() => import('../components/instances/list'));
const InstancesNew = React.lazy(() => import('../components/instances/new'));
const InstancesEdit = React.lazy(() => import('../components/instances/forms/FormEdit'));

// Templates
const Templates = React.lazy(() => import('../components/templates'));

// TemplateGroups
const TemplatesGroups = React.lazy(() => import('../components/templates-groups'));

// Modules
const Modules = React.lazy(() => import('../components/modules'));

// Rooms
const Rooms = React.lazy(() => import('../components/rooms'));

// Pages
const Page404 = React.lazy(() => import('../components/shared/pages/Page404'));
const Page500 = React.lazy(() => import('../components/shared/pages/Page500'));

const routes = [
  // Dashboard
  {
    id: 0, path: '/', exact: true, name: 'Dashboard', component: Dashboard
  },
  // Instances
  {
    id: 1, path: '/instances', exact: true, name: 'Instances', component: Instances
  },
  {
    id: 11, path: '/instances/new', exact: true, name: 'New', component: InstancesNew
  },
  {
    id: 12, path: '/instances/edit/:id', exact: true, name: 'Edit', component: InstancesEdit
  },
  // Templates
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
    id: 99, path: '/404', exact: true, name: '404', component: Page404,
  }
];

export default routes;
