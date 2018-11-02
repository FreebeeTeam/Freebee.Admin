import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Auth } from '../services';
import { callback, index, dashboard } from './index';
import { Callback } from '../components';
import Dashboard from '../views/dashboard';

const auth = new Auth();

const handleAuthentication = ({ location, history }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication(history);
  }
};

const WrappedDashboard = authObj => props => <Dashboard auth={authObj} {...props} />;

export default class Routing extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact
            path={index()}
            render={() => {
              if (!auth.isAuthenticated()) {
                auth.login();

                return null;
              }

              return <Redirect to={dashboard()} />;
            }}
          />
          <Route path={dashboard()} component={WrappedDashboard(auth)} />
          <Route
            path={callback()}
            render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
        </Switch>
      </>
    );
  }
}
