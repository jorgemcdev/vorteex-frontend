/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// routes config
import routes from './routes';

const PublicLayout = () => {
  const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;
  return (
    <div className="app flex-row align-items-center">
      <Suspense fallback={loading()}>
        <Switch>
          {routes.map(route => (
            route.component ? (
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )}
              />
            ) : (null)
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default PublicLayout;
