import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

// routes config
import routes from './routes';

// Component
import Loading from '../../components/shared/loading/Loading';

const PublicLayout = () => {
  const loading = <Container className="justify-content-center"><Loading /></Container>;

  return (
    <div className="app flex-row align-items-center">
      <Suspense fallback={loading}>
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
            ) : null
          ))}
        </Switch>
      </Suspense>
    </div>
  );
};

export default PublicLayout;
