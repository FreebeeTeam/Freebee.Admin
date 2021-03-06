import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import Dashboard from './views/Dashboard';
import Logout from './views/Logout';
import Login from './views/Login';

import {
  callback, dashboard, index, login, logout,
} from './routes/routes';
import { isAuthenticated } from './services/auth';
import { createStore } from './redux';

import 'leaflet/dist/leaflet.css';
import './App.css';
import LoginCallback from './views/LoginCallback/LoginCallback';

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
                  if (!isAuthenticated()) {
                    return <Redirect to={login()} />;
                  }

                  return <Redirect to={dashboard()} />;
                }}
              />
              <Route
                exact
                path={login()}
                render={() => {
                  return <Login />;
                }}
              />
              <Route
                exact
                path={logout()}
                render={() => {
                  return <Logout />;
                }}
              />
              <Route
                exact
                path={callback()}
                render={(props) => {
                  return (
                    <LoginCallback
                      location={props.location}
                      history={props.history}
                    />
                  );
                }}
              />
              <Route
                path={dashboard()}
                render={() => {
                  if (!isAuthenticated()) {
                    return <Redirect to={login()} />;
                  }

                  return <Dashboard />;
                }}
              />
            </Switch>
          </>
        </Router>
      </Provider>
    </>
  );
};

export default App;
