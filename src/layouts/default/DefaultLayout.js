
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';

// Sidebar nav config
import navigation from './navigation';

// Routes config
import routes from './routes';

// Import Actions
import { logoutRequest } from '../../actions';

// Components
import Loading from '../../components/shared/loading/Loading';
import ModalRedux from '../../components/shared/modalRedux';

// Lazy Load Components
// const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

const DefaultLayout = (props) => {
  const loading = <div className="animated fadeIn pt-4 text-center"><Loading /></div>;

  const { user, logout } = props;

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <div className="app">
      <AppHeader fixed>
        <Suspense fallback={loading}>
          <DefaultHeader user={user} onLogout={handleLogout} />
        </Suspense>
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <Suspense>
            <AppSidebarNav navConfig={navigation} {...props} />
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <AppBreadcrumb appRoutes={routes} />
          <Container fluid>
            <Suspense fallback={loading}>
              <Switch>
                {routes.map(route => (
                  route.component ? (
                    <Route
                      key={route.id}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={renderProps => <route.component {...renderProps} />}
                    />
                  ) : (null)
                ))}
                <Redirect to="/404" />
              </Switch>
            </Suspense>
          </Container>
        </main>
        {/*
        <AppAside fixed>
          <Suspense fallback={loading}>
            <DefaultAside />
          </Suspense>
        </AppAside>
        */}
      </div>
      <AppFooter>
        <Suspense fallback={loading}>
          <DefaultFooter />
        </Suspense>
      </AppFooter>

      <ModalRedux />
    </div>
  );
};

DefaultLayout.propTypes = {
  user: PropTypes.shape({
    user_id: PropTypes.number,
    username: PropTypes.string
  }).isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
