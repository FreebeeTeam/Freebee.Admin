import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect,
} from 'react-router-dom';
import { PageLoading } from './components';
import Dashboard from './views/Dashboard';

import {
  callback, dashboard, index, login, logout,
} from './routes/routes';
import { Auth } from './services';
import { createStore } from './redux';

import 'leaflet/dist/leaflet.css';
import './App.css';

const auth = new Auth();

const handleAuthentication = ({ location, history }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication(history);
  }
};

const WrappedDashboard = authObj => (props) => {
  return <Dashboard auth={authObj} {...props} />;
};


const App = () => {
  return (
    <>
      <Provider store={createStore()}>
        <Router>
          <>
            <Switch>
              <Route
                exact
                path={index()}
                render={() => {
                  if (!auth.isAuthenticated()) {
                    return <Redirect to={login()} />;
                  }

                  return <Redirect to={dashboard()} />;
                }}
              />
              <Route
                exact
                path={login()}
                render={() => {
                  auth.login();
                  return null;
                }}
              />
              <Route
                exact
                path={logout()}
                render={() => {
                  auth.logout();
                  return null;
                }}
              />
              <Route
                exact
                path={callback()}
                render={(props) => {
                  handleAuthentication(props);
                  return <PageLoading {...props} />;
                }}
              />
              <Route path={dashboard()} component={WrappedDashboard(auth)} />
            </Switch>
          </>
        </Router>
      </Provider>
    </>
  );
};

export default App;
