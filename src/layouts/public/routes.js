import React from 'react';

const Login = React.lazy(() => import('../../components/auth/login/LoginForm'));
const Page404 = React.lazy(() => import('../../components/shared/Pages/Page404'));
const Page500 = React.lazy(() => import('../../components/shared/Pages/Page500'));

const routes = [
  {
    id: 1, path: '/', exact: true, name: 'Login', component: Login,
  },
  {
    id: 8, path: '/500', exact: true, name: '500', component: Page500,
  },
  {
    id: 9, path: '/*', exact: true, name: '404', component: Page404,
  }
];

export default routes;
